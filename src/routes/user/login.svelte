<script lang='js'>
  import { sendFormForLogin } from '../../stores/user';
  import ErrorAlert from '../../components/alert/error.svelte';
  import SuccessAlert from '../../components/alert/success.svelte';

  let emailRegex = /(.+)@(.+)\.(.+)/g ;

  let email = '';
  let emailValidated = false;
  const emailValidator = (target) => emailValidated = target.value.match(emailRegex);
  
  let password = '';
  let passwordLengthValidated = false;
  const passwordValidator = () => passwordLengthValidated = password.length >= 8 && password.length <= 20 ;

  let status = undefined;
  let message = undefined;

  let isWaitingAxios = false;
  const applyFormForLogin = async () => {
    if (emailValidated && passwordValidator) {
      isWaitingAxios = true;

      const result = await sendFormForLogin({ email, password });
      status = result.status;
      message = result.message;
      
      isWaitingAxios = false;
      
    } else {
      alert('유효성 검사를 통과해야 합니다.');
    }
  }
</script>

<title>Code Solve - Login</title>

{#if status === 201}
  <SuccessAlert {status} {message} />
{:else if status !== undefined}
  <ErrorAlert {status} {message} />
{/if}

<!-- https://www.hyperui.dev/components/forms -->
<div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div class="max-w-lg mx-auto">
      <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">로그인하기</h1>
  
      <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
          우리 사이트는 모든 정보를 단방향 암호화를 통해서 보관하고 있습니다. 😁
      </p>
  
      <form action="" class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
        <!-- <p class="text-lg font-medium">Sign in to your account</p> -->
  
        <div>
          <div class="gap-2 flex items-baseline min-h-27">
            <label for="email" class="text-sm font-medium">Email</label>
            {#if !emailValidated}
              <p  class="pb-2 text-xs text-stone-700">정상적인 이메일 모양이 아닙니다.</p>
            {/if}
          </div>
  
          <div class="relative mt-1">
            <input bind:value={email} on:keyup={ ({target}) => emailValidator(target) } type="email" id="email"
              class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Enter Email or ID"/>
  
            <span class="absolute inset-y-0 inline-flex items-center right-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke={ !emailValidated ? '#d63031' : 'currentColor'}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"/></svg>
            </span>
          </div>
        </div>
  
        <!-- password -->
        <div>
            
          <div class="gap-2 flex items-baseline">
            <label for="password" class="text-sm font-medium">Password</label>
            {#if !passwordLengthValidated}
              <p  class="pb-2 text-xs text-stone-700">비밀번호 길이는 8~20 자 사이여야 합니다. (현재 : {password.length})</p>
            {/if}
          </div>

            <div class="relative mt-1">
              <input type="password" id="password" class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm" placeholder="Enter password"/>
    
              <span class="absolute inset-y-0 inline-flex items-center right-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                  stroke={ !emailValidated ? '#d63031' : 'currentColor'}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </span>
            </div>
          </div>
  
        <button on:click|once={applyFormForLogin} type="button"
          class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
          Login
        </button>
  
        <p class="text-sm text-center text-gray-500">
          No account?
          <a class="underline" href="/user/join">Join</a>
        </p>

        <br>
        <br>
        
        <p class="text-sm text-center text-gray-500">O-auth</p>
        <button type="button" disabled={isWaitingAxios}
          class="block w-full px-5 py-2 text-sm font-medium text-white rounded-lg 
                ease-in-out duration-300 {!isWaitingAxios ? 'bg-amber-600' : 'bg-amber-800'}"> Kakao Join </button>
                
        <button type="button" disabled={isWaitingAxios}
          class="block w-full px-5 py-2 text-sm font-medium text-white rounded-lg 
                ease-in-out duration-300 {!isWaitingAxios ? 'bg-indigo-600' : 'bg-indigo-800'}"> Google Join </button>
                
        <button type="button" disabled={isWaitingAxios}
          class="block w-full px-5 py-2 text-sm font-medium text-white rounded-lg 
                ease-in-out duration-300 {!isWaitingAxios ? 'bg-lime-600' : 'bg-lime-800'}"> Naver Join </button>
      </form>
    </div>
</div>