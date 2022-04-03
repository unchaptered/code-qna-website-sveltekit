<!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->
<header class="shadow-sm">
  <div
    class="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto"
  >
    <div class="flex flex-1 w-0 lg:hidden">
      <!-- 프로필 로고 : 클릭시 signin 으로 연결 -->
      <a href="/singin" class="p-2 text-gray-600 bg-gray-100 rounded-full" type="a">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> </svg>
      </a>
    </div>

    <div class="flex items-center space-x-4">
      <!-- <a class="w-20 h-8 bg-gray-200 rounded-lg" href="/">Code Q&A</a> -->

      <form class="hidden mb-0 lg:flex">
        <div class="relative">

          <!-- 검색창 (풀 스크린, Full Screen)-->
          <input class="h-10 pr-10 text-sm placeholder-gray-300 border-gray-200 rounded-lg focus:z-10" placeholder="Search..." type="text" />

          <!-- 검색 로고 (풀 스크린, Full Screen) -->
          <button class="absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg" type="submit" >
            <svg  class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"></path></svg>
          </button>

        </div>
      </form>
    </div>

    <div class="flex justify-end flex-1 w-0 lg:hidden">

      <!-- 검색 로고 (미니 스크린, Mini Screen) -->
      <a href="/search" class="p-2 text-gray-500 bg-gray-100 rounded-full" type="button">
        <svg class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" fill-rule="evenodd"></path></svg>
      </a>

    </div>

    <!-- 링크 버튼 (풀 스크린,  Full Screen)-->
    <nav class="items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0">
      <a class="text-gray-900" href="/">Home</a>
      <a class="text-gray-900" href="/room">Rooms</a>
      <a class="text-gray-900" href="/post">Post</a>
      <a class="text-gray-900" href="/review">Review</a>
      <a class="text-gray-900" href="/contact">Contact</a>
    </nav>

    <!-- 로그인 및 회원가입 (풀/미니 스크린, Full/Mini Screen)-->
    <div class="items-center hidden space-x-4 lg:flex">

      <a class="px-5 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg"href="/signin" >Sign in</a>
      <a class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg" href="/signup"> Sign up </a>
      
    </div>
  </div>

  <!-- 링크 버튼 (미니 스크린, Mini Screen) -->
  <div class="border-t border-gray-100 lg:hidden">
    <nav class="flex items-center justify-center p-4 overflow-x-auto text-sm font-medium">
      <a class="flex-shrink-0 pl-4 text-gray-900" href="/room">Rooms</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="/post">Post</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="/review">Review</a>
      <a class="flex-shrink-0 pl-4 text-gray-900" href="/contact">Contact</a>
    </nav>
  </div>
</header>