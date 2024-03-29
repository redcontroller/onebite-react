// 단락평가
function returnFalse() {
    console.log("False 함수");
    // return false;
    return '';
}

function returnTrue() {
    console.log("True 함수");
    // return true;
    return [];
}

console.log(returnFalse() && returnTrue()); // 단락평가 동작
// False 함수
// false / (빈 문자열)
console.log(returnTrue() && returnFalse());
// True 함수
// true / []
// False 함수
// false / (빈 문자열)
console.log(returnTrue() || returnFalse()); // 단락평가 동작
// True 함수
// true / []

// 단락 평가 활용 사례
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName(); // person의 값이 없음
printName({ name: "홍길동"}); // 홍길동