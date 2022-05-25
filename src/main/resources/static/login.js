window.addEventListener('load', () => {
    const account = JSON.parse(localStorage.getItem('account'))

    if (account !== null) {
        if (!isExpired(account.expireTime)) {
            let successMessage = document.querySelector("#successMessage")
            let signInBtn = document.querySelector("#login-btn")

            successMessage.innerHTML = `${account.value.accountId} 님이 로그인중입니다.`
            signInBtn.style.display = 'none'
        }
    }
})

function isExpired(expiredTime) {
    if (Date.now() > expiredTime) {
        localStorage.removeItem('account');
        return true
    }
    return false
}

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

        //let rememberMe = document.querySelector("#rememberMe")
        //let checked = rememberMe.checked
        if (true) {
            const account = {
                accessToken: res.headers['accesstoken'],
                accountId: res.data['nickname']
            }

            // (24 * 60 * 60 * 1000) == 1 day
            const defaultExpirePeriod = 2 * (24 * 60 * 60 * 1000)

            const obj = {
                value: account,
                expireTime: Date.now() + defaultExpirePeriod
            }

            const accountData = JSON.stringify(obj)

            localStorage.setItem('account', accountData)
            location.reload()
        }

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