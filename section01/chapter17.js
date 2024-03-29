// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [ // 어떤 타입의 값이든 자유롭게 다 넣을 수 있다.
    1, 2, 3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];

// 2. 배열 요소 접근
let item1 = arrC[0];
let item2 = arrC[1];

arrC[0] = "bye bye";
console.log(arrC);
arrC.splice(1, 1); // 인덱스 1부터, 1개 원소 제거
console.log(arrC);
arrC.splice(1, 1, "change element"); // 인덱스 1부터, 1개 원소 제거 후 "change element" 추가
console.log(arrC);