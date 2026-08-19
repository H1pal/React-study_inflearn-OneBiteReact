// 6가지의 요소 조작 메서드

// 스택
// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6, 7);
console.log(arr1);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const del = arr2.pop();
console.log(arr2);
console.log(del);

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const new3 = arr3.shift();
console.log(arr3);
console.log(new3);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const new4 = arr4.unshift(0);
console.log(arr4);
console.log(new4);

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced1 = arr5.slice(2, 5); // 2번 인덱스 ~ 5번 인덱스
let sliced2 = arr5.slice(2); // 2번 인덱스 ~ 마지막 인덱스
let sliced3 = arr5.slice(-3); // 마지막 인덱스로부터 3번 인덱스 ~ 마지막 인덱스
console.log(sliced1);
console.log(sliced2);
console.log(sliced3);

// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);
