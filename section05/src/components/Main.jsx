import "./Main.css";
// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 자바스크립트 표현식이란 삼항연산자나 값, 변수 처럼 한 줄의 코드가 특정한 값으로 평가될 수 있는 식.
// if문이나 for문은 에러가 발생함
// 2. 숫자, 문자, 배열 값만 렌더링 된다. (boolean, null, undefined는 오류는 없으나 출력 안됨)
// 객체는 렌더링 시 오류를 발생하며, 객체의 속성으로 접근해서 값으로 출력해야 함.
// 3. 모든 태그는 닫혀있어야 한다. (또는 열리자 마자 닫히는 셀프 클로징 <img />)
// 4. 최상위 태그는 반드시 하나여야만 한다.
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true,
    }

    if (user.isLogin) {
        return (<div 
            // style={{
            //     backgroundColor: "red",
            //     borderBottom: "5px solid blue",
            // }}
            className="logout"
            >
                로그아웃
            </div>
        );
    } else {
        return <div>로그인</div>;
    }

    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : (
    //             <div>로그인</div>
    //         )}
    //     </>
    // );
};

export default Main;
