var holSum = 0;
var zakSum = 0;
var resultSum = 0;

for (var k = 1; k < 51; k++) {
  if (k % 2 == 1) {
    holSum += k;
  } else if (k % 2 == 0) {
    zakSum += k;
  }
}
console.log('홀수 합계' + holSum);
console.log('짝수 합계' + zakSum);
resultSum = holSum + zakSum;
console.log(resultSum);
