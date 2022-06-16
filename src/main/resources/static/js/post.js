window.addEventListener('load', () => {
  if (!getSignInData()) {
    alert('글쓰기 권한이 없습니다.')
    location.href = '../static/board.html'
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
}

function preventTokenExpired() {
  const account = localStorage.getItem('account')
  if (!account) return
  const parseAccount = JSON.parse(account)

  const auth = {
    headers: { Authorization: `Bearer ${parseAccount.accessToken}` },
  }

  const result = axios.get(`http://localhost:8080/v1/auth/login`, auth)

  console.log(result)
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

setInterval(() => {
  preventTokenExpired()
}, 1000 * 60 * 60 * 2)
