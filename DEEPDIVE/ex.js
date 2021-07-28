// 외부 함수(outer function)
function outer() {
  var x = 1;

  // 중첩 함수(nested function), 내부 함수(inner function)
  function inner() {
    var y = 2;
    // 외부 함수의 변수를 참조할 수 있다.
    console.log(x + y); // 3
  }

  inner();
}

outer();
