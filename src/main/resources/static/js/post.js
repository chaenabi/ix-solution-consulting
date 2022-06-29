window.addEventListener('load', () => {
  if (!getSignInData()) {
    alert('글쓰기 권한이 없습니다.')
    history.back()
  }

  isForUpdate()
})

const quill = new Quill('#post-content', {
  modules: {
    toolbar: '#toolbar-container',
  },
  theme: 'snow',
})

quill.getModule('toolbar').addHandler('image', () => {
  selectLocalImage()
})

const selectLocalImage = () => {
  const input = document.createElement('input')
  input.setAttribute('type', 'file')
  input.click()

  input.onchange = function () {
    const fd = new FormData()
    const file = $(this)[0].files[0]
    fd.append('fileType', 'IMAGE')
    fd.append('attachFile', file)

    const account = JSON.parse(localStorage.getItem('account'))
    $.ajax({
      type: 'post',
      enctype: 'multipart/form-data',
      url: '/v1/posts/attachFile',
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Authorization', `Bearer ${account.accessToken}`)
      },
      success: function (data) {
        const range = quill.getSelection()

        quill.insertEmbed(range.index, 'image', data.data)
      },
      error: function (err) {
        console.error('Error: ' + err)
      },
    })
  }
}

function handlePostSubmit() {
  let category = document.querySelector('#post-category').value
  let title = document.querySelector('#post-title').value
  let content = document.querySelector('.ql-editor').innerHTML

  if (title.trim() === '') {
    alert('제목을 입력해주세요')
    return
  }

  if (content.trim() === '') {
    alert('내용을 입력해주세요')
    return
  }

  const account = JSON.parse(localStorage.getItem('account'))

  const body = {
    categoryName: category,
    postTitle: title,
    postContent: content,
    memberId: account.id,
  }

  axios
    .post(`https://ixconsulting.co.kr/v1/posts`, body, {
      headers: {
        Authorization: `Bearer ${account.accessToken}`,
      },
    })
    .then(res => {
      location.href = 'board.html'
    })
}

function preventTokenExpired() {
  const account = localStorage.getItem('account')
  if (!account) return
  const parseAccount = JSON.parse(account)

  const auth = {
    headers: { Authorization: `Bearer ${parseAccount.accessToken}` },
  }

  const result = axios.get(`https://ixconsulting.co.kr/v1/auth/login`, auth)

  result.then(res => {
    const data = res.data.data
    const account = {
      id: data['id'],
      name: data['name'],
      nickname: data['nickname'],
      accessToken: data['accessToken'],
    }
    localStorage.setItem('account', JSON.stringify(account))
  })
}

const twoHour = 1000 * 60 * 60 * 2

setInterval(() => {
  preventTokenExpired()
}, twoHour)

const isForUpdate = () => {
  if (location.href.includes('?')) {
    let urlparam = location.href.split('?')
    let postId = urlparam[1].split('=')[1].replace('content-edit', '')
    const postOne = axios.get(`https://ixconsulting.co.kr/v1/posts/${postId}`)

    postOne.then(res => {
      const result = res.data.data
      document.querySelector('#post-category').value = result.categoryName
      document.querySelector('#post-title').value = result.postTitle
      document.querySelector('.ql-editor').innerHTML = result.postContent
    })

    let sentBtn = document.querySelector('.sent-btn')
    sentBtn.hidden = true

    const updatePostTag = `<button type="button" class="update-btn" onclick="handlePatchPost(${postId})">수정</button>`

    sentBtn.insertAdjacentHTML('afterend', updatePostTag)
  }
}

const handlePatchPost = postId => {
  if (localStorage.getItem('account') === null) return

  let category = document.querySelector('#post-category').value
  let title = document.querySelector('#post-title').value
  let content = document.querySelector('.ql-editor').innerHTML

  if (title.trim() === '') {
    alert('제목을 입력해주세요')
    return
  }

  if (content.trim() === '') {
    alert('내용을 입력해주세요')
    return
  }

  const account = JSON.parse(localStorage.getItem('account'))

  const body = {
    categoryName: category,
    postTitle: title,
    postContent: content,
    memberId: account.id,
    postId: postId,
  }

  const result = axios.patch(`https://ixconsulting.co.kr/v1/posts`, body, {
    headers: {
      Authorization: `Bearer ${account.accessToken}`,
    },
  })

  result
    .then(_ => {
      alert('수정이 성공적으로 완료되었습니다.')
      location.href = 'board.html'
    })
    .catch(err => {
      console.log(`error: `, err)
    })
}
