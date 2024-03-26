// for 문
for (let idx=0; idx < 10; idx++) {
    console.log(idx, "반복");
}

// break 문
for (let idx=0; idx < 10; idx++) {
    console.log(idx, "반복");

    if (idx >= 5) {
        break; // for문 종료
    }
}

// continue 문
for (let idx=0; idx < 10; idx++) {
    if (idx % 2 === 0) {
        continue; // 짝수 회차는 건너뛰기
    }
    console.log(idx, "반복");

    if (idx >= 5) {
        break; // for문 종료
    }
}