// 1. Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
let date2 = new Date(1997, 1, 7, 23, 59, 59);
console.log(date1); // 현재 시간 및 날짜를 나타냄
console.log(date2);

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime(); // 정숫값
console.log(ts1);
let date4 = new Date(ts1);
console.log(date4);

// 3. 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();
console.log(`${year}년 ${month}월 ${date}일`);

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();
let ms = date1.getMilliseconds();
console.log(
  `${year}년 ${month}월 ${date}일 ${hour}시 ${minute} ${seconds}초 ${ms}밀리초`,
);

// 4. 시간 수정하기
date1.setFullYear(2023);
console.log(date1);

date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
console.log(date1);

date1.setMinutes(59);
date1.setSeconds(59);
date1.setMilliseconds(999);
console.log(date1); // 시간이 불변해짐

// 5. 시간을 여러 포맷으로 출력하기
const now = new Date();
console.log(now.toDateString());
console.log(now.toLocaleString()); // 접속자 로컬 환경 규격 출력
console.log(Date());
console.log(now.toISOString()); // 서버 통신용 ISO 8601 표준 규격 출력
console.log(now.toUTCString());
