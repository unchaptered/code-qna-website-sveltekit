import { readable, writable } from 'svelte/store';

export let fileName = writable('');
export let pageName = writable('Home');
export let siteName = readable('Req@Res');
// @ts-ignore
export const createTitle = () => {
    let names = [];
    fileName.subscribe(val=>names.push(val));
    pageName.subscribe(val=>names.push(val));
    siteName.subscribe(val=>names.push(val));
    
    return (names[0] === '') ?
        `${names[1]} - ${names[2]}` :
        `${names[0]} / ${names[1]} - ${names[2]}`;
}