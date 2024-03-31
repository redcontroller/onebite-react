// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "홍길동", hobby: "딱치치기" },
    { name: "김철수", hobby: "코딩" },
    { name: "김수진", hobby: "코딩" },
];

// const codingPeople = arr1.filter((item) => {
//     if (item.hobby === "코딩") return true;
// });

const codingPeople = arr1.filter((item) => item.hobby === "코딩"); // 조건문 -> 조건식만 반환
console.log(codingPeople);

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult = arr2.map((item, idx, arr) => {
    return item * 2;
});
console.log(mapResult); // [2,4,6]

let names = arr1.map((item) => item.name);
console.log(names); // [ '홍길동', '김철수', '김수진' ]

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();
console.log(arr3); // ['a', 'b', 'c']

arr3 = [10, 3, 5];
arr3.sort();
console.log(arr3); // [10, 3, 5]

arr3.sort((a,b) => {
    if(a > b) {
        // b가 a 앞에(먼저) 와라
        return 1; // -> b, a 배치
    } else if (a < b) {
        // a가 b 앞에(먼저) 와라
        return -1; // -> a, b 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    }
})

console.log(arr3); // 오름차순
// arr3.sort((a,b) => a-b);

arr3.sort((a,b) => {
    if(a > b) {
        // a가 b 앞에(먼저) 와라
        return -1; // -> a, b 배치
    } else if (a < b) {
        // b가 a 앞에(먼저) 와라
        return 1; // -> b, a 배치
    } else {
        // 두 값의 자리를 바꾸지 마라
        return 0; // a, b 자리를 그대로 유지
    }
})

console.log(arr3); // 내림차순
// arr3.sort((a,b) => b-a);

// 4. toSorted (가장 최근에 추가된 최신 함수)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "windterlood"];
let joined = arr6.join(); // (구분자: ,)
console.log(joined); // hi,im,winterlood
joined = arr6.join(' '); // (구분자: ' ')
console.log(joined); // hi im winterlood