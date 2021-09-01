function printNum(n) {
  console.log(n);
}

printNum(1);
setTimeout(() => printNum(2), 3000);
setTimeout(() => printNum(3), 2000);
setTimeout(() => printNum(4), 1000);
printNum(5);
