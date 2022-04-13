/**
 * 미로그인 유저 차단 미들웨어
 * 
 * @param LocalUser 
 * @returns false 는 통과금지, true 는 통과 가능
 */
 export const preventUnLoginuser = (LocalUser: any): Boolean => {
    return LocalUser === null ? false : true;
}
/**
 * 로그인 유저 차단 미들웨어
 * 
 * @param LocalUser 
 * @returns false 는 통과금지, true 는 통과 가능
 */
export const preventLoginuser = (LocalUser: any): Boolean => {
    return LocalUser !== null ? false : true;
}

/**
 * 소유주 아닌 자 차단 미들웨어
 * 
 * @param LocalUser 
 * @param UserProfile 
 * @returns false 는 통과금지, true 는 통과가능
 */
export const preventNoOwnerUser = ( befId: any, aftId: any): Boolean => {
    return befId === aftId;
}