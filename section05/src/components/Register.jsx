import { useState, useRef } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 외부에서 선언한 변수 (useRef와 변수의 차이 비교)
let count = 0;

const Resister = () => {
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    // state와 Event Handler 통합하기
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });
    // console.log(input);

    // const refObj = useRef(0);
    // console.log(refObj.current);
    // console.log("Register 렌더링"); // refObj 값이 변해도 리렌더링 발생 X

    const countRef = useRef(0);
    const inputRef = useRef();
    // 리액트의 특수한 변수들은 컴포넌트가 리렌더링 된다고 해서 다시 리셋되지 않는다.
    // 애초에 내부적으로 그렇게 설계 되어 있기 때문이다.
    // 그렇기 때문에 컴포넌트 내부의 변수가 필요하다면, let/const로 변수 선언이 아닌
    // useRef 또는 렌더링에 영향을 주고 싶다면 useState로 만들어야 한다.
    
    // let/const도 컴포넌트 외부에서 변수 선언하면 똑같이 동작할 수 있다.
    // 하지만 동일한 컴포넌트를 연속해서 부모 컴포넌트에서 사용할 경우 치명적인 문제가 발생한다.
    // 두 컴포넌트는 하나의 변수를 공유하기 때문에 의도하지 않는 변수값의 변경이 발생한다.
    // (루트 컴포넌트) App 컴포넌트에서 register 컴포넌트를 두 번 렌더링 하는 것은,
    // 사실 Register.jsx 파일에 있는 Resister 함수를 두 번 호출한 것이다.
    // 즉, 파일 전체가 두 번 실행된 것이 아닌, 함수만 두 번 호출된 것이다. (export 한 것만 호출)
    // 그래서 Register라는 함수와 컴포넌트 외부에서 선언된 count 변수는 두 번 선언된 것이 아닌,
    // 한번만 선언된 것이다. 함수만 두 번 호출되어 똑같은 변수를 함께 쓰고 있는 것이다.
    // 그렇기 때문에 React에서는 특별한 경우가 아니라면 컴포넌트 외부 변수를 선언을 권장하지 않는다.

    // let count = 0; // 컴포넌트 내부에서 선언한 변수

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        // count++;
        // console.log(count); // 리렌더링 되면서 변수 값이 초기화 되서 계속 1 출력

        // console.log(e.target.name, e.target.value);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            // 이름을 입력하는 DOM 요소 포커스
            // console.log(inputRef.current); // <input name="name" placeholder="이름" value="">
            inputRef.current.focus();
        }
    };

    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name: e.target.value,
    //     });
    // };

    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth: e.target.value,
    //     });
    // };

    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country: e.target.value,
    //     });
    // };

    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio: e.target.value,
    //     });
    // };

    return (
        <div>
            {/* <button
                onClick={() => {
                    refObj.current++;
                    console.log(refObj.current);
                }}
            >
                ref + 1
            </button> */}

            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name}
                    onChange={onChange}
                    placeholder="이름"
                />
            </div>
            <div>
                <input
                    name="birth"
                    value={input.birth}
                    onChange={onChange}
                    type="date" 
                />
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                />
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    );
};

export default Resister;