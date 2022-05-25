

function handleSignIn() {
    let id = document.querySelector("#login-id").value;
    let password = document.querySelector("#login-password").value;

    const result = axios.post(
        `http://localhost:8080/v1/auth/login`, {
            nickname: id,
            password: password
        }
    )

    result.then(res => {
        localStorage.setItem('accesstoken', res.headers['accesstoken'])
        localStorage.setItem('accountId', res.data['nickname'])
        window.location.reload()
    }).catch(err => {
        let error = err.response.data
        let failSignInMsg = document.querySelector("#failMessage")
        console.log(error)
        if (error['code'] === 400) {
            failSignInMsg.innerHTML = '로그인 정보를 입력해주세요.'
        } else {
            failSignInMsg.innerHTML = error['message']
        }
    })
}