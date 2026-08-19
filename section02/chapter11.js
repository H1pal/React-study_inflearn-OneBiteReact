// 비동기 처리
console.log(1);

// setTimeout으로 비동적인 처리를 구현
setTimeout(() => {
  console.log(2);
}, 3000); // 3000ms(3초)동안 대기하고 실행

console.log(3);

console.log("주문 접수");

setTimeout(() => {
  console.log("음료 완성");
}, 1000);

console.log("다음 주문 접수");

const completingRequest = () => {
  // 변수에 저장하여 유연한 비동기 처리
  setTimeout(() => {
    console.log("주문하신 음식나왔습니다");
  }, 3000);
};

completingRequest(); // 3000ms 뒤에 실행
