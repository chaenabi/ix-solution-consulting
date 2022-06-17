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
    ).innerHTML = `<i class="zmdi zmdi-eye"></i> ${result.commentSize}`

    document.querySelector('#content-title').innerHTML = result.postTitle
    document.querySelector('#blog-content').innerHTML += result.postContent
    document.querySelector('#author').innerHTML += result.author.nickname

    for (comment of result.comments) {
      document.querySelector('#comment-writer').innerHTML = comment.writer
      document.querySelector('#comment-createAt').innerHTML = comment.createAt
      document.querySelector('#blog-comment').innerHTML = comment.content
    }
  })
}

window.addEventListener('load', loadPostOne())

const addComment = () => {
  const body = {
    postId: 15,
    content: '새로 쓴 댓글 내용 15',
    writer: '글쓴이 테스트 15',
    password: '12345'
  }

  const result = axios.post(`http://127.0.0.1:8080/v1/comments`, body)


  result.then((res) => {
    console.log(res.data)
  })

  location.reload()
}