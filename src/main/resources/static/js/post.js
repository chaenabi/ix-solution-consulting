window.addEventListener('load', () => {
  if (!getSignInData()) {
    alert('글쓰기 권한이 없습니다.')
    location.href = '../board.html'
  }
})

const quill = new Quill('#post-content', {
  modules: {
    toolbar: '#toolbar-container',
  },
  theme: 'snow',
})

function handlePostSubmit() {
  let category = document.querySelector('#post-category').value
  let title = document.querySelector('#post-title').value
  let content = document.querySelector('#post-content').outerText

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
    .post(`http://3.39.207.182:8080/v1/posts`, body, {
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

  const result = axios.get(`http://3.39.207.182:8080/v1/auth/login`, auth)

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
