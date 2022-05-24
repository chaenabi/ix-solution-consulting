function handleSignIn() {
    let id = document.querySelector("#login-id").value;
    let password = document.querySelector("#login-password").value;

    const result = axios.post(
        `http://localhost:8080/v1/auth/login`, {
            nickname: id,
            password: password
        }
    )

    result.then((res) => {
        localStorage.setItem('accesstoken', res.headers['accesstoken'])
    })

}