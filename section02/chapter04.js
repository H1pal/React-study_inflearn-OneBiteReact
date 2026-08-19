// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6]; // arr1의 값들이 arr2의 배열 속으로 저장
console.log(arr2);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  b: 5, // obj1 원에 있던 b가 새로 할당되면서 덮어씌워짐
  c: 3,
  d: 4,
};

console.log(obj2); // a: 1, b: 5, c: 3, d: 4

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지 , 나머지 매개변수

function funcB(one, two, ...ds) { // Rest
  console.log(ds); // [3, 4, 5]
}

arr1 = [1, 2, 3, 4, 5];
funcB(...arr1); // Spread
