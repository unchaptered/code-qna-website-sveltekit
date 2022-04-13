export const BASE_URL =
    ( () => process.env.NODE_ENV === 'development' ?
        'http://localhost:4000' : 'https://code-solve-server.herokuapp.com' )();
export const ORIGIN_URL =
    ( () => process.env.NODE_ENV === 'development' ?
        'http://localhost:3000' : 'https://code-qna-website-sveltekit.pages.dev/')();

export const addBasicMessage = (statusCode) => {

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