// 생성자 함수
function Person(name) {
  this.name = name;
}

// new Person() 프로토타입을 통해 me 라는 인스턴스를 생성하였다.
const me = new Person("Lee");

// me 객체의 생성자 함수는 Person이다.
console.log("me.constructor: ", me.constructor);
console.log("Person: ", Person);

console.log(me.constructor === Person);

// me를 만든 사람이 누구니? >> Person 프로토타입이야
