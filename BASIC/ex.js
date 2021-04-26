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
