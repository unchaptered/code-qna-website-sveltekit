const inputRegex = /[^\s\w\,\.\[\]가-힣]/g;
const emailRegex = /(.+)@(.+)\.(.+)/g ;

/** * 다음 항목만 입력 가능
 *      1. 영어(대, 소문자)
 *      2. 한글(완성된 글자 한 개) <-- 단자음 단 모음 제외
 *      3. , . [ ] <-- 이 외의 특수문자 입력 불가능
 *      4. 스페이스 바
 */
export const inputValidatorPipe = (text) => {
    return text.match(inputRegex) === null;
}