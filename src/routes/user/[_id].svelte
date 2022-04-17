<script lang='ts'>

  // Middleware
  
  import { onMount } from 'svelte';
  import { preventUnLoginuser } from '../../stores/secure/middleware';
  import { requestUserProfile, sendFormForEditDescription } from '../../stores/api/auth.ajax';

  // 방 리스트, 작성 글 리스트, 초대받은 리스트, 신청한 리스트
  let roomList, postList, invitedCardList, passCardList;
  let UserProfile = undefined;
  onMount(async () => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const isOk = preventUnLoginuser(loggedInUser);
    if (!isOk) {
      alert('로그인 후 접속해주세요.')
      location.href = location.origin;
    }

    UserProfile = await requestUserProfile(location.pathname.substring(6));
    
    roomList = UserProfile?.data?.roomList ?? [];
    postList = UserProfile?.data?.postList ?? [];
    invitedCardList = UserProfile?.data?.invitedCardList ?? [];
    passCardList = UserProfile?.data?.passCardList ?? [];

    console.log(UserProfile.data);

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

  // Components

  import RoomCard from '../../components/cards/room-card.svelte';
  import PostCard from '../../components/cards/post-card.svelte';
  import InvitedCard from '../../components/cards/invited-card.svelte';
  import PassCard from '../../components/cards/pass-card.svelte';
  
  import InvitedCardSelector from '../../components/cards/invited-card-selector.svelte';

  let isActive = 0;
  const targets = {
    0: 'rooms', 1: 'posts', 2: 'inviteCard', 3: 'passCard', length: 4
  }
  Object.freeze(targets);

</script>

<title>Code Solve - 프로필</title>

<main>
  {#if UserProfile !== undefined}
    <section class="max-w-screen-xl px-6 py-2 mx-auto sm:px-6 lg:px-8 sm:py-8">
      <!-- Title-->
      <div class="flex gap-4 align-center"> 
        <div class="flex gap-2 text-lg">
          <p>[{UserProfile.data.sort}]</p> <!-- 등급 -->
          <p>-</p>
          <p class="font-bold">{UserProfile.data.username}</p> <!-- 유저이름-->
          <p>님의 프로필 입니다.</p>
        </div>
        {#if UserProfile.data.sort !== 'MENTO'}
          <a href="/room/create"
            class="inline-block text-sm font-medium text-indigo-600
            p-1 w-fit  border border-indigo-600 rounded
            hover:bg-indigo-600 hover:text-white transition-all
            active:bg-indigo-500 focus:outline-none focus:ring">
            승급 신청
          </a>
        {/if}
          <a href="/room/register"
          class="inline-block text-sm font-medium text-indigo-600
          p-1 w-fit  border border-indigo-600 rounded
          hover:bg-indigo-600 hover:text-white transition-all
          active:bg-indigo-500 focus:outline-none focus:ring">
            방 등록
          </a>
          <a href="/room/register"
          class="inline-block text-sm font-medium text-indigo-600
          p-1 w-fit  border border-indigo-600 rounded
          hover:bg-indigo-600 hover:text-white
          active:bg-indigo-500 focus:outline-none focus:ring">
            글 작성
          </a>
      </div>
      <br>

      <ul class="flex text-center border-b border-gray-200">

        <li class="flex-1">
          <a on:click={() => isActive = 0}
            id="roomBtn" class="block p-4 text-sm font-medium
              { isActive === 0 ? 'relative bg-white border-t border-l border-r border-gray-200' : 'text-gray-500' }">
            {#if isActive === 0}
              <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            {/if}
            Rooms
          </a>
        </li>
      
        <li class="flex-1">
          <a on:click={() => isActive = 1}
            id="postBtn" class="block p-4 text-sm font-medium
            { isActive === 1 ? 'relative bg-white border-t border-l border-r border-gray-200' : 'text-gray-500' }" >
            {#if isActive === 1}
              <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            {/if}
            Posts
          </a>
        </li>
      
        <li class="flex-1">
          <p on:click={() => isActive = 2} class="block p-4 text-sm font-medium
            { isActive === 2 ? 'relative bg-white border-t border-l border-r border-gray-200' : 'text-gray-500' }" >
            {#if isActive === 2}
              <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            {/if}
            대기 중인 초대장 </p>
        </li>

        <li class="flex-1">
          <p on:click={() => isActive = 3} class="block p-4 text-sm font-medium
            { isActive === 3 ? 'relative bg-white border-t border-l border-r border-gray-200' : 'text-gray-500' }" >
            {#if isActive === 3}
              <span class="absolute inset-x-0 w-full h-px bg-white -bottom-px"></span>
            {/if}
            대기 중인 신청 </p>
        </li>

      </ul>

      <section id="cardStage" class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
        {#if isActive === 0}
          {#each roomList as room}
            <RoomCard {room}/>
          {/each}
        {:else if isActive === 1}
          {#each postList as post}
            <PostCard {post}/>
          {/each}
        {:else if isActive === 2}
          {#if invitedCardList.length !== 0}
            <InvitedCardSelector />
          {/if}
          {#each invitedCardList as invitedCard}
            <InvitedCard {invitedCard}/>
          {/each}
        {:else if isActive === 3}
          {#each passCardList as passCard}
            <PassCard {passCard}/>
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
