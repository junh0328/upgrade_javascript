var global = "global scope";

function outer() {
  var a = 10;
  var b = "B";

  function inner() {
    var a = 1;
    console.log(a); // inner 내부 스코프
    console.log(b); // outer 내부, 형제 스코프
    console.log(global); // global로 선언됨, 글로벌 스코프
  }
  inner();
}

outer();

/*
클로저 - 함수가 생성된 시점의 스코프 체인을 모두 들고 있는다. 지우지 않고 기억한다.

1. outer() 호출
2. outer function 내부 탐색 inner() 발견,
3. outer() 함수 내의 inner() 호출 
4. inner() 함수 내부 탐색을 통해 console.log 실행
5. 이렇게 스크립트가 위에서부터 내려오면서 읽었던 값을 계속 들고 있기 때문에 
6. 최종적으로 inner()함수 내부에서도 그 상위 스코프에 접근하여 값을 투력할 수 있다.


*/
