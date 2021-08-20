let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["js", "react"];
let lang = ["korean", "english"];

console.log("before user: ", user);

user = {
  ...user,
  ...info,
  skills: [...fe, ...lang],
};

console.log("after user: ", user);
