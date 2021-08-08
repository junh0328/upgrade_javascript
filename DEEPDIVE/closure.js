/*
let num = 0;

function plusNum() {
  num++;
}

console.log(num);
plusNum();
console.log(num);

// 수억개의 코드

num = 200;

console.log(num); // num 값이 쉽게 변경됨
*/

function closure() {
  let num = 10;

  function plusNum() {
    num += 1;
  }

  function printNum() {
    console.log(num);
  }

  function setNum(val) {
    num = val;
  }

  // 함수를 객체 형식으로 리턴하는 이유는 새로 생성한 변수를 (.) 연산자를 통해 (객체와 같은 방식으로) 접근하기 위해서
  // 함수뿐만 아니라 지역 변수도 리턴이 가능하다 (하지만 추천하지 않음)
  // 객체 형식으로 담아서 리턴될 경우에, closure 내부에 정의된 함수 외에도 지역 변수의 값을 변경하는 경우가 생기기 때문에 (객체는 가변성의 성질을 가지므로)

  return { num, plusNum, printNum, setNum };
}

// console.log("num is:", num); // num is not defined, 상위 스코프에서 하위 스코프로 식별자 검색을 할 수 없음

const newNum = closure(); // closure 함수로 newNum 함수를 생성한다.

console.log(newNum); // 생성된 함수객체 newNum은 closure 함수가 리턴하는 객체 형식의 프로퍼티와 메서드가 들어있음

console.log((newNum.num = 20)); // newNum.num 에 값을 할당 (closure 함수의 메서드를 사용하지 않고 직접 변경)
console.log(newNum); // 객체형식으로 리턴되는 newNum의 특성상 newNum의 프로퍼티인 num의 값이 재할당됨

newNum.printNum(); // 하지만 printNum 메서드를 사용하면 기존의 10 출력

newNum.setNum(100); // 따라서 지역 변수 num을 변경하기 위해서는 새로운 메서드를 정의하여 값을 전달함으로서 부수효과를 줄어야함

newNum.printNum(); // 100 출력

// 하지만 지역 변수를 리턴하더라도 원시 타입의 값은 불변성의 성질을 가지기 때문에, 재할당하지 않는 이상 값을 변화시킬 수 없다.
// 따라서 함수를 통해 반환하여 사용하는 것이 올바르다.
