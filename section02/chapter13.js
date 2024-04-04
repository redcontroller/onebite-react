const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
        const num = 10;

        if (typeof num === "number") {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다");
        }
        // console.log("안녕");
        // resolve(); // [[PromiseResult]]: undefined
        // resolve("안녕"); // [[PromiseResult]]: "안녕"
        // reject("왜 실패했는지 이유...");
    }, 2000);
});

console.log(promise); // [[PromiseState]]: "pending"

// setTimeout(() => {
//     console.log(promise); // [[PromiseState]]: "fullfilled"
// }, 3000);

// Promise의 결괏값 활용하기
// then 메서드
// -> 그 후에

promise.
then((value) => { // fullfilled
    console.log(value);
}) // promise 체이닝
.catch((error) => { // reject
    console.log(error);
});

// promise.catch((error) => { // reject
//     console.log(error);
// });


function add10(num) {
    const promise = new Promise((resolve, reject) => {
        // 비동기 작업 실행하는 함수
        // executor
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다");
            }
        }, 2000);
    });

    return promise;
}

add10(0)
.then((result) => {
    console.log(result);

    // const newP = add10(result);
    // newP.then((result) => {
    //     console.log(result);
    // })
    // return newP;
    return add10(result);
}) // 이전 then의 return promise 객체 
.then((result) => {
    console.log(result);
    return add10(result);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})