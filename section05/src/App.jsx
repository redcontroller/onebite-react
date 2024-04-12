import './App.css';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Button from './components/Button';
import Bulb from './components/Bulb';
import Count from './components/Count';

// React 리렌더링 조건
// 1. 자신이 가지고 있는 State가 변경되었을 때
// 2. 자신이 제공받는 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링 되었을 때

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // };

  return (
    <>
      {/* <Button {...buttonProps} />
      <Button text="카페" />
      <Button text="블로그">
        <div>자식요소</div>
        <Header/>
        {"hello"}
      </Button> */}
      <Bulb />
      <Count />
    </>
  );
}

export default App;
