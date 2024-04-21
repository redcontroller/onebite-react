# 페이지 라우팅

## MPA

> MPA(Multi Page Application)
> 전통적인 웹 서비스 방식으로 서버 사이드 렌더링(Server Side Rendering)을 사용함

MPA 방식의 단점:

1. 페이지 이동 시 페이지의 모든 요소를 교체하기 때문에 새로고침이 발생하여 매끄럽지 않고 비효율적임
2. 다수의 사용자 접속시, 서버의 부하가 심해진다.

## SPA

> SPA(Single Page Application)
> React App이 채택한 방식
> 브라우저에서 Bundle JS File(React 앱)을 실행하는 클라이언트 사이드 렌더링(Client Side Rendering)을 사용함

SPA 방식의 장점:

1. 페이지 내에서 변경이 필요한 컴포넌트만 교체하여 신속하고 효율적으로 페이지를 업데이트 가능
2. 전통적인 방식의 웹 서비스보다 더 쾌적하고 빠르게 페이지 이동이 가능함

## React Router

> React Router
> npmjs.com에 등록되어 있는 라이브러리. 대다수의 리액트 앱이 사용하고 있는 대표적인 라이브러리이다.

```bash
npm i react-router-dom
```

### Routes와 Route

- 원하는 경로에 원하는 컴포넌트를 렌더링 할 수 있다.
- \*(별표)는 위에 있는 경로들이 아닌 나머지 경로로 switch의 default문과 유사하다.
- 주의할 점은 Routes 컴포넌트 하위 자식 컴포넌트로는 Route만 올 수 있다.
- 두번째로 주의할 점은 Routes 컴포넌트 외부에 배치된 요소는 모든 Route 컴포넌트에서 렌더링 된다.
- 모든 페이지에 공통적을 사용될 요소가 아니라면, Routes 컴포넌트 외부에 배치하는 것은 적절치 않다.

### 페이지 라우팅 (Link, useNavigate)

- 버튼이나 링크를 통해서 자유롭게 페이지를 이동하는 방법
- Link 컴포넌트는 HTML의 a태그를 대체하는 컴포넌트이다.
- HTML의 a태그를 이용하면 새로고침되며 클라이언트 사이드 렌더링 방식으로는 페이지 이동이 제공되지 않는다.
- 결론적으로 리액트 앱 내부에서 내부 페이지 이동 링크를 만들어야 한다면 Link 컴포넌트를 사용하는 것이 적절하다.
- 또한 이벤트 핸들러와 함께 사용할 수 있는 useNavigate 커스텀 훅을 사용해서 페이지 이동을 할 수 있다.
- 정리하면 링크가 필요하다면 Link 태그를 사용하고, 이벤트 핸들러 함수 안에서 특정 조건에 따라 페이지 이동이 필요하다면 navigation 함수를 불러올 수 있는 useNavigate 훅을 사용한다.

### 동적 경로 (useParams, useSearchParams)

- 동적 경로: 동적인 데이터를 포함하고 있는 경로
- 상품 ID 같은 동적인 데이터를 포함하고 있는 ~/product/1, ~~/product/2, ... 경로들을 동적 경로라고 말한다.
- 동적 경로에는 URL Parameter 방식과 Query String 방식으로 두 가지 방식이 있다.
- URL Parameter 방식은 슬래시(/) 뒤에 특정 아이템의 ID를 명시하여 작성하고,
- Query String 방식은 물음표(/?) 뒤에 변수 이름을 쓰고 변수를 할당하듯 함께 값을 써주는 형태로 작성한다.
- URL Parameter 방식은 아이템의 id 등의 변경되지 않는 값을 주소로 명시하기 위해 사용되며,
- Query String 방식은 검색어 같이 자주 변경되는 값을 주소로 명시하기 위해 사용된다.
- URL Parameter 방식은 App 컴포넌트 Route 경로에 "/경로/:id"로 명시하고, useParams 커스텀 훅을 사용해서 현재 브라우저 주소창에 명시한 URL 파라미터 값을 가져와서 활용할 수 있다.
- 만약 QueryString을 이용한다면, Route 경로 수정 없이 useSearchParams 훅을 사용해 마치 useSate를 사용하는 것처럼 params와 setParams를 받아 변수 값을 읽거나 현재 Query String을 수정할 수 있다. 변수 값을 가져올 때는 params.get("변수명")형태로 메소드를 사용한다.
