// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나는 고야잉",
  color: "black and white",
};

animal.age = 2; // 추가
console.log(animal);

animal.name = "까망이"; // 수정
console.log(animal);

delete animal.color; // 삭제
console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "유유희팔",
  // 메서드 선언
  sayHi() {
    console.log("안녕!");
  },
  hi: (name) => {
    console.log(name);
  },
};

person.sayHi();
person["sayHi"]();
person.hi("안녕");
