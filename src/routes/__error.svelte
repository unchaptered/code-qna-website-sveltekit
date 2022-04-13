<script context="module">
    export function load({ error, status }) {
        return {
            props: { message: error.message, status }
        };
    }
</script>

<script lang='ts'>
    import { fileName, pageName, createTitle } from '../stores/title';
    import NotFoundScreen from '../components/notFoundScreen.svelte';
    import ErrorScreen from '../components/errorScreen.svelte';

    export let message: string;
    export let status: string;
    
    fileName.set('');
    pageName.set((+status === 404) ? 'Not Found' : 'Error');
    const value = createTitle();
</script>
<title>{value}</title>

{#if +status === 404}
    <NotFoundScreen />
{:else}
    <ErrorScreen {message}/>
{/if}