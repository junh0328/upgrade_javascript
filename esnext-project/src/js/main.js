// src/js/main.js
import { pi, power, Foo } from "./lib";

console.log(pi);
console.log(power(pi, pi));

const f = new Foo();
console.log(f.foo());
console.log(f.bar());
