import axios from 'axios';
import { BASE_URL, ORIGIN_URL } from './url';

export const getRoomList = async () => {

    let resMessage, errMessage = undefined;
    await axios.get(BASE_URL+'/room')
        .then(result => {resMessage = result})
        .catch(error => {errMessage = error});

    return resMessage ? resMessage : errMessage;
}

export const getRoomData = async (_id) => {
    
    let resMessage, errMessage = undefined;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.get(BASE_URL+'/room/'+_id, {
        headers: { Authorization: accessToken, Accept: 'application/json' }
    }).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}

export const postRoom = async (title) => {
    
    let resMessage, errMessage = undefined;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/room', { title }, {
        headers: { Authorization: accessToken, Accept: 'application/json' }
    }).then(result => {resMessage = result})
        .catch(error => {errMessage = error});

    return (resMessage !== undefined) ? resMessage : errMessage;

}

export const patchRoomTitle = async (fixedTitle) => {

    let resMessage, errMessage = null;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.patch(BASE_URL+'/room', { title: fixedTitle }, {
        headers: { Authorization: accessToken, Accept: 'application/json' }
    }).then(result => {resMessage = result})
        .catch(error => {errMessage = error});

    console.log(resMessage);
    console.log(errMessage);
    
}
export const deleteRoom = async () => {

    let resMessage, errMessage = null;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.delete(BASE_URL+'/room', {
        headers: { Authorization: accessToken, Accept: 'application/json' }
    }).then(result => {resMessage = result})
        .catch(error => {errMessage = error});

    console.log(resMessage);
    console.log(errMessage);
    
}

export const postInviteCard = async (_id: string, usersId: string[]) => {

    let resMessage, errMessage = null;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/room/invite-card', {
        _id, usersId
    }, {
        headers: { Authorization: accessToken, Accept: 'application/json' }
    }).then(result => {resMessage = result})
        .catch(error => {errMessage = error});

    console.log(resMessage);
    console.log(errMessage);
    

}