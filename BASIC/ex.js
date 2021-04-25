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

let day1 = {
  squirrel: false,
  events: ["work", "touched tree", "pizza", "running"],
  morning: {
    squirrel: false,
    events: ["work", "touched tree"],
    inner: {
      events: {
        work() {
          return "work";
        },
        touchedTree() {
          return "touched tree";
        },
      },
    },
  },
};
console.log(day1.squirrel);

console.log(day1.wolf); // 객체내에 정의되지 않음

console.log(day1.morning.inner.events.touchedTree());
