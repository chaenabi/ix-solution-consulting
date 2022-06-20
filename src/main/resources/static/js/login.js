const getSignInData = () => {
  const lsAccount = localStorage.getItem('account')
  if (lsAccount) return lsAccount
}

const isAccessTokenExpired = token => {
  if (Date.now() >= JSON.parse(atob(token.split('.')[1])).exp * 1000) {
    localStorage.removeItem('account')
    return true
  }
  return false
}

const handleSignOut = () => {
  localStorage.removeItem('account')
  location.reload()
}

const handleSignIn = () => {
  let id = document.querySelector('#login-id').value
  let password = document.querySelector('#login-password').value
  const result = axios.post(`http://localhost:8080/v1/auth/login`, {
    nickname: id,
    password: password,
  })

  result
    .then(res => {
      const data = res.data.data
      const account = {
        id: data['id'],
        name: data['name'],
        nickname: data['nickname'],
        accessToken: data['accessToken'],
      }
      localStorage.setItem('account', JSON.stringify(account))
      location.href = '../static/board.html'
    })
    .catch(err => {
      let error = err.response?.data
      let failSignInMsg = document.querySelector('#failMessage')
      if (error.code === 400) {
        failSignInMsg.innerHTML = '로그인 정보를 입력해주세요.'
      } else if (error.code === 500) {
        failSignInMsg.innerHTML =
          '예기치 못한 문제가 발생했습니다. 잠시 뒤에 다시 시도해주세요.'
      } else {
        failSignInMsg.innerHTML = error.message
      }
    })
}
