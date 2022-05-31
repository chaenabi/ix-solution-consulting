const fn_write = () => {
    if (!getSignInData()) {
        alert('글쓰기 권한이 없습니다.');
        return false;
    }
    location.href = '../post.html'
    return true;
}