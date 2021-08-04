let foo = 1; // 전역 변수

{
  // let, const 키워드로 선언한 변수가 호이스팅되지 않는다면 전역 변수를 참조해야 한다.
  // 하지만 let 키워드로 선언한 변수도 여전히 호이스팅이 발생하기 때문에 참조 에러(ReferenceError)가 발생한다.
  console.log("전역 변수를 참조하는 foo: ", foo); // ReferenceError: Cannot access 'foo' before initialization
  foo = 2; // 지역 변수
  console.log("재할당된 foo ", foo);
}
