// import { useState } from "react";
import useInput from "../hooks/useInput";

// 3가지 Hook 관련된 팁
// 1. React 함수 컴포넌트, 커스텀 훅(use...) 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다. (조건문이나 반복문에서 호출X)
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

// React가 내부적으로 컴포넌트들을 호출해서 화면에 렌더링할 때,
// 조건문이나 반복문 내부에서 훅을 호출하게 되면 서로 다른 훅들의
// 호출 순서가 엉망이 되어 버리는 현상이 발생하여 내부적인 오류가 발생할 수 있다.

// const state = useState(); 
// React Hooks must be called in a React function component 
// or custom React Hook Function

const HookExam = () => {
    // if (true) {
    //     const state = useState();
    // }

    // for (;;){
    //     //
    // }
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
            <input value={input2} onChange={onChange2} />
        </div>
    );
};

export default HookExam;