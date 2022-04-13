import Editor from '@toast-ui/editor';

export const createEditor = (element: any): any => {
    const editor = new Editor({
        el: element,
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical'
    });
    editor.getMarkdown();
}