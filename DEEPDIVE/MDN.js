/*
정적 메서드만 지원하는 Math 빌트인 객체의 경우 인스턴스를 생성하지 않더라도 사용이 가능하다.

- Math.floor()
- Math.max()
- Math.ceil()
...
*/

// console.log(Math.floor(2.5));

// const num1 = 2.5;
// console.log(Math.floor(num1));

// console.log(typeof num1);

/*
하지만

String.prototype.toUpperCase()
String.prototype.toLowerCase()

와 같이 프로토타입 프로퍼티에 속해있는 메서드인 경우 인스턴스를 생성하지 않으면 사용이 불가능하다.

console.log(String.toUpperCase("hi")); // String.toUpperCase is not a function
*/

/* 일반적인 변수 선언 */

const UPPER = "hi";

console.log(UPPER);

console.log("typeof:", typeof UPPER); // typeof: string  why ? 자바스크립트 엔진에 의해 문자열로 암묵적 형변환이 되었다

console.log("UPPER.prototype: ", UPPER.prototype); // undefined new 연산자를 통해 생성한 인스턴스가 아니기 때문에 prototype 프로퍼티를 갖지는 않는다

console.log("UPPER.constructor:", UPPER.constructor); // [Function: String]

console.log("UPPER.toUpperCase():", UPPER.toUpperCase()); // UPPER.toUpperCase(): HI

console.log("------------------------------------");

/* new 연산자를 통해 생성자 함수로 인스턴스 생성 */

const LOWER = new String("HI");

console.log(LOWER); // [String: 'HI']

console.log(typeof LOWER); // object

console.log(LOWER.prototype); // undefined

console.log(LOWER.constructor); // [Function: String]

console.log(LOWER.toLowerCase()); // hi

/*
21.3 원시값과 래퍼 객체
*/
