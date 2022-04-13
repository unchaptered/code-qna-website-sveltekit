<script lang='ts'>
import { onMount } from 'svelte';

    import NavRoom from '../../components/nav-room.svelte';
    import { createEditor } from '../../stores/markdown/markdown.editor';

    onMount(()=>{
        const dom = document.querySelector('#container');
        createEditor(dom);
    })

</script>

<title>Code Solve - Notice (Beta)</title>

<NavRoom pageName="Notice" pagePath="/notice"/>
<p> hi notice beta </p>

<div id="container" class="flex bg-gray-100">
</div>