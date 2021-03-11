var value = '123';
try {
  var result = JSON.parse(value);
} catch (e) {
  console.log('JSON 파싱 에러');
}
console.log(result);
console.log(typeof result);

var value2 = true;
var result2 = JSON.parse(value2);
console.log(result2);
console.log(typeof result2);

var value3 = { point: '123' };
var result3 = JSON.parse(value3);
console.log(result3);
