let once = true

const fn_write = () => {
  if (!getSignInData()) {
    alert('글쓰기 권한이 없습니다.')
    return false
  }
  location.href = 'board-post.html'
  return true
}

const getPostList = pageNumber => {
  const posts = axios.get(`http://3.39.207.182:8080/v1/posts`, {
    params: { page: pageNumber },
  })

  posts.then(res => {
    const result = res.data.data
    const post = result.selectedPosts
    const selectedPageNumber = result.selectedPageNumber
    const totalPages = result.totalPages

    // 테이블에 게시물 리스트 삽입
    let postListTable = document.querySelector('#postList > tbody')
    postListTable.innerHTML = ''

    for (p of post) {
      row = postListTable.insertRow()

      // cell = row.insertCell()
      // cell.style.wordBreak = 'break-all'
      // cell.innerHTML = `<td>${p.postId}</td>`

      cell = row.insertCell()
      cell.style.wordBreak = 'break-all'
      cell.innerHTML = `<td>${p.categoryName}</td>`

      cell = row.insertCell()
      cell.style.wordBreak = 'break-all'
      cell.innerHTML = `<td><a href="#" onclick=findOnePost(${p.postId})>${p.postTitle}</a></td>`

      cell = row.insertCell()
      cell.style.wordBreak = 'break-all'
      cell.innerHTML = `<td>${p.member?.nickname}</td>`

      cell = row.insertCell()
      cell.style.wordBreak = 'break-all'
      cell.innerHTML = `<td>${p.createAt}</td>`

      cell = row.insertCell()
      cell.style.wordBreak = 'break-all'
      cell.innerHTML = `<td>${p.comments.length}</td>`

      cell = row.insertCell()
      cell.style.wordBreak = 'break-all'
      cell.innerHTML = `<td>${p.sawCount}</td>`
    }

    // 페이징 처리
    if (once) {
      paging(totalPages, selectedPageNumber)
      once = false
    }
  })
}

const authBtn = () => {
  if (localStorage.getItem('account')) {
    let writeBtn = document.querySelector('#auth-write-btn')
    writeBtn.innerHTML = `<a href='#' onclick='fn_write()' class="btn btn-success">글쓰기</a>`

    let signOutbtn = document.querySelector('#sign-out-btn')
    signOutbtn.innerHTML = `<a href='#' onclick='signOut()' class="btn btn-danger">로그아웃</a>`
  } else {
    let authBtn = document.querySelector('#auth-write-btn')
    authBtn.innerHTML = `<a href='login-register.html' class="btn btn-success">로그인</a>`
  }
}

const paging = totalPages => {
  let paging = document.querySelector('#pagination')

  for (let i = 1; i <= totalPages; i++) {
    paging.innerHTML += `<li id="li${i}"><a href="#" onclick="getPostList(${i})">${i}</a></li>`
  }
}

const onload = () => {
  // 로그인 / 비로그인시 버튼 표시
  authBtn()

  // 최초 게시물 가져오기 (1페이지)
  getPostList(1)
}

window.addEventListener('load', onload())

const findOnePost = postId => {
  window.open(`board-detail.html?postId=${postId}`, '_self')
}

const signOut = () => {
  if (confirm('로그아웃 하시겠습니까?')) {
    localStorage.removeItem('account')
    location.reload()
  }
}
