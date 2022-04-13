<script lang='ts'>
    import NavRoom from '../../components/nav-room.svelte';
    
    import { onMount } from "svelte";
    import { preventUnloginUser } from "../../stores/secure/filter";
    let ownerName = null;
    let ownerDescription = null;
    onMount(async () => {
        const { username } = preventUnloginUser();
        ownerName = username;
        ownerDescription = '설정된 자기소개가 없습니다.';
    });

    import { inputValidatorPipe } from '../../stores/pipe/input.validator';
    let title = '';
    let isOkTitle = true;
    let titleTimerIdnetifier = null;
    const applyInputValidatorPipe = () => {
        const result = inputValidatorPipe(title);
        clearTimeout(titleTimerIdnetifier);
        titleTimerIdnetifier = setTimeout(() => isOkTitle = result, 200);
    }

    let isWaitingPostRoom = true;
    import { postRoom } from '../../stores/api/room.ajax';
    const applyPostRoom = async () =>{
        
        let result = null;
        isWaitingPostRoom = !isWaitingPostRoom;
        if (inputValidatorPipe(title)) {
            result = await postRoom(title);
        } else {
            alert('방 제목 유효성 검사를 진행해주세요.');
            location.reload();
        }

        console.log(result);


    }
</script>
<title>Code Solve - Room Create</title>

<!-- REPO : https://github.com/nhn/toast-ui.doc -->
<!-- 사용법 : https://seongeun-it.tistory.com/entry/TOAST-UI-Editor-%ED%86%A0%EC%8A%A4%ED%8A%B8-UI-%EA%B8%B0%EB%B3%B8%EC%A0%81%EC%9D%B8-%ED%99%94%EB%A9%B4-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0?category=487687-->

<NavRoom pageName="Register" pagePath="/register"/>

<!-- https://www.hyperui.dev/components/sections-->
<main class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <header class="max-w-lg mx-auto text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">새로운 방을 등록해보세요!</h1>
    
        <p class="mt-4 text-gray-500"> 방을 만들고 초대장을 보내거나, 입장신청을 받을 수 있어요!</p>
    </header>
  
    <section class="max-w-md mx-auto mt-8 mb-0 space-y-2">
        <!-- 방 제목 -->
        <div class="pl-3 pt-6 pb-2 gap-2 flex items-baseline min-h-27">
            <label for="email" class="text-base font-medium">방 제목</label>
            <p  class="text-xs text-stone-700">권고하는 방 제목은 4 자 이상입니다. (현재 : {title.length})</p>
        </div>
        <div class="relative">
            <input on:keyup={applyInputValidatorPipe} bind:value={title} type="text" placeholder="방 제목" class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"/>
            <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                    stroke={isOkTitle ? "currentColor" : '#d63031'}>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/>
                </svg>
            </span>
        </div>

        <!-- 유저 이름-->
        <div class="pl-3 pt-6 pb-2 gap-2 flex items-baseline min-h-27">
            <label for="email" class="text-base font-medium">유저 이름</label>
        </div>
        <div class="relative">
            <input type="text" bind:value={ownerName} readonly disabled
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"/>
        </div>

        <!-- 유저 소개 -->
        <div class="pl-3 pt-6 pb-2 gap-2 flex items-baseline min-h-27">
            <label for="email" class="text-base font-medium">유저 소개</label>
        </div>
        <div class="relative">
            <input type="text" bind:value={ownerDescription} readonly disabled
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"/>
        </div>
    
        <br>

        <!-- <div class="relative">
            <label class="block pb-2 text-xs font-medium text-gray-500" for="email"> 아이디로 검색 </label>
            <input class="w-full h-10 pr-10 pl-10 text-sm placeholder-gray-300
                border-gray-200 rounded-lg shadow-sm focus:z-10" placeholder="Search..." type="text" />
        </div> -->

        <div class="flex items-center justify-between">
            <a href="/room" class="underline text-sm text-gray-500"> 🤔 뒤로가기 </a>
      
            <button on:click|once={applyPostRoom} type="button`"
                class="inline-block px-5 py-3 ml-3 text-sm font-medium text-white rounded-lg
                {!isWaitingPostRoom ? 'bg-blue-700' : 'bg-blue-500'}">
                등록하기 </button>
        </div>
    </section>
</main>