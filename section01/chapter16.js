// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
const person = {
    name: "홍길동",
    // 메서드
    // sayHi: function () { // 익명함수 형태
    //     console.log("안녕!");
    // },
    // sayHi: () => { // 화살표 함수 형태
    //     console.log("안녕!");
    // },
    sayHi() { // 단축 형태
        console.log("안녕!");
    },
};

person.sayHi(); // 안녕!
person["sayHi"](); // 안녕!