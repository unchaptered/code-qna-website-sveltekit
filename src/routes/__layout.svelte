<!-- https://kit.svelte.dev/docs/layouts -->
<script lang='ts'>
    import Nav from '../components/nav.svelte';

    import { onMount } from "svelte";

    let loggedIn;
    let loggedInUser;

    onMount(() => {
        loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        loggedIn = (loggedInUser !== null);
    });

</script>

<Nav {loggedIn} {loggedInUser}/>


<slot></slot>

<style global lang='postcss'>
/* https://blog.rhostem.com/posts/2021-06-05-tailwind-css */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>