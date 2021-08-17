const users = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Lee" },
  { id: 3, name: "Park" },
  { id: 4, name: "Choi" },
];
console.log("before find: ", users);

/* find 고차함수를 통해 프로퍼티인 id, name을 각각 변경 */
users.find((user) => user.id === 1).id = 10;
users.find((user) => user.id === 10).name = "진짜";
console.log("after changin properties : ", users);
