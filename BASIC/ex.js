/* 프로퍼티 */

// const person1 = {
//   name: "LEE JUN HEE",
//   age: 25,
// };

// console.log(person1.name);

// let doh = "Doh";

// console.log(typeof doh.toUpperCase);

// console.log(doh.toUpperCase());

/* 함수와 메소드 */

// function AnythingCanUpper(string) {
//   let result = string.toUpperCase(string);
//   console.log(result);
// }

// AnythingCanUpper("upper2");

// var upper = "upper";

// console.log(upper.toUpperCase());

/* 객체의 접근 */

// let day1 = {
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running"],
//   morning: {
//     squirrel: false,
//     events: ["work", "touched tree"],
//     inner: {
//       events: {
//         work() {
//           return "work";
//         },
//         touchedTree() {
//           return "touched tree";
//         },
//       },
//     },
//   },
// };
// console.log(day1.squirrel);

// console.log(day1.wolf); // 객체내에 정의되지 않음

// console.log(day1.morning.inner.events.touchedTree());

/* 객체의 변형과 참조 */

/*
// case 1, 동일한 객체에 두개의 참조가 있는 경우
const object1 = { value: 10 };
const object2 = object1;

// case 2, 다른 객체가 같은 속성 { value : 10 }을 가지고 있는 경우
const object3 = { value: 10 };

console.log(object1 == object2);

console.log(object1 === object2);

console.log(object1 == object3);

// value 의 값을 변경
object1.value = 15;

console.log(object1.value);

console.log(object2.value);

console.log(object3.value);
*/

/*
const score = { visitors: 0, home: 0 };

score.visitors = 1;

console.log(score);

score = { visitors: 1, home: 1 };

console.log(score);
*/

/*
Queue를 통해 관리하는 Array객체의 메서드 unshift, shift

let todoList = [];
function remember(task) {
  todoList.push(task);
}
function getTask() {
  return todoList.shift();
}
function rememberUrgently(task) {
  todoList.unshift(task);
}

remember("멍멍이");
console.log(todoList);
remember("야옹이");
console.log(todoList);

console.log(getTask());
console.log(todoList);
rememberUrgently("멍멍이");
console.log(todoList);
 */

/*
JSON 객체 사용

let string = JSON.stringify({ squirrel: false, events: ["weekend"] });

console.log(string);

console.log(JSON.parse(string).squirrel);
console.log(JSON.parse(string).events);
*/

/*
var let const 

const halve = function (n) {
  return n / 2;
};
console.log(halve(100));
var n = 10;
console.log(halve(n));
var n = 20;
console.log(halve(n));
*/

/*
function speak(line) {
  console.log(`The ${this.type} rabbits says '${line}'`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting");

hungryRabbit.speak("I could use a carrot right now.");
*/

/*
function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 });
*/

/*
let empty = {};

console.log(empty.toString);
// function toString(){...}

console.log(empty.toString());
// [object object]
*/

/*
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

let killerRabbit = Object.create(protoRabbit);

killerRabbit.type = "killer";
// type을 설정
killerRabbit.speak(" SKREEEEE! ");
// speak()에 인수로 문자열 " SKREEEEE! " 를 넣어주고 호출했기 때문에 해당 함수가 실행된다.

killerRabbit.type;
killerRabbit.speak(" SKRRRR! SKRRRR! ");
*/

/*
function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit("Weird");
weirdRabbit.speak("bow wow!");
*/

// console.log("toString" in Object("Jack"));

/*
// Human class
class Human {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  sleep() {
    console.log("zzz");
  }
  eat() {
    console.log("냠냠");
  }
}
// Human class의 자식 class인 Student class
// Human class가 가지고 있는 속성인 name, sex, age를 super를 통해 가지고 오고, 고유의 속성인 grade와 school이 추가 되었다.
class Student extends Human {
  constructor(name, sex, age, grade, school) {
    super(name, sex, age);
    this.grade = grade;
    this.school = school;
  }
  // 공부하는 기능도 추가되었다.
  study() {
    console.log(
      `${this.school}에 다니는 ${this.grade} ${this.name}은(는) 열심히 공부합니다`
    );
  }
}

const student1 = new Student("영수", "남성", 19, "고 3", "인덕원 고등학교");

student1.eat();

student1.study();
*/

/*
function canYouSpotTheProblem() {
  "use strict";
  for (counter = 0; counter < 10; counter++) {
    console.log("Happy happy");
  }
}
canYouSpotTheProblem();
*/

/*
"use strict";
function Person(name) {
  this.name = name;
}
let ferdinand = new Person("Ferdinand");
console.log(ferdinand.name);
*/

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLocaleLowerCase() == "left") return "L";
  if (result.toLocaleLowerCase() == "right") return "R";
  throw new Error("Invalid direction: " + result);
}

function lock() {
  if (promptDirection("Which way?") == "L") {
    return "a house";
  } else {
    return "two angry bears";
  }
}

try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}
