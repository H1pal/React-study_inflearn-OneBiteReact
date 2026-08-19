// 스코프
// -> 전역(전체 영역) 스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);
  function funcB() {
    console.log("ufuncBb");
  }
}

funcA();

if (true) {
  let c = 1;
}

for (let i = 0; i < 10; i++) {
  let d = 1;
}
// i 또한 반복문에서 생성된 함수이므로 스코프 오류
// console.log(i);


// funB는 funA안에 있으므로 스코프 접근 불가
// funcB();

// console.log(d);