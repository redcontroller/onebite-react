<div align="center">
  <img width="600px" src="https://github.com/redcontroller/onebite-react/assets/11751089/f37459c7-6f60-47e8-aa8a-4e9d2e2d44ac" />
</div>

# 웹 스토리지 이용하기

### Web Storage : 웹 브라우저 내장 DB

**SessionStorage**

- 브라우저 탭 별로 데이터를 보관
- 탭이 종료되기 전에는 데이터 유지 (새로고침에도 유지)
- 탭이 종료되거나 꺼지면 데이터 삭제
- 저장: sessionStorage.setItem(key, value)
- 꺼냄: sessionStorage.getItem(key)

**LocalStorage**

- 사이트 주소별 데이터 보관
- 사용자가 직접 삭제하기 전까지 데이터 보관
- 저장: localStorage.setItem(key, value)
- 꺼냄: localStorage.getItem(key)

### [로컬 스토리지 저장하는 방법]

- 객체 타입의 값을 그대로 로컬 스토리지 안에 저장할 수 없다.
- 객체를 저장하기 위해서는 문자열로 변환해서 넣는다.

```javascript
localStorage.setItem("test", "hello");
localStorage.setItem("person", JSON.stringify({ name: "Kim" }));
```

### [로컬 스토리지 데이터 불러오는 방법]

- 로컬 스토리지에 저장된 객체를 사용하려면 다시 문자열에서 객체 형태로 변환해주어야 한다.
- JSON.parse()에서 주의할 점은 undefined/null을 인수로 받으면 Error 발생한다.

```javascript
console.log(localStorage.getItem("test"));
console.log(JSON.parse(localStorage.getItem("person")));
```

### [로컬 스토리지 데이터 삭제하는 방법]

- 개발자 모드(F12) Application 탭에서 해당 데이터를 선택 후 Backspace
- 또는 데이터의 key로 선택 또는 모두 선택하여 제거하는 방법도 있다.

```javascript
Storage.removeItem("test"); // key로 삭제
localStorage.clear(); // 모두 삭제
```

# 배포 준비를 위해 해야 할 작업

- 페이지 타이틀 설정하기
- Favicon 설정하콘
  - 브라우저 탭에 표시되는 작은 아이콘
- 오픈 그래프 태그 설정하기
  - 웹사이트 링크 공유시 썸네일, 제목 등의 정보를 노축하는 것
- 프로젝트 빌드(Build)

# 나만의 것으로 만드는 학습 방법

- \"나만의 것\"이 되었다고 판단할 수 있는 기준
- 다른 사람에게 설명할 수 있는 상태
- 학습 효율성 피라미드는 가르치기, 실습해보기, 토론/회의하기 순으로 떨어진다.
- 가르치기는 무려 90%의 내용을 기억할 수 있는 방법이다.
- 주변에 가르쳐줄 사람이나, 내게 배우려고 하는 사람이 없다면?
- 블로그를 통해서 가르쳐보라. 단수 TIL을 넘어 교육용 컨텐츠라고 생각하고 글을 쓰는 것이다. 향후 책을 출간하게 될 지도 모르는 일이다.

# 앞으로의 학습 방향에 대한 추천

- 함께 자라기, 애자일로 가는길, 김창준 저서, 인사이트 출판사
- 재밌게 공부할 수 있는 주제를 빨리 찾아낼 수 있는 몰입 이론에 따르면, 나의 실력에 비해 난이도가 너무 높은 영역은 불안과 걱정을 느끼게 되어 이런 영역의 과제에는 쉽게 몰입할 수 없다. 반대로 나의 실력보다 낮은 난이도의 과제는 해야할 필요성을 못느끼게 되고 지루함과 귀찮음을 느끼게 된다. 그렇기 때문에 나에게 너무 쉽지도 그렇다고 너무 어렵지도 않은 딱 도전해 볼만한 과제를 수행할 때 비로소 몰입을 느낄 수 있다.
- 감정 일기장에 상태관리 도구를 도입한다던지, 월별 또는 주별 조회하는 옵션을 추가해 본다던가 하는 너무 어렵지도 쉽지도 않은 과제들을 수행할 때 우리는 비로소 도전의식이 생기고 재미를 느끼게 되면서 궁극적으로 몰입해서 학습을 할 수 있게 된다.
- 마치 잘 만들어져 몰입하게 되는 게임처럼.
- 앞으로 어떤 것을 선택해서 배워야 될지를 결정해야 될 때 이 몰입 이론에 따라서 나에게 너무 쉽지도 어렵지도 않은 주제들을 잘 골라서 행복하고 즐겁게 단계별로 전략적인 학습을 해야 한다.

# 몰입 가능한 주제 찾기

- 1. 새로운 키워드 수집하기
  - 모노레포, 상태관리, React Query, Node, TDD, Micro Frontend, Design Pattern, Redux, CSS in JS, Vite, Bundle Diet, ...
  - 개발자들이 많이 모이는 블로그(velog)나 커뮤니티에서 눈팅하기
  - 관심있는 회사의 기술 블로그 아티클 읽기(우아한 기술블로그, tossTech, Naver O2)
  - 세미나 참여하기 (feConf, Ne(o)RDINARY, INFCON)
- 2. 어려운 과제의 난이도 낮추기
  - 언젠가 해보고 싶지만, 지금은 너무 어려운 프로젝트
  - 너무 어렵게 느껴지는 기능들만 최대한 다 제거함으로써 난이도를 낮춘 미니 버전의 프로젝트로 진행
- 3. 나의 실력을 높이기
  - 난이도를 어디서 어디까지 낮출지 감도 안잡히고, 내가 뭘 아는지 모르겠다고 한다면, 일단 본인의 실력을 올려야 하는 시기일 수 있다.
  - 강의 듣기, 스터디 나가기, 책 보기를 통해 나의 실력 빠르게 상승시키기
- 4. 나의 실력을 낮추기 (모래주머니를 차기기)
  - 평소에 쓰는 라이브러리나 프레임워크를 사용하지 않고 모든 기능을 내가 전부 직접 구현해 보기를 해볼 수 있다.

<div align="center">
  <img width="600px" src="https://github.com/redcontroller/onebite-react/assets/11751089/2cced434-283a-4b50-ad76-64cdddab7a69" />
</div>
