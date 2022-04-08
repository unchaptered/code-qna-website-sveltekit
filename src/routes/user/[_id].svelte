<script lang='js'>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { requestUserProfile } from '../../stores/api/auth';

  let isEditTitle = false;
  let isEditDescription = false;

  let editingDescription = '';

  let UserProfile = undefined;
  onMount(async () => {
    UserProfile = await requestUserProfile(location.pathname.substring(6));
    console.log(UserProfile);
  });

  let inputTitle = '';
</script>

<title>Code Solve - 프로필</title>

<section>
  {#if UserProfile !== undefined}
    <div transition:fade class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
      <!-- Title-->
      <div class="flex gap-4 bg-slate-400">
        <span class="font-bold">[{UserProfile.data.sort}] - {UserProfile.data.username} 님의 프로필입니다. </span>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
        <!-- grid-->
        <section>
          <div>
            당신에게 사랑을 전하는
          </div>
        </section>

        <!-- grid -->
        <section>
          <div>
            {#if !isEditDescription}
              <textarea class="w-full"> 안녕하세요 저는 자기소개를 쓰고 있는데 솔직히 이거 너무 귀찮아요..</textarea>
            {:else}
              <textarea bind:value={editingDescription} placeholder="자기소개 수정하기" maxlength=299 class="w-full"></textarea>
            {/if}
          </div>
          <button on:click={()=>isEditDescription = !isEditDescription}>수정하기</button>
        </section>
      </div>
    </div>
  {/if}

  <!--footer container-->
  <footer class="w-full fixed bottom-0 flex justify-center">
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
  </footer>
</section>
