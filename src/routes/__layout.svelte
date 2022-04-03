<!-- https://kit.svelte.dev/docs/layouts -->
<script lang='ts'>
    import Nav from '../components/nav.svelte'
</script>

<Nav />

<slot></slot>

<style global lang='postcss'>
/* https://blog.rhostem.com/posts/2021-06-05-tailwind-css */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>