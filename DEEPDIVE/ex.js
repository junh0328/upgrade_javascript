// console.log("var keyword declaration: ", variable);
// // console.log("let keyword declaration: ", foo); // Cannot access 'foo' before initialization
// // console.log("const keyword declaration: ", FOO); // Cannot access 'FOO' before initialization

// var variable = 6;
// console.log("variable after initialized: ", variable);

// let foo = 7;
// console.log("foo after initialized: ", foo);

// const FOO = 8;
// console.log("FOO after initialized: ", FOO);

let foo = 1; // 전역 변수

// 블록 레벨 스코프의 특징을 갖는 let 키워드
{
  console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo = 2; // 지역 변수
}
