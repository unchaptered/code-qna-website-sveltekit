<script>
    import NavRoom from '../../components/nav-room.svelte';
    
    import { onMount } from 'svelte';
    import { getRoomList } from '../../stores/api/room.ajax';
    let roomList = null;
    let loggedInUser = null;
    onMount(async () => {
        loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
        if (loggedInUser === null) {
            alert('로그인 후 이용해주세요.');
            location.href = location.origin;
        }
        
        const { data } = await getRoomList();
        roomList = data;
        console.log(roomList);
    });

    
</script>

<title>Code Solve - Room List</title>

<NavRoom pageName={null} pagePath={null}/>

<section class="fixed w-full min-h-screen bg-gray-50">
    <div class="flex items-center justify-between max-w-screen-xl px-4 mx-auto" >  
        <div class="max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- room 주인-->
        <div class="max-w-xl">
            <h2 class="text-gray-900 text-3xl font-bold sm:text-4xl">방 리스트</h2>

            <div class="mt-4 flex gap-4">
                <a href="/room/notice-beta" class="text-lg font-bold text-rose-700">베타테스터</a>
                <a href="/room/notice" class="text-lg font-bold text-violet-700">공지사항</a>
                {#if loggedInUser !== null}
                    <a href="/room/register" class="text-lg font-bold text-gray-700">방 등록하기</a>
                {/if}
            </div>
        </div>

        <!-- post cotainer -->
        <div class="grid grid-cols-1 gap-8 mt-8 md:gap-12 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
            {#if roomList !== null}
                {#each roomList as room}
                    <!-- post -->
                    <div class="flex items-start">
                        <div class="ml-4">
                            <div class="flex items-baseline gap-2 text-gray-900">
                                <a href={"/room/"+room._id} class="inline-block text-lg font-bold">
                                    {room.title}
                                </a>
                                <p class="inline-block">/</p>
                                <a class="inline-block" href={"/user/"+room.ownerId}>{room.ownerName}</a>
                            </div>
                            <p class="mt-1 text-sm text-gray-900"> 대충 질문 내용인데요. 이런 경우에는 어떻게 처리해야 하는 것일까요? </p>
                        </div>
                    </div>
                {/each}
            {:else}
                <!-- post -->
                <div class="col-span-1 md:col-span-2 lg:col-span-3
                    flex items-start">
                    <div class="ml-4">
                        <div class="flex gap-2 text-gray-900">
                            <h2 class="text-lg font-bold">존재하는 게시글이 없습니다.</h2>
                            <p>/</p>
                            <a class="" href="/">작성자</a>
                        </div>
                        <p class="mt-1 text-sm text-gray-900"> 대충 질문 내용인데요. 이런 경우에는 어떻게 처리해야 하는 것일까요? </p>
                    </div>
                </div>
            {/if}
        </div>    
        <!-- End of post container -->

        </div>
    </div>
</section>