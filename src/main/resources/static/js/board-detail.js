const loadPostOne = () => {
  let urlparam = location.href.split('?')
  let postId = urlparam[1].split('=')[1].replace('#', '')
  const postOne = axios.get(`http://3.39.207.182:8080/v1/posts/${postId}`)

  postOne.then(res => {
    const result = res.data.data

    document.querySelector(
      '#content-date'
    ).innerHTML = `<i class="zmdi zmdi-calendar-check"></i> ${result.createAt}`
    document.querySelector(
      '#content-sawCount'
    ).innerHTML = `<i class="zmdi zmdi-eye"></i> ${result.sawCount}`
    document.querySelector(
      '#content-commentCount'
    ).innerHTML = `<i class="zmdi zmdi-comments"></i> ${result.commentSize}`

    if (JSON.parse(localStorage.getItem('account')).id !== null) {
      const view = document.querySelector('#single-item-comment-view')
      view.innerHTML += `<i class="zmdi zmdi-edit" id="content-edit${postId}" onclick="updatePost(event);" onmousehover="" style="cursor: pointer; color: blue"></i>&emsp;`
      view.innerHTML += `<i class="zmdi zmdi-delete" id="content-delete${postId}" onclick="deletePost(event)" onmousehover="" style="cursor: pointer; color: red"></i>`
    }

    document.querySelector('#content-title').innerHTML = result.postTitle
    document.querySelector('#blog-content').innerHTML += result.postContent
    document.querySelector('#author').innerHTML += result.author.nickname

    const comments = result.comments

    for (let i = 0; i < comments.length; i++) {
      document.querySelector('#comment').innerHTML += `
      <div class="comment">
          <div class="comment-content">
            <div class="comment-content-top">
               <h6 id="comment-writer${comments[i].id}"></h6>
               <span id="comment-createAt${comments[i].id}"></span>
            </div>
          <div class="comment-content-bottom" id="blog-comment${comments[i].id}">
          </div>
      </div>
      `

      document.querySelector(`#comment-writer${comments[i].id}`).innerHTML =
        comments[i].writer
      document.querySelector(`#comment-createAt${comments[i].id}`).innerHTML =
        comments[i].createAt +
        `&emsp;<i class="zmdi zmdi-edit" id="comment-edit${comments[i].id}" onclick="prepareEditComment(event);" onmousehover="" style="cursor: pointer; color: blue"></i>
        &emsp;<i class="zmdi zmdi-delete" id="comment-delete${comments[i].id}" onclick="prepareDeleteComment(event)"; onmousehover="" style="cursor: pointer; color: red"></i>`
      document.querySelector(`#blog-comment${comments[i].id}`).innerHTML =
        comments[i].content
    }
  })
}

window.addEventListener('load', loadPostOne())

const updatePost = e => {
  const postId = e.target.id.replace('content-edit', '')

  location.href = `board-post.html?id=${postId}`
}

const deletePost = e => {
  if (confirm('정말로 삭제하시겠습니까? 삭제하면 되돌릴 수 없습니다.')) {
    const postId = e.target.id.replace('content-delete', '')
    const account = JSON.parse(localStorage.getItem('account'))

    const memberId = account.id

    const body = {
      postId: postId,
      memberId: memberId,
    }

    axios
      .post(`http://3.39.207.182:8080/v1/posts/remove`, body, {
        headers: {
          Authorization: `Bearer ${account.accessToken}`,
        },
      })
      .then(res => {
        alert('삭제되었습니다.')
        location.href = 'board.html'
      })
      .catch(err => {
        let error = err.response?.data
        if (error.code === 401) {
          alert(error.message)
        } else if (error.code === 500) {
          alert('예기치 못한 문제가 발생했습니다. 잠시 뒤에 다시 시도해주세요.')
        }
      })
  }
}

const addComment = () => {
  let urlparam = location.href.split('?')
  let postId = urlparam[1].split('=')[1].replace('#', '')
  const name = document.querySelector('#commenter-name').value
  const password = document.querySelector('#commenter-password').value
  const message = document.querySelector('#commenter-message').value

  if (name.trim() === '') {
    alert('이름을 입력해주세요')
    return
  }

  if (password.trim() === '') {
    alert('비밀번호를 입력해주세요')
    return
  }

  if (message.trim() === '') {
    alert('내용을 입력해주세요')
    return
  }

  const body = {
    postId: postId,
    content: message,
    writer: name,
    password: password,
  }

  const result = axios.post(`http://3.39.207.182:8080/v1/comments`, body)

  result
    .then(res => {
      console.log(res.data)
      location.reload()
    })
    .catch(err => {
      console.log(`error: `, err)
    })
}

let preComment = ''
let createEditOnce = true

const prepareEditComment = e => {
  if (localStorage.getItem('account') === null) return
  const getId = e.target.id.replace('comment-edit', '')

  const commentTag = document.querySelector(`#blog-comment${getId}`)
  preComment = commentTag.innerHTML

  if (createEditOnce) {
    commentTag.innerHTML = ''
    commentTag.innerHTML = `<textarea id='edit-textarea${getId}'>${preComment}</textarea>`
    commentTag.innerHTML += `<br><br>Password: <input type='password' id="edit-password${getId}" style='width:200px;'/>`
    commentTag.innerHTML += `<br><br><button class="update-btn" id="edit-btn${getId}" onclick="updateComment(event);">수정</button>`
    commentTag.innerHTML += `<p id="failMessage" style="color:red; font-weight: bold;"></p>`
    createEditOnce = false
  }
}

const updateComment = e => {
  if (localStorage.getItem('account') === null) return
  const getCommentId = e.target.id.replace('edit-btn', '')
  const comment = document.querySelector(`#edit-textarea${getCommentId}`).value
  const password = document.querySelector(`#edit-password${getCommentId}`).value

  console.log(getCommentId, comment, password)

  const body = {
    commentId: getCommentId,
    content: comment,
    password: password,
  }

  const result = axios.patch(`http://3.39.207.182:8080/v1/comments`, body)

  result
    .then(res => {
      console.log(res)
      location.reload()
    })
    .catch(err => {
      let error = err.response?.data
      let failSignInMsg = document.querySelector('#failMessage')
      if (error.code === 400) {
        failSignInMsg.innerHTML = '본문 및 비밀번호를 입력해주세요.'
      } else if (error.code === 500) {
        failSignInMsg.innerHTML =
          '예기치 못한 문제가 발생했습니다. 잠시 뒤에 다시 시도해주세요.'
      } else {
        failSignInMsg.innerHTML = error.message
      }
    })
}

let createRemoveOnce = true

const prepareDeleteComment = e => {
  if (localStorage.getItem('account') === null) return
  const getId = e.target.id.replace('comment-delete', '')
  const commentTag = document.querySelector(`#blog-comment${getId}`)
  if (createRemoveOnce) {
    commentTag.innerHTML += `<br><br>Password: <input type='password' id="edit-password${getId}" style='width:200px;'/>`
    commentTag.innerHTML += `<br><br><button class="update-btn" id="remove-btn${getId}" onclick="deleteComment(event);">삭제</button>`
    commentTag.innerHTML += `<p id="failMessage" style="color:red; font-weight: bold;"></p>`
    createRemoveOnce = false
  }
}

const deleteComment = e => {
  if (localStorage.getItem('account') === null) return
  const getCommentId = e.target.id.replace('remove-btn', '')
  const password = document.querySelector(`#edit-password${getCommentId}`).value

  console.log(getCommentId, password)

  const params = {
    commentId: getCommentId,
    password: password,
  }

  const result = axios.delete(`http://3.39.207.182:8080/v1/comments/remove`, {
    params,
  })

  result
    .then(res => {
      console.log(res)
      location.reload()
    })
    .catch(err => {
      let error = err.response?.data
      let failSignInMsg = document.querySelector('#failMessage')
      if (error.code === 400) {
        failSignInMsg.innerHTML = '본문 및 비밀번호를 입력해주세요.'
      } else if (error.code === 500) {
        failSignInMsg.innerHTML =
          '예기치 못한 문제가 발생했습니다. 잠시 뒤에 다시 시도해주세요.'
      } else {
        failSignInMsg.innerHTML = error.message
      }
    })
}
