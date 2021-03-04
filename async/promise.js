'use strict';

// Promise is a JavaScript object for asynchronous operation
// Producer(제공) vs Consumer(소비)

// 1. Producer

// 새로운 프로미스가 만들어 질 때, executor 함수가 바로 실행된다.
// resolve 성공 <-> reject 실패
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error('no network'));
  }, 2000);
});

// 2. Consumers: then, catch, finally
// then : 프로미스의 콜백 함수를 정상 실행했을 때 넘어오는 resolve 값이 value로 넘어온다.
// catch : 프로미스의 콜백 함수에 오류가 발생할 시 넘어오는 reject 값이 error로 넘어간다.
// finally : 프로미스의 콜백 함수가 다 종료되면, 마지막으로 무조건 출력된다.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('done');
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🔴'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🟡`), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🟠`), 1000);
  });

getHen()
  .then((hen) => getEgg(hen))
  .catch((error) => {
    return '❤';
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal));

/*
  getHen()
  .then(getEgg)
  .then(egg)
  .then(console.log;
  */
