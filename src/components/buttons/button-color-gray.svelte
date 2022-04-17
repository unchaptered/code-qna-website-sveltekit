<script>
    export let buttonName;
    export let applyFn;
    export let selectList;
</script>

<!-- invited-card-selector  invited-card user/[id].svelte 에서 쓰기 위한 컴포넌ㅌ-->
<button
    on:click={applyFn}
    class="text-sm font-medium text-gray-600 transition-all
        w-fit pl-2 pr-2 pt-1 pb-1 border-gray-600 border rounded
        hover:bg-gray-500 hover:text-white
        active:bg-gray-400 focus:outline-none focus:ring">
    {buttonName ?? '버튼'}
</button>