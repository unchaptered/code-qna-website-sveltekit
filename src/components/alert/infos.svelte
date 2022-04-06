<script lang='js'>

  let isAictiveAlert = true;

  export let status = undefined;
  export let message = undefined;

</script>

{#if isAictiveAlert}
  <!-- Success -->
  <div class="fixed lg:w-full w-full bg-slate-400 z-10">
      <div class="xxx_imgWrap flex flex-col my-auto items-center mx-3">
        <div class="flex h-screen">
          <div class="m-auto">
    
            <!-- room-->

            <div class="flex items-center justify-between gap-4 p-4 border roundedH text-sky-700 border-sky-900/10 bg-sky-50" role="alert"> 
              <div class="flex items-center gap-4">
                <span class="p-2 text-white rounded-full bg-sky-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
            
                <p>
                  <strong class="text-sm font-medium"> {status} Info! </strong>
            
                  <span class="block text-xs opacity-90">
                    {@html message}
                  </span>
                </p>
              </div>
            
              <button class="opacity-90" type="button">
                <span class="sr-only"> Close </span>
            
                <svg  on:click={() => isAictiveAlert = false} 
                  class="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <!-- end of room-->
    
          </div>
        </div>
      </div>
  </div>
{/if}