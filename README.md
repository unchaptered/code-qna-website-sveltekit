본 문서는 _2022년 4월 4일_ 에 작성되었습니다.

# Code Solve

Code Solve 는 멘토 - 멘티 코드 채팅방입니다.

SNS 계정으로 로그인하고 손쉽게 이용해보세요!

[Code Solve - Home](https://code-qna-website-sveltekit.pages.dev/)

<hr>

## Ideal

최근 가장 크게 느꼈던 불편함은 **열악한 코드 QnA 시스템** 이었습니다.

세상에 Slack 등의 다양한 웹 서비스가 있음에도, 제가 속한 집단에서는 이를 전혀 사용하지 않았습니다.

그래서 가장 간단하고 귀여운 UX/UI 로 손쉽게 Code 를 나눌 수 있는 서비스를 만들고자 했습니다.

<hr>

## Structure

본 서비스는 다음과 같이 빌드업되어 있습니다.

1. SSG Frontend
2. TOKEN Backend Server
3. MongoDB Atlas

<hr>

### SSG Frontend

Svelte 를 선택하고 프로젝트를 셋팅하기까지의 결정이 궁금하시다면 1번을,

Website 의 변천사와 이에 따른 Rendering 등이 궁금하시다면 2번을 확인해주세요.

1. [Velog unchpatered - Sveltekit](https://velog.io/@unchapterd/Sveltekit)
2. [Velog unchaptered - Website & Rendering](https://velog.io/@unchapterd/Website-Rendering)

#### Why Svelte ?

Svelte 를 사용한 것은 **재미 / 빠른 개발속도** 때문이었습니다.

물론, 독특한 문법 및 빌드업을 이해하는 것은 낯설었지만 재밌었습니다.

#### Why Sveltekit ?

백앤드 개발자인 저는 Frontend Bundler 셋팅이 가장 어려운 일이었습니다.

따라서 이를 대신해 줄 Svelte 프레임워크인 Sveltekit 을 선택하게 되었습니다.

#### Why TailwindCSS ?

진행한 프로젝트에서 가장 큰 소모비용은 HTML, CSS 였습니다.

빌드업에 따라 PUG/JSX , SCSS,Styled-Comonents 등으로 대체하긴 했으나,

일련의 과정에서 **가장 많이 사용한 언어가 CSS 라는 놀라운 결과** 를 낳기에 이르렀습니다.

_실제로 HTML, CSS 로 flex, grid 등의 웹 화면을 구현하는 것은 기계처럼 치고 있었습니다.._

그래서 이러한 소모비용을 최소화 하기 위해서 CSS Framework && Template 를 골라야 했습니다.

1. [TailwindCSS](https://tailwindcss.com/)
2. [HyperUI](https://www.hyperui.dev/)

#### How can i build SSG ?

Sveltekit 의 Gest Started 에 나온 명령어로는 스켈레톤 프로젝트를 만들 수 있습니다.

저는 여기서 Adaptor-auto, SCSS, TypeScript 등을 선택하여 개발을 시작하게 되었습니다.

그리고 이러한 빌드업 과정 끝에 svelte.config.js 에 다음의 설정을 추가하는 것으로 SSG 를 구현했습니다.

```javascript
// svelte.config.js
const config ={
    // others
	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},
}
```

<hr>

### Nest Backend Server

#### Why Nest ?

Nest 의 장점은 수없이 많다고 생각합니다.

하지만 제 생각에 **가장 큰 장점은 Nest-cli 에 있다** 고 생각합니다.

이 친구가 있기 떄문에 application, module, controller 등을 매우 빠르게 빌드업할 수 있게 되기 때문입니다.

#### Why MongoDB ?

_이제 슬슬 SQL 백앤드 서버로 서비스를 만들어야 하지 않나?_

이번에도 MongoDB 를 만든 것은 얼마 전에 배운 **내장 문서** 의 개념이

본 서비스의 **Post in Room** 의 특성과 궁합이 잘맞다고 예상했기 떄문입니다.

#### Why TOKEN ?

이전에도 약 2 번 정도 Web Token 을 만들고 건네주었던 적이 있었습니다.

하지만 당시에는 단순히 **토큰을 만들고 넘겨주는 수준** 에 불과했습니다.

따라서 프로젝트의 기획 - 빌드업까지 TOKEN 을 기반으로 만들고자 했습니다.

<hr>

### MongoDB Atlas

확정된 것은 아니지만,

별다른 솔루션이 없다면 MongoDB Atlas 를 사용할 수도 있을 것 같습니다.

### REFERECNES

TailwindCSS

1. Template [HyperUI](https://www.hyperui.dev/)
2. Settings [Blog Post](https://intrepidgeeks.com/tutorial/how-to-set-sveltekit-using-tailwind-css)
3. Settings+ [Blog Post](https://blog.rhostem.com/posts/2021-06-05-tailwind-css)