// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function (item, idx, arr) {
    console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

console.log(doubledArr); // [2,4,6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);
console.log(isInclude); // true
isInclude2 = arr2.includes(10);
console.log(isInclude2); // false

// 3. index
let arr3 = [2,2,2];
let index = arr3.indexOf(2);
console.log(index); // 0
index = arr3.indexOf(10);
console.log(index); // -1 (존재하지 않음)

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr4 = [1,2,3];
let findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex); // 0
findedIndex = arr4.findIndex((item) => item === 99);
console.log(findedIndex); // -1 (존재하지 않음)

let objectArr = [
    { name: "홍길동" },
    { name: "김철수" },
];

console.log(
    objectArr.indexOf({name: "홍길동"}) // indexOf로는 객체 배열의 인덱스를 찾을 수 없다.
); // -1 (존재하지 않음)

console.log(
    objectArr.findIndex(
        (item) => item.name === "홍길동"
    )
); // 0

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    { name: "홍길동" },
    { name: "김철수" },
];

const finded = arr5.find(
    (item) => item.name === "홍길동"
);

console.log(finded); // { name: "홍길동" }