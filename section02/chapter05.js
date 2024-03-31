let o1 = {name: "홍길동"};
let o2 = o1;
let o3 = {...o1};

console.log(o1 === o2); // true
console.log(o1 === o3); // false

console.log(
    JSON.stringify(o1) === JSON.stringify(o3)
); // true