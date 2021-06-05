// let cnt = 0;
// function cntPlus() {
//   cnt = cnt + 1;
// }

// console.log(cnt);
// cntPlus();
// console.log(cnt);

/*
-- 수 억개의 코드
cnt = 100;
-- 수 억개의 코드
cntPlus();

console.log(cnt);
*/

function closer() {
  let cnt = 0;
  function cntPlus() {
    cnt = cnt + 1;
  }
  function printCnt() {
    console.log(cnt);
  }
  function setCnt(num) {
    cnt = num;
  }
  return { cntPlus, printCnt, setCnt };
}
console.log(closer());

// const func1 = closer();

// console.log(func1);

// func1.printCnt();
// func1.cntPlus();
// func1.printCnt();
// func1.setCnt(100);
// func1.printCnt();

// let cnt = 10;

// function scope() {
//   let cnt = 1;
//   console.log(cnt);
// }

// console.log(cnt);
// scope();
