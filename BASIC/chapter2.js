// case 1 삼각형 반복문

// var result = "";
// for (var i = 0; i < 7; i++) {
// result += "*";
// console.log(result);
// }

// case 2 피즈버즈
// function FizzBuzz(n) {
//   for (var k = 1; k <= n; k++) {
//     if (k % 15 == 0) {
//       console.log("FizzBuzz");
//     } else if (k % 5 == 0) {
//       console.log("buzz");
//     } else if (k % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(k);
//     }
//   }
// }

// FizzBuzz(100);

// case 3 체스보드 내 답
var turn = 0;
while (turn < 8) {
  turn++;
  if (turn % 2 == 0) {
    console.log(" # # # #");
  } else {
    console.log("# # # # ");
  }
}

// case 3 체스보드 솔루션
/*
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
*/
