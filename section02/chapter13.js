function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10); // resolve(성공)
      } else {
        reject("num이 숫자가 아닙니다"); // reject(error)
      }
    }, 2000);
  });

  return promise;
}

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(result);
    // return add10(undefined); undefined가 인자로 넘어가 error 출력
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    // 실행 도중 에러 시 catch하여 error 문구 출력
    // reject의 인자를 넘겨 받음
    console.log(error);
  });
