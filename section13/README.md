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
