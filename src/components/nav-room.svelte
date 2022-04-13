<script>
  export let pageName = null;
  export let pagePath = null;

  export let editPage = null;
  export let editPath = null;
</script>
<nav aria-label="Breadcrumb" class="w-full flex justify-center ">
    <ol role="list" class="flex items-center space-x-1 text-sm text-gray-500">
  
      <li>
        <a class="block transition-colors hover:text-gray-700" href="/room"> Rooms </a>
      </li>

      {#if pageName !== null}
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </li>
    
        <li>
          <a class="block transition-colors hover:text-gray-700" href={"/room"+pagePath}> {pageName} </a>
        </li>
      {/if}

      {#if editPage !== null}
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </li>
    
        <li>
          <a class="block transition-colors hover:text-gray-700" href={"/room"+editPath}> {editPage} </a>
        </li>
      {/if}
    </ol>
</nav>