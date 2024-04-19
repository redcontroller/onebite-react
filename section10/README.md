> 최적화(Optimization): 웹 서비스의 선응를 개선하는 모든 행위를 일컫음

### 일반적인 웹 서비스 최적화 방법

- 서버의 응답속도 개선
- 이미지, 폰트, 코드 파일 등의 정적 파일 로딩 개선
- 불필요한 네트워크 요청 줄임

### React App 내부의 최적화 방법

- 컴포넌트 내부의 불필요한 연산 방지
- 컴포넌트 내부의 불필요한 함수 재생성 방지
- 컴포넌트의 불필요한 리렌더링 방지

### 최적화 방법 (1) useMemo - 불필요한 연산 방지

> 메모이제이션(Memoization): 기억해두기, 메모해두기

- 메모이제이션(Memoization) 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅
- 반복적으로 수행되는 동일한 연산의 결괏값을 메모리에 저장하여 재사용한다.
- 자매품 useCallback

```jsx
const { memoizationValue } = useMemo(() => {
  const memoizationValue = filterTodos(deps);
  return { memoizationValue };
  // JS 객체 리터럴을 생성할 때 축약된 문법
  // 객체 리터럴에서 키는 변수 이름이고, 값은 해당 변수의 값이 된다.
}, [deps]); // 의존성 배열 Deps
```

### 최적화 방법 (2) React.memo - 불필요한 리렌더링 방지

- React.memo는 리액트의 내장 함수로 불필요한 리렌더링을 방지할 수 있다.
- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
- 최적화된 기능이 추가된 컴포넌트는 props를 기준으로 메모이제이션 된다.
- 즉, MemoizedComponent는 부모 컴포넌트가 리렌더링 되더라도 자신이 받는 props가 바뀌지
- 않으면 다시 리렌더링이 발생하지 않도록 메모이제이션 되어 웹 서비스가 최적화된다.

```jsx
const MemoizedComponent = memo(Component);
// 인수: 컴포넌트
// 반환값: 최적화된 컴포넌트
```

- React.memo는 props의 값을 얕은 비교로 변화를 판단한다.
- 객체 타입의 값, 함수는 매번 새롭게 전달이 될 때마다 다른 주소 값을 가지게 되기 때문에 memo 메서드가 판단하기에 props가 바뀌었다고 판단한다.
- 즉, 객체 타입의 값을 props로 받고 있는 컴포넌트는 memo 메서드를 적용하기만 해서 최적화가 제대로 이루어지지 않는다.

**해결방법**

- (1) App 컴포넌트에서 객체 타입의 props(함수)들 자체를 메모이제이션 -> useCallback 필요
- (2) React.memo 메서드에 두 번째 인수로 콜백 함수를 추가로 전달해서 최적화 기능을 커스터마이징 한다.
- 컴포넌트가 리렌더링 될 때마다 컴포넌트 props가 바뀌었는지 스스로 판단하지 않고, 콜백함수의 매개변수로
  - 과거의 prevProps와 현재의 nextProps를 인수로 받고 반환값에 따라 props 변화를 판단한다.
  - 컴포넌트를 인수로 받아서 해당 컴포넌트에 최적화(메모이제이션) 같은 추가 기능을 덧붙여서 새로운 컴포넌트를 반환해주는 React.memo와 같은 메서드들을 리액트에서는 특별히 고차 컴포넌트(HOC, Higher Order Component)라고 부른다.
  - 한번 호출하는 것만으로도 컴포넌트에 새로운 기능을 부여할 수 있기에 복잡한 리액트 앱 구축 시 꽤나 자주 사용함
  - 참고자료 : https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/

```jsx
const MemoizedComponent = memo(Component, (prevProps, nextProps) => {
  if (prevProps.prop1 !== nextProps.prop2) return false;
  if (prevProps.prop2 !== nextProps.prop2) return false;
  return true;
});
```

### 최적화 방법 (3) useCallback - 불필요한 함수 재생성 방지하기

- React.memo처럼 모든 props를 일일이 다 비교는 불편하고 귀찮다.
- 그렇기 때문에 객체(함수) 형태의 props를 애초에 다시 생성되지 않도록 최적화 한다.

```jsx
const func = useCallback(() => {}, [deps]);
```

### 언제 최적화하고 무엇이 최적화 대상이 되는가?

- 리액트 앱을 최적화할 때는 하나의 프로젝트를 거의 완성한 상태에서 최적화함
- 기능구현이 먼저이며 최적화는 가장 마지막에 하는 것이 일반적이다.
- 새로운 기능을 덧붙이거나 수정해야 될 때 최적화가 풀리거나 고장날 수 있다.
- 모든 것들에 최적화를 적용하면 안되며, 꼭 필요한 연산이나 함수, 컴포넌트에 적용하는 것이 좋다.
- 작고 단순한 컴포넌트의 경우 최적화를 위해 React.memo를 적용해서 추가적인 연산을 덧붙일 필요는 없다. memo의 경우 최적화를 위한 props 비교나 메모이제이션에 컴포넌트의 결괏값을 보관하는 등의 몇 가지 연산이 필요함. 이런 경우 단순하고 가벼운 컴포넌트를 재렌더링 하는 것이 더 빠르거나 비슷할 수 있다.
- 반면, 유저 행동에 따라서 하위 요소가 굉장히 많아질 수 있는 컴포넌트나 함수를 굉장히 많이 가지고 있어 무거워진 컴포넌트에 한에서 최적화를 적용한다.
- 참고자료 : https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/
