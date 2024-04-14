import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import { useState, useEffect, useRef } from 'react';
import Even from './components/Even';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const isMount = useRef(false);

  // useEffect(()=> {
  //   console.log(`count: ${count} / input: ${input}`);
  // }, [count, input]);
  // 의존성 배열
  // dependency array
  // deps

  // useEffect로 라이프사이클 제어하기
  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) { // Flag로 진짜 Update 제어
      isMount.current = true;
      return;
    } // Mount일 때는 return 되어서 아래 로그가 안 찍힘
    console.log("update"); // Mount 시는 제외하고 진짜 Update 일 때만 동작
  })

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
    // console.log(count); // react State는 비동기로 업데이트 되며, 바로 적용 안됨
    // 사이드 이펙트와 같은 부가적인 작업을 하기 위해서는 useEffect를 사용할 것
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
