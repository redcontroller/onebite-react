let varA = funcA; // 선언문은 호이스팅 가능
varA();

// 1. 함수 표현식
// varB(); // 표현식은 호이스팅의 대상이 아님

// let varB = function funcB() { // 함수가 값으로 쓰임
let varB = function () { // 익명함수로 표현 가능
    console.log("funcB");
};

varB();
// funcB(); // Error

function funcA () { // 함수 선언문
    console.log("funcA");
}

// 2. 화살표 함수
let varC = () => 1;
console.log(varC()); // 1

let varD = (value) => {
    console.log(value); // 10
    return value + 1;
}
console.log(varD(10)); // 11
