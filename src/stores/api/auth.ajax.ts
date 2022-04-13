import axios from 'axios';
import { BASE_URL, ORIGIN_URL } from './url';

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

export const sendFormForEditDescription = async (description) => {

    let resMessage, errMessage = undefined;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.patch(BASE_URL+'/auth/account/description', { description }, {
        headers: { Authorization: accessToken, Accept: 'application/json' }
    }).then(result => {resMessage = result}).catch(error => {errMessage = error});

    if (resMessage !== undefined) {
        // @ts-ignore
        const { status, data } = resMessage;

        return { status, data:{...data} };
    } else {
        alert('토큰에 문제가 있습니다.');
        localStorage.setItem('loggedInuser', null);
        localStorage.setItem('loggedInToken', null);
        window.location.href = ORIGIN_URL;
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