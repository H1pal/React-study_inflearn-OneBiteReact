// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four] = arr;
console.log(one, two, three, four);
// arr의 배열의 길이는 3이므로 four에 undefined 대입

[one, two, three, four = 4] = arr;
console.log(one, two, three, four);

// 2. 객체의 구조 분해 할당
let person = {
  name: "유희성",
  age: 27,
  hobby: "축구 마스터",
};

let { age: myAge, hobby, name, extra = "hello", extra2 } = person;
console.log(myAge, hobby, name, extra, extra2);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra);
};

func(person);
