// 카운트 상태 변경 함수
function numState() {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가 시킨다.
  function increaseNum() {
    num++;
  }

  function printNum() {
    console.log("num is:", num);
  }

  return { increaseNum, printNum };
}

const closure = numState();

closure.increaseNum();
closure.printNum();
closure.increaseNum();
closure.printNum();
closure.increaseNum();
closure.printNum();
closure.increaseNum();
closure.printNum();
