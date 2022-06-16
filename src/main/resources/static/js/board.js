window.addEventListener('load', async () => {
  const posts = await axios.get(`http://127.0.0.1:8080/v1/posts`, {
    params: { page: 1 },
  })

  const post = posts.data.data.selectedPosts

  let postListTable = document.querySelector('#postList > tbody')
  console.log(postListTable.innerHTML)
  for (p of post) {
    date = new Date(p.createAt).toISOString()

    row = postListTable.insertRow()

    cell = row.insertCell()
    cell.width = 10
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${p.postId}</td>`

    cell = row.insertCell()
    cell.width = 10
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${p.categoryName}</td>`

    cell = row.insertCell()
    cell.width = 100
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${p.postTitle}</td>`

    cell = row.insertCell()
    cell.width = 50
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${p.member?.nickname}</td>`

    cell = row.insertCell()
    cell.width = 40
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${date.split('T')[0]}</td>`

    cell = row.insertCell()
    cell.width = 10
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${p.comments.length}</td>`

    cell = row.insertCell()
    cell.width = 10
    cell.style.wordBreak = 'break-all'
    cell.innerHTML = `<td>${p.sawCount}</td>`
  }
})

const fn_write = () => {
  if (!getSignInData()) {
    alert('글쓰기 권한이 없습니다.')
    return false
  }
  location.href = '../board-post.html'
  return true
}
