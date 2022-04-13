export const preventUnloginUser = () => {
    const LoggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (LoggedInUser === null) {
        alert('로그인 후 이용해주세요.');
        return location.href = location.origin;
    }
    return LoggedInUser;
}

