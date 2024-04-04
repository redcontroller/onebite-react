function task() {
    setTimeout(() => {
        console.log("안녕하세요!");
    }, 2000);
}
function add(a, b, callback) {
    setTimeout(() => {
        const sum = a + b; // 3
        // console.log(sum);
        callback(sum);
    }, 3000);
}

task();
add(1, 2, (value) => {
    console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(()=> {
        const food = "떡볶이";
        // 비동기 작업의 결과를 콜백함수를 통해 활용하기
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        // 비동기 작업의 결과를 콜백함수를 통해 활용하기
        callback(cooldownedFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        // 비동기 작업의 결과를 콜백함수를 통해 활용하기
        callback(freezedFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    // 비동기 작업의 결과를 콜백함수를 통해 다시 또 다른 비동기 작업의 인수를 넣어주기
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
        // 인덴트(indent, 들여쓰기)가 점점 깊어짐 -> 가독성 떨어짐 -> 콜백지옥 현상 발생
        freezeFood(food, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});