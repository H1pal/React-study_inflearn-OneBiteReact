// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

const returned1 = arr1.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});
console.log(returned1); // undefined: forEach 메서드는 값을 반환하지 않음

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
console.log(arr2);

// 3. indexOf
// 특정 요소의 인덱스를 찾아서 반환하는 메서드
let arr3 = [2, 2, 2];
let index = arr3.indexOf(20);
console.log(arr3);

let objectArr = [{ name: "유희성" }, { name: "유희팔" }];

console.log(objectArr.indexOf({ name: "유희성" }));

console.log(objectArr.findIndex((item) => item.name === "유희성"));

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item === 3);
const notFoundedIndex = arr4.findIndex((item) => item === 999);

console.log(findedIndex);
console.log(notFoundedIndex); // 없으면 -1을 반환

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "유희성유희성" }, { name: "유희팔" }];

const finded = arr5.find((item) => item.name === "유희팔");
const notFounded = arr5.find((item) => item.name === "목도리도마뱀");

console.log(finded);
console.log(notFounded); // 없으면 undefined를 반환
