# React Context

## Context 개념

- 컴포넌트간의 데이터를 전달하는 또 다른 방법
- 기존의 props를 가지고 있던 단점(Props Drilling)을 해결할 수 있음
  > props의 단점: Props Drilling. props는 부모 -> 직계 자식으로만 데이터를 전달할 수 있었음
- Context(저장소)를 통해서 원하는 props을 부모 -> 어떤 자식에게도 데이터를 전달 가능
- createContext를 통해서 Context를 생성하고, 내부 provider 속성의 컴포넌트로 다른 컴포넌트를 감싸 사용한다.
- provider 컴포넌트의 속성인 value에 하위 자식 컴포넌트에 전달할 props를 객체로 묶어서 지정할 수 있다.
- provider로 감싼 하위 컴포넌트들은 useContext 훅을 사용하여 value를 사용할 수 있다.

## Context를 적용하면 풀리는 최적화

### [문제 발생 원인]

- Context의 provider 컴포넌트도 엄연히 React 컴포넌트이기 때문에 App 컴포넌트로부터 value props(로 제공받는 객체)가 바뀌게 되면 리렌더링이 발생하게 된다.
- 결국 App -> Context Provider -> 하위 자식 컴포넌트는 모두 업데이트가 된다.
- 그런데 React.memo 메서드를 사용해서 부모 컴포넌트가 업데이트 되더라도, 자신이 받는 props가 바뀌지 않으면 리렌더링이 되지 않도록 설정을 해뒀다. 그런데 왜 리렌더링이 발생할까?
- 그 이유는 value props로 전달하는 객체 자체가 다시 생성되기 때문이다.
- 그렇기 때문에 useContext를 호출해서 Context로부터 불러온 props 객체들 모두 다시 생성된다.
- memo를 적용한 컴포넌트라도 useContext로부터 불러온 값이 변경되면, 이것은 props가 변경된 것과 동일하게 리렌더이 발생한다.

```jsx
return (
  <div className="App">
    <Header />
    <TodoContext.Provider
      value={{
        todos,
        onCreate,
        onUpdate,
        onDelete,
      }}
    >
      <Editor />
      <List />
    </TodoContext.Provider>
  </div>
);
```

### [문제 해결방법]

- Context를 '변경될 수 있는 값'과 '변경되지 않는 값'으로로 분리해서 해결할 수 있다.
- todoList 예제에서는 todos와 useCallback으로 묶어준 onCreate/onUpdate/onDelete으로 구분하여 분리할 수 있다.
- state를 가진 provider와 setState 함수를 가진 provider를 분리해서 하위 컴포넌트들을 감싸준다.
- 부모 컴포넌트인 state를 가진 provider의 props가 변경되면 하위 컴포넌트들도 모두 리렌더링되지만, 앞서 React.memo를 적용해 놨기 때문에 props가 바뀌지 않은 컴포넌트들은 리렌더링이 발생하지 않는다.
