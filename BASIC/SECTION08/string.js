var valueA = 123;
console.log(typeof valueA);

var valueB = 'Sports';
var lowerValue = valueB.toLowerCase();
console.log('match 함수 사용 :');
console.log(lowerValue.match(/s/g));

var value0 = 'ABC';
console.log(value0.length);

var value = '황준영김';
console.log(value.indexOf('백'));

var value2 = 'abcabc';
console.log(value2.replace('a', '바꿈'));
console.log(value2.replace(/a/, '바꿈'));
console.log(value2.replace(/a/g, '바꿈'));

var value3 = 'sports';
var result = value3.concat('축구');
var result2 = result.concat('재밌니?').concat('진짜?');

console.log(result);
console.log(result2);

// cd SECTION08
// node string.js 로 콘솔값 확인

// 존재하지 않으면 -1
// 존재한다면 0 이상의 값 출력
