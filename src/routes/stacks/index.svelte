<title>Code Solve - Stacks</title>

<!-- https://www.hyperui.dev/components/sections -->
<section>
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
      <div class="max-w-3xl">
        <h2 class="text-3xl font-bold sm:text-4xl">Svelte 기반 Code Q/A 서비스</h2>
        <a href="/stacks/detail"><storng>✅ 기술스텍, 자세히 보지 않을래?</storng></a>
      </div>
  
      <div class="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-2">
        <!-- 고양이 사진-->
        <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
          <img class="absolute inset-0 object-cover w-full h-full" alt="Man using a computer"
                src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" />
        </div>

        <!-- 소개글-->
        <div class="lg:py-16">
          <article class="space-y-4 text-gray-600">
            <p>
                거북목과 사투 중인 신입 백앤드 개발자 이민석입니다.<br><br> 
                <strong>지속가능한 노력</strong>을 지향합니다.<br>
                <strong>기술블로그</strong>를 운영하고 있습니다<br><br>

                <strong>
                    <button on:click="{() => { window.open('https://www.notion.so/27-66d04112e89d446dab66cbecd9aa6702')}}">
                      ✅ 27살 개발자, 이민석의 자기소개 (Notion.so)
                    </button>
                </strong>
                <br>
                <strong>
                    <button on:click="{() => { window.open('https://velog.io/@unchapterd')}}" >
                      ✅ velog 확인하기 
                    </button>
                </strong>
                <br>
                <strong>
                    <button on:click="{() => { window.open('https://github.com/unchaptered')}}">
                      ✅ github 확인하기
                    </button>
                </strong>
                <br><br>
            </p>

            <!-- https://www.hyperui.dev/components/tables -->
            <div class="overflow-hidden overflow-x-auto border border-gray-100 rounded">
                <table class="min-w-full text-sm divide-y divide-gray-200">
                  <thead>
                      <tr class="bg-gray-50">
                      <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Stacks</th>
                      <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Version</th>
                      <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Description</th>
                      </tr>
                  </thead>
              
                  <tbody class="divide-y divide-gray-100">
                      <tr>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Svelte/Kit</td>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Beta</td>
                      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">프론트앤드 프레임워크</td>
                      </tr>
                      <tr>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">TailwindCSS</td>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">@3.0.23</td>
                      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">CSS 프레임워크</td>
                      </tr>
                      <tr>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Hyper UI</td>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">-</td>
                      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">HTML, CSS 탬플릿</td>
                      </tr>
                      <tr>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Toast UI@3.0</td>
                      <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">@3.0</td>
                      <td class="px-4 py-2 text-gray-700 whitespace-nowrap">Markdown 편집 라이브러리</td>
                      </tr>

                  </tbody>
                </table>
              </div>
          </article>
        </div>
      </div>
    </div>
</section>

