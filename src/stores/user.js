import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

export const sendFormForJoin = async (data) => {

    // @ts-ignore
    const originLink = location.origin+'/';
    let resultObj = undefined;
    await axios.post(`${BASE_URL}/auth/join`, { sort:'MENTEE', ...data } )
        .then(result => resultObj = result)
        .catch(error => resultObj = error);
    
    // @ts-ignore
    let status = resultObj.status;
    if (status === 201) { // ok
        
        // @ts-ignore
        let message = `${resultObj.data.sort} 로 가입하신 ${resultObj.data.username} 님 환영합니다!<br>`;
        message += `로그인하고 서비스를 더 이용해주세요 :)`;

        return { message, status };
        
    } else { // error

        status = 400;
        let message = `${resultObj}!<br>`;
        message += '이미 존재하는 아이디입니다.<br>회원가입에 실패하였습니다!';

        return { message, status };

    }
}

export const sendFormForLogin = async (data) => {

    // @ts-ignore
    const originLink = location.origin+'/';
    let resultObj = undefined;
    await axios.post(`${BASE_URL}/auth/login`, { sort:'MENTEE', ...data})
        .then(result => resultObj = result)
        .catch(error => resultObj = error);

    // @ts-ignore
    let status = resultObj.status;
    if (status === 201) { // ok
        
        // @ts-ignore
        let message = `${resultObj.data.sort}, ${resultObj.data.username} 님 환영합니다!<br>`;
        message += `로그인에 성공하였습니다. :)`;

        return { message, status };
        
    } else { // error

        status = 404;
        let message = `${resultObj}!<br>`;
        message += '존재하지 않거나, 비밀번호가 틀렸습니다.<br>로그인에 실패하였습니다!';

        return { message, status };

    }
}