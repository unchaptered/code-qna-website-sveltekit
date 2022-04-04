<script lang='ts'>
  import { fileName, pageName, createTitle } from '../stores/store';
  fileName.set('');
  pageName.set('Home');
  const value = createTitle();
</script>
<title>{value}</title>

<!-- https://www.hyperui.dev/components/banners -->
<section class="bg-gray-50">
    <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
      <div class="max-w-xl mx-auto text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl">
            <strong class="font-extrabold text-red-700 sm:block">
                @Req, @Res
            </strong>
        </h1>
  
        <p class="mt-4 sm:leading-relaxed sm:text-xl">
            <br>
            <br>
            SNS 게정으로 로그인하고 편하게 이용해보세요!
            <br>
            <br>
            <br>
            <br>
        </p>
  
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <a
          href="/"
          class="block w-full px-12 py-3 text-sm font-medium text-white bg-red-600 rounded shadow sm:w-auto active:bg-red-500 hover:bg-red-700 focus:outline-none focus:ring" > Get Started </a>
  
          <a
          href="/"
          class="block w-full px-12 py-3 text-sm font-medium text-red-600 rounded shadow sm:w-auto hover:text-red-700 active:text-red-500 focus:outline-none focus:ring" > Information </a>
        </div>
      </div>
    </div>
  </section>
