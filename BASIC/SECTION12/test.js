var list = [[12, 34, 56]];
for (var k = 0; k < list.length; k++) {
  var one = list[k];
  for (var m = 0; m < one.length; m++) {
    console.log(one[m]);
  }
}

var value = [56, 2, 34];
var result = value.shift();

console.log('shift한 엘리먼트 출력: ', result);
console.log(value); // 배열 자체에서 인덱스[0] 번 엘리먼트가 사라짐
