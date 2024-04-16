import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
// Reducer 함수를 통해서 상태 관리 코드를 외부로 분리할 수 있어서
// 컴포넌트 내부를 비교적 간결하게 유지할 수 있다.
function reducer (state, action) {
    // console.log(state, action);
    // if (action.type === "INCREASE") {
    //     return state + action.data;
    // } else if (action.type === "DECREASE") {
    //     return state - action.data;
    // }
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

const Exam = () => {
    // dispatch: 발송하다, 급송하다.
    // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수: 상태가 어떻게 변화되길 원하는지
        // -> 액션 객체
        dispatch({
            type: "INCREASE",
            data: 1,
        });
    };

    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: 1,
        });
    };

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;