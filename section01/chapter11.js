// 함수 선언 및 호출
function greeting() { // 1
    console.log("안녕하세요!"); // 4
}

console.log("호출 전"); // 2
greeting(); // 3
console.log("호출 후"); // 5

let area1 = getArea(10, 20);
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 함수의 매개변수와 인수
getArea(120, 200);

// 호이스팅
// -> 끌어올리다 라는 뜻
function getArea(width, height) {
    function another() { // 중첩함수
        console.log("another");
    }
    another();
    // const width  = 10;
    // const height = 20;
    let area = width * height;

    // console.log(area);
    return area;
    console.log("hello"); // return문 이하는 실행 안됨
}