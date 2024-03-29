// 1. Falsy한 값
let f1 = undefined; // undefined
let f2 = null; // null
let f3 = 0; // 0
let f4 = -0; // 음수 0
let f5 = NaN; // NaN
let f6 = ""; // 빈 문자열
let f7 = 0n; // 0n(Big integer 자료형)

if (!f4) {
    console.log("falsy");
}

// 2. Truthy 한 값
// -> 7가지 Falsy한 값들을 제외한 나머지 모든 값
let t1 = "hello"; // 문자열
let t2 = 123; // 숫자
let t3 = []; // 빈 배열
let t4 = {}; // 빈 객체
let t5 = () => {}; // 화살표 함수

if (t3) {
    console.log("truthy");
}

// 3. 활용 사례
function printName(person) {
    // if(person === (undefined || null)) { // 개선 전
    if(!person) { // 개선 후
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

// let person = { name: "홍길동" };
// let person; // undefined
let person = null;
printName(person); // person의 값이 없음