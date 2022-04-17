// Invite Card 발급, 승낙, 삭제
// Pass Card 발급, 슨악, 삭제

import axios from 'axios';
import { BASE_URL, ORIGIN_URL } from './url';

export const sendInviteCard = async (_id: string, userIds: string[]) => {

    let resMessage: any, errMessage: any;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/card/send-invite-card',
        { _id, userIds },
        { headers: { Authorization: accessToken, Accept: 'application/json' } }
    ).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}
export const acceptInvitedCard = async (roomIds: string[]) => {

    let resMessage: any, errMessage: any;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/card/accept-invited-card',
        { roomIds },
        { headers: { Authorization: accessToken, Accept: 'application/json' } }
    ).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}
export const denyInvitedCard = async (roomIds: string[]) => {

    let resMessage: any, errMessage: any;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/card/deny-invited-card',
        { roomIds },
        { headers: { Authorization: accessToken, Accept: 'application/json' } }
    ).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}
export const postPassCard = async (roomId: string, userId: string) => {

    let resMessage: any, errMessage: any;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/card/send-pass-card',
        { roomId, userId },
        { headers: { Authorization: accessToken, Accept: 'application/json' } }
    ).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}
export const acceptPassCard = async (roomId: string, userId: string) => {

    let resMessage: any, errMessage: any;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/card/accept-pass-card',
        { roomId, userId },
        { headers: { Authorization: accessToken, Accept: 'application/json' } }
    ).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}
export const denyPassCard = async (roomId: string, userId: string) => {

    let resMessage: any, errMessage: any;
    const accessToken = `Bearer ${localStorage.getItem("loggedInToken")}`;
    await axios.post(BASE_URL+'/card/deny-pass-card',
        { roomId, userId },
        { headers: { Authorization: accessToken, Accept: 'application/json' } }
    ).then(result => { resMessage = result })
        .catch(error => { errMessage = error });

    return (resMessage !== undefined) ? resMessage : errMessage;
}