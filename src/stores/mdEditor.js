import { tick } from 'svelte';
import Editor from '@toast-ui/editor';

let editor = null;

// createELement : https://svelte.dev/repl/118b7d4540c64f8491d10a24e68948d7?version=3.12.1
async function generateEditor() {
    // 데이터 변경 후 화면의 갱신 대기 : https://heropy.blog/2019/09/29/svelte/
    await tick();

    const editorContainer = document.querySelector("section");
    new Editor({
        el: editorContainer,
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical'
    })
    editor.getMarkdown();
}
