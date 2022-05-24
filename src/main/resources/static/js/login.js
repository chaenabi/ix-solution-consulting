async function handleSignIn() {
    let id = document.querySelector("#login-id").value;
    let password = document.querySelector("#login-password").value;

    const result = await axios.post(
        `http://localhost:8080/v1/auth/login`, {
            nickname: id,
            password: password
        }
    )

    console.log(result)

}