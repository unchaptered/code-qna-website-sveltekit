<script lang='ts'>

  // Middleware
  
  import { onMount } from 'svelte';
  import { preventUnLoginuser } from '../../stores/secure/middleware';
  import { requestUserProfile, sendFormForEditDescription } from '../../stores/api/auth.ajax';
  import { getFakeRoomData } from '../../stores/junk/meta';

  let rooms = undefined;
  let UserProfile = undefined;
  onMount(async () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const isOk = preventUnLoginuser(loggedInUser);
    if (!isOk) {
      alert('로그인 후 접속해주세요.')
      location.href = location.origin;
    }

    UserProfile = await requestUserProfile(location.pathname.substring(6));
    rooms = getFakeRoomData();
    // console.log(rooms);
    console.log(UserProfile);
  });

  async function applyFormForEditDescription() {
    const result = await sendFormForEditDescription(editingDescription);
    UserProfile.data.description = editingDescription;
    isEditDescription = false;
  }

  let isEditDescription = false;

  let editingDescription = '';
  let editingDescriptionValidated = false;
  function onClickEditDescription() {
    isEditDescription = !isEditDescription;
  }

  const descriptionValidator = () => {
      editingDescriptionValidated = editingDescription.length < 300;
  };

  // ul - li 로 이어지는 부분
  let isActiveRoom = true;
  function onClickSubMenu() {
    isActiveRoom = !isActiveRoom;
  }

</script>

<title>Code Solve - 프로필</title>

<main>
  {#if UserProfile !== undefined}
    <section class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
      <!-- Title-->
      <div class="flex gap-4 align-center"> 
        <div class="flex gap-2 text-lg">
          <p>[{UserProfile.data.sort}]</p> <!-- 등급 -->
          <p>-</p>
          <p class="font-bold">{UserProfile.data.username}</p> <!-- 유저이름-->
          <p>님의 프로필 입니다.</p>
        </div>
        {#if UserProfile.data.sort !== 'MENTO'}
          <a href="/room/create" class="inline-block p-1 w-fit  text-sm font-medium
            text-indigo-600 border border-indigo-600 rounded
            hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
            승급 신청
          </a>
        {:else}
        {/if}
          <a href="/room/register" class="inline-block p-1 w-fit  text-sm font-medium
            text-indigo-600 border border-indigo-600 rounded
            hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
            방 등록
          </a>
          <a href="/room/register" class="inline-block p-1 w-fit  text-sm font-medium
            text-indigo-600 border border-indigo-600 rounded
            hover:bg-indigo-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
            글 작성
          </a>
      </div>

      <header class=" grid gap-4 lg:gap-8 lg:grid-cols-3 mt-4 ap-8">
        <!-- grid-->
        <section class="col-span-1 relative h-64 overflow-hidden sm:h-80 lg:h-full min-h-300 bg-slate-500">
          <img class="absolute inset-0 object-cover w-full h-full" alt="Man using a computer"
                src="../../profile.jpg" />
        </section>

        <!-- grid -->
        <section class="col-span-1 lg:col-span-2">
            <!--description-->
            <header class="w-full">
              <div class="w-full">
                {#if !isEditDescription}
                  <textarea class="w-full" readonly disabled>{UserProfile.data.description === '' ? '자기소개가 없습니다.' : UserProfile.data.description}</textarea>
                {:else}
                  <textarea on:keyup={ () => descriptionValidator() } placeholder="자기소개 수정하기"
                    bind:value={editingDescription} maxlength=299 class="w-full"></textarea>
                {/if}
              </div>
              <div class="w-full flex gap-2">
                {#if JSON.parse(localStorage.getItem('loggedInUser'))._id === UserProfile.data._id}
                  <button on:click={onClickEditDescription}>{!isEditDescription ? '수정하기' : '취소하기'}</button>
                  {#if isEditDescription}
                    <button on:click={applyFormForEditDescription}>수정하기</button>
                  {/if}
                {/if}
              </div>
            </header>

            <!-- meta data -->
            <article class="flex gap-2 min-h-30 w-full">
              <button>관리 중 : 2</button>
              <button>참여 중 : 13</button>
              <button>소통 중 : 314</button>
            </article>
        </section>
        <!--In of Grid-->
      </header>

      <br>
      <br>

      <ul class="flex text-center border-b border-gray-200">

        <li class="flex-1">
          <a on:click={onClickSubMenu}
            id="roomBtn" class="block p-4 text-sm font-medium
              { isActiveRoom ? 'relative bg-white border-t border-l border-r border-gray-200' : 'text-gray-500' }">
            {#if isActiveRoom}
              <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            {/if}
            Rooms
          </a>
        </li>
      
        <li class="flex-1">
          <a on:click={onClickSubMenu}
            id="postBtn" class="block p-4 text-sm font-medium
            { !isActiveRoom ? 'relative bg-white border-t border-l border-r border-gray-200' : 'text-gray-500' }" >
            {#if !isActiveRoom}
              <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            {/if}
            Posts
          </a>
        </li>
      
        <li class="flex-1">
          <a class="block p-4 text-sm font-medium text-gray-500" > - </a>
        </li>
      
        <li class="flex-1">
          <a class="block p-4 text-sm font-medium text-gray-500" > - </a>
        </li>

      </ul>

      <section class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
        {#if isActiveRoom}
          <div>
            <p>이민석 님이 만든 방</p>
          </div>
        {:else}
          {#each rooms.posts as post}
            <div class="flex flex-col gap-2">
              <p>이민석 님이 남긴 게시글 </p>
              <div class="flex gap-4">
                <p>{post.name}</p>
                <p>{post.text} 내용이 좀 길어요</p>
              </div>
            </div>
          {/each}
        {/if}
      </section>
    </section>
  {/if}

</main>


<!--footer container-->
<!-- <footer class="w-full fixed bottom-0 flex justify-center">
  <div class="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
    
    <div class="max-w-3xl mx-auto">
      <nav class="flex flex-wrap justify-center gap-6 p-2 text-sm">
        <button on:click={ () => window.open("https://hyperui.dev")} class="font-bold hover:opacity-75" target="_blank" rel="noopener noreferrer">
          Design HyperUI
        </button>
        <button on:click={ () => window.open("https://github.com/unchaptered/code-sovle-server") } class="font-bold hover:opacity-75" target="_blank" rel="noopener noreferrer">
          Svelte Pages
        </button>
        <button on:click={ () => window.open("https://github.com/unchaptered/code-qna-website-sveltekit") } class="font-bold hover:opacity-75" target="_blank" rel="noopener noreferrer">
          Nest Server
        </button>
      </nav>

      <p class="p-2 text-center text-xs font-medium">Developed By Unchaptered, Designed By 2022 John Doe</p>
    </div>
  </div>
</footer> -->
