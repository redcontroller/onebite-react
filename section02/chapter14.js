// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 그런 키워드

async function getDate() {
    return {
        name: "이정환",
        id: "winterlood",
    };
} // 객체를 그대로 반환하는 함수가 promise 객체를 반환하는 함수가 된다.

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "이정환",
                id: "Winterlooad",
            });
        }, 1500);
    });
} // 애초에 Promise를 반환하는 비동기 함수라면, Async는 별다른 일을 하지 않고 promise 객체를 반환.

console.log(getDate());
// [[PromiseState]]: fullfilled
// [[PromiseResult]]: Object

console.log(getData2());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

// function printData() {
//     getDate().then((result) => {
//         console.log(result);
//     })
// }

// await으로 Promise 체이닝 끊기
// await을 사용해 비동기 작업을 마치 동기 작업 코드처럼 간결하게 작성할 수 있다.
async function printData() {
    const data = await getData2();
    console.log(data);
}