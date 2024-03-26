// (1) 다음 요구사항을 만족하는 코드를 작성하세요.
// - 새로운 변수 max를 만들어 x와 y중 더 큰 수를 할당합니다.
// - max를 console 에 출력합니다.
// const x = 15;
// const y = 20;

// let max;

const x = 15;
const y = 20;

let max = x > y ? x : y;
console.log(max); // 20
// 또는
console.log(Math.max(x, y)); // 20

// (2) 다음 요구사항을 만족하는 코드를 작성하세요.
// - 변수 a의 저장된 값의 타입을 문자열로 출력하세요.
// - 조건문과 typeof 연산자를 이용해 코드를 작성하세요.
//    ex) a가 number 타입이라면 console.log("숫자")
//    ex) a가 string 타입이라면 console.log("문자열")
//    ex) a가 boolean 타입이라면 console.log("불리언")
//    ...
// const a = true;
const a = undefined;
// console.log(typeof a);
if (typeof a === "number") {
    console.log("숫자");
} else if (typeof a === "string") {
    console.log("문자열");
} else if (typeof a === "boolean") {
    console.log("불리언");
} else if (typeof a === "symbol") {
    console.log("심볼");
} else if (typeof a === "undefined") {
    console.log("언디파인드");
} else {
    console.log("객체");
}

const b = null;
function getType(variable) {
    return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
}
console.log(getType(b)); // null
// const c = Symbol('hi');
// console.log(getType(c)); // symbol

let type = getType(b);

if (type === "number") {
    console.log("숫자");
} else if (type === "string") {
    console.log("문자열");
} else if (type === "boolean") {
    console.log("불리언");
} else if (type === "symbol") {
    console.log("심볼");
} else if (type === "null") {
    console.log("널");
} else if (type === "undefined") {
    console.log("언디파인드");
} else {
    console.log("객체");
}

// (3) 다음 요구사항을 만족하는 코드를 작성하세요.
// - 주어진 온도에 따라 다음 메시지를 콘솔에 출력하세요.
//    > 온도가 0도씨보다 낮으면 "매우 추움"을 출력합니다.
//    > 온도가 0도씨 이상 10도씨 미만이면 "추움"을  출력합니다.
//    > 온도가 10도씨 이상 20도씨 미만이면 "적당"을 출력합니다.
//    > 온도가 20도씨 이상이면 "더움"을 출력합니다.
// let temperature = 10;

let temperature = 10;

switch (true) {
    case (temperature < 0): {
        console.log("매우 추움");
        break;
    }
    case (temperature < 10): {
        console.log("추움");
        break;
    }
    case (temperature < 20): {
        console.log("적당");
        break;
    }
    default: {
        console.log("더움");
        break;
    }
}