// 단락 평가

function printName(person) {
  // 논리곱 연산자
  // name이 true라면 person.name을 반환
  // false라면 person을 반환
  const name = person && person.name;

  // 논리합 연산자
  // name이 true라면 name을 반환 
  // false라면 "person의 값이 없음"을 반환
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "유희성" });
