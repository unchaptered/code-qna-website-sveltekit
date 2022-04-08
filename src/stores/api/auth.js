import axios from 'axios';

export const BASE_URL =
    ( () => process.env.NODE_ENV === 'development' ?
        'http://localhost:4000' : 'https://code-solve-server.herokuapp.com' )();
export const ORIGIN_URL =
    ( () => process.env.NODE_ENV === 'development' ?
        'http://localhost:3000' : 'https://code-qna-website-sveltekit.pages.dev/')();

const addBasicMessage = (statusCode) => {

    if (199 <= statusCode && statusCode <= 200) {
        return '성공!';
    } else if (statusCode <= 300) {
        return '재연결!';
    } else if (statusCode <= 400) {
        return '잘못된 접근!';
    } else if (statusCode <= 500) {
        return '에러 발생!';
    }

}

export const sendFormForJoin = async (data) => {
    
    let resMessage, errMessage = undefined;
    await axios.post(BASE_URL+'/auth/account', data)
        .then(result => {resMessage = result})
        .catch(error => {errMessage = error});
    
    if (resMessage !== undefined) {
        // @ts-ignore
        const { status, data:{ sort, username } }= resMessage;
        return { status, message: '회원가입에 성공하셨습니다.'}
    } else {
        return { status: 500, message: errMessage};
    }

}

export const sendFormForLogin = async (data) => {
    
    let resMessage, errMessage = undefined;
    await axios.post(BASE_URL+'/auth/account/token', {...data})
        .then(result => {resMessage = result})
        .catch(error => {errMessage = error});
    
    console.log(resMessage);

    if (resMessage !== undefined) {
        // @ts-ignore
        const { status, data:{ _id, sort, username, jwtToken } }= resMessage;
        localStorage.setItem('loggedInUser', JSON.stringify({_id, sort, username}));
        localStorage.setItem('loggedInToken', jwtToken);
        return { status, message: '로그인에 성공하셨습니다.'}
    } else {
        return { status: 500, message: errMessage};
    }

}

export const requestUserProfile = async (_id) => {
    
    let resMessage, errMessage = undefined;
    await axios.get(BASE_URL+'/auth/account/'+_id)
        .then(result => {resMessage = result})
        .catch(error => {errMessage = error});

    if (resMessage !== undefined) {
        // @ts-ignore
        const { status, data } = resMessage;

        return { status, data:{...data} };
    } else {
        alert('존재하지 않는 사용자입니다.');
        window.location.href = ORIGIN_URL;
    }
}