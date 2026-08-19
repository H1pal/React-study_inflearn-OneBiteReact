// 1.변수
let age; // 변수 선언
console.log(age); // 값이 할당되지 않은 변수는 <undefined> 형태

age = 17; // 재할당 가능
console.log(age);

// let age = 15; 재선언은 불가능

// 2. 상수
const birth = "1997.01.07"
// const birth = "2010.04.17"
// birth = "2010.04.17"
// 재할당과 재선언 모두 불가능한 변하지 않는 값을 저장

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _제외한 기호는 사용할 수 없다
let $_name;

// 3-2. 숫자로 시작할 수 없다
// let 2name; X
// O
let name1;
let _2name;

// 3-3. 예약어를 사용할 수 없다.
// let if; X

// 4. 변수 명명 가이드
// 변수에 의미가 없으면 헷갈릴 수 있음
let a = 1;
let b = 2;
let c = a - b;

// 변수 이름마다 고유한 의미를 부여
let salesCount = 1;
let refundCount = 1;
let totalCount = salesCount - refundCount;