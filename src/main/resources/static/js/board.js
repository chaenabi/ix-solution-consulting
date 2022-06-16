const fn_write = () => {
  if (!getSignInData()) {
    alert('글쓰기 권한이 없습니다.')
    return false
  }
  location.href = 'board-post.html'
  return true
}

const getPostList = pageNumber => {
  const posts = axios.get(`http://127.0.0.1:8080/v1/posts`, {
    params: { page: pageNumber },
  })

  posts.then(res => {
    const result = res.data.data
    const post = result.selectedPosts
    const selectedPageNumber = result.selectedPageNumber
    const totalPages = result.totalPages

    // push contents in table
    let postListTable = document.querySelector('#postList > tbody')

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
      cell.width = 10
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
}

const authBtn = () => {
  if (localStorage.getItem('account')) {
    let writeBtn = document.querySelector('#auth-write-btn')
    writeBtn.innerHTML = `<a href='#' onclick='fn_write()' class="btn btn-success">글쓰기</a>`
  } else {
    let authBtn = document.querySelector('#auth-write-btn')
    authBtn.innerHTML = `<a href='login-register.html' class="btn btn-success">로그인</a>`
  }
}

const onload = () => {
  // 로그인 / 비로그인시 버튼 표시
  authBtn()
  getPostList(1)
  paging(totalPage, selectedPageNumber)
}

const paging = () => {
  let paging = document.querySelector('#pagination :first-child')

  for (let i = 1; i <= totalPages; i++) {
    if (i === selectedPageNumber) {
      paging.innerHTML += `<li class="current" id="li${i}"><a href="#" onclick="getPostList(${i})">${i}</a></li>`
    } else {
      paging.innerHTML += `<li id="li${i}"><a href="#" onclick="getPostList(${i})">${i}</a></li>`
    }
  }
}

window.addEventListener('load', onload())
window.addEventListener('click', onclick())
