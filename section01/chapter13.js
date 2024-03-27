// 1. 콜백함수
function main(value) {
    // console.log(value); // sub() 함수 정보
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

// function sub() {
//     console.log("i am sub");
// }
// main(sub);

main(() => {
    console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        // console.log(idx);
        callback(idx);
    }
}

// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// repeat(5);
// repeatDouble(5);
repeat(5, function (idx) {
    console.log(idx); // 1 ~ 5
});

repeat(5, function (idx) {
    console.log(idx * 2); // 1 ~ 5에 2배
});

repeat(5, function (idx) {
    console.log(idx * 3); // 1 ~ 5에 3배
});