<script lang='ts'>
    import NavRoom from '../../components/nav-room.svelte';
    
    import { onMount } from 'svelte';
    import { getRoomData } from '../../stores/api/room.ajax';

    let _id = 'loading...';
    let title = 'loading...';
    let isOwner = null;
    let ownerName = 'loading...';
    let createdAt = 'loading...';
    onMount(async () => {
        const { data } = await getRoomData(location.pathname.substring(6));
        console.log(data);

        _id = data._id;
        title = data.title;
        isOwner = data.ownerId === JSON.parse(localStorage.getItem('loggedInUser'))._id;
        ownerName = data.ownerName;
        createdAt = data.createdAt.substring(2,10).split('-').join('.');
    });

</script>

<title>Code Solve - Room</title>

<NavRoom pageName={title} pagePath={'/'+_id}/>

<section class="fixed w-full min-h-screen bg-gray-50">
    <div class="flex items-center justify-between max-w-screen-xl px-4 mx-auto" >  
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <!-- room 주인-->
            <div class="max-w-xl">
                    <h2 class="text-3xl font-bold sm:text-4xl">{title}</h2>
                    <div class="mt-4 flex gap-4">
                        <p class="text-lg font-bold text-gray-700">{ownerName}</p>
                        <p class="text-lg font-bold text-gray-700">{createdAt} ~ </p>
                    </div>
                    <div class="mt-2 flex gap-4">
                        <a href="/room/register" class="text-lg text-gray-700">글 작성하기</a>
                        {#if isOwner}
                            <button on:click={() => location.href = `edit/${location.pathname.substring(6)}/`} class="text-lg text-gray-700">관리페이지</button>
                            <button class="text-lg text-gray-700">QR 생성하기</button>
                        {:else}
                            <button class="text-lg text-gray-700">입장 신청하기</button>
                        {/if}
                    </div>
            </div>
    
            <br>
            <br>
            <p class="text-gray-700">대답을 기다리고 있어요!</p>
            <p class="text-gray-700">대답율 : 90% (123/1234)</p>

            <!-- post cotainer -->
            <div class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">

                <!-- post -->
                <div class="flex items-start">
                    <div class="ml-4">
                        <h2 class="text-lg"><strong> 질문 제목 </strong> / 작성자</h2>
                        <br>
                        <p class="mt-1 text-sm text-gray-700"> 대충 질문 내용인데요. 이런 경우에는 어떻게 처리해야 하는 것일까요? </p>
                    </div>
                </div>
                
            </div>    
            <!-- End of post container -->

        </div>
    </div>
</section>