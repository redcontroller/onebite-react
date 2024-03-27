// 스코프
// -> 전역(전체 영역) 스코프, 지역 스코프
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);

    function funcB() {}
}

funcA();
// console.log(b); // Error: b is not defined

if (true) {
    let c = 1;
}

// console.log(c); // Error: c is not defined

for (let i = 0; i < 10; i++) {
    let d = 1;
}

// console.log(d); // Error: d is not defined
// console.log(i); // Error: i is not defined

// funcB(); // Error: funcB is not defined