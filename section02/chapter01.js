// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

console.log(Boolean(f1));
console.log(Boolean(f2));
console.log(Boolean(f3));
console.log(Boolean(f4));
console.log(Boolean(f5));
console.log(Boolean(f6));
console.log(Boolean(f7));

// 2. Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

console.log(Boolean(t1));
console.log(Boolean(t2));
console.log(Boolean(t3));
console.log(Boolean(t4));
console.log(Boolean(t5));

// 3. 활용 사례
function printName(person) {
  if (!person) {
    console.log("person의 값이 없음");
    return;
  }
  console.log(person.name);
}

let person = { name: "유희성" };
printName(person);
