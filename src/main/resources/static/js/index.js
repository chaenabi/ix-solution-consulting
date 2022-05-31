window.addEventListener('load', () => {

    let account = getSignInData()
    if (account) {
        account = JSON.parse(account)
        if (!isAccessTokenExpired(account.accessToken)) {
            let successMessage = document.querySelector("#successMessage")
            let signInBtn = document.querySelector("#login-btn")
            let signOutBtn = document.querySelector("#logout-btn")

            successMessage.innerHTML = `${account.nickname} 님이 로그인 중입니다.`
            signInBtn.style.display = 'none'
            signOutBtn.style.display = 'block'
        }
    }
})
