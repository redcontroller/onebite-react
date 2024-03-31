// 1. 배열의 구조 분해 할당
let arr = [1,2,3];
// let one = arr[0]; // 일일이 선언하는 건 비효율적이다.
// let two = arr[1];
// let three = arr[2];
let [one, two, three, four = 4] = arr; // 구조분해할당 및 초기값 설정
let [first, , third] = arr; // 배열은 인덱스를 기준으로 구조분해할당
let [value] = arr;
console.log(one, two, three, four);
console.log(first, third);
console.log(value);

// 2. 객체의 구조 분해 할당
let person = {
    name: "홍길동",
    age: 27,
    hobby: "테니스",
}

// let name = person.name; // 일일이 선언하는 건 비효율적이다.
// let age = person.age;
// let hobby = person.hobby;
let { name, age, hobby, extra = "hello"} = person; // 초기값 설정
console.log(name, age, hobby, extra);

let { name: myName, hobby: myHobby } = person; // 변수명 변경
console.log(myName, myHobby);

// 3.구조분해할당을 이용해서 함수의 매개변수를 받는 방법
const funcForObject = ({ name, age, hobby, extra }) => { // 객체 매개변수의 구조분해할당
    console.log(name, age, hobby, extra);
};
const funcForArray = ([ one, two, three]) => { // 배열 매개변수의 구조분해할당
    console.log(one, two, three);
};

funcForObject(person); // 홍길동 27 테니스 undefined
funcForArray(arr); // 1 2 3