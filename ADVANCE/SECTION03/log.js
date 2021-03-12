var get = function (one) {
  return one;
};

console.log(get(77, 100));

var get2 = function () {
  console.log('arguments 0 번째 인덱스 호출: ' + arguments[0]);
};

get2(77);

var get3 = function () {
  console.log('arguments 1 번째 인덱스 호출: ' + arguments[1]);
};

get3(77, 100);
