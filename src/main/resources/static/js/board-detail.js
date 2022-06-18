const loadPostOne = () => {
  let urlparam = location.href.split('?')
  let postId = urlparam[1].split('=')[1].replace('#', '')
  const postOne = axios.get(`http://127.0.0.1:8080/v1/posts/${postId}`)

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

    document.querySelector('#content-title').innerHTML = result.postTitle
    document.querySelector('#blog-content').innerHTML += result.postContent
    document.querySelector('#author').innerHTML += result.author.nickname

    const comments = result.comments

    for (let i = 0; i < comments.length; i++) {
      document.querySelector('#comment').innerHTML += `
      <div class="comment">
          <div class="comment-content">
            <div class="comment-content-top">
               <h6 id="comment-writer${i}"></h6>
               <span id="comment-createAt${i}"><i class="zmdi zmdi-calendar-check">sad</i></span>
            </div>
          <div class="comment-content-bottom" id="blog-comment${i}">
          </div>
      </div>
      `

      document.querySelector(`#comment-writer${i}`).innerHTML =
        comments[i].writer
      document.querySelector(`#comment-createAt${i}`).innerHTML =
        comments[i].createAt
      document.querySelector(`#blog-comment${i}`).innerHTML =
        comments[i].content
    }
  })
}

window.addEventListener('load', loadPostOne())

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

  console.log(body)

  const result = axios.post(`http://127.0.0.1:8080/v1/comments`, body)

  result.then(res => {
    console.log(res.data)
    location.reload()
  })
}
