// 화살표 함수에는 없는 것 : 함수 이름, this, arguments

const myFunc = function () {
  console.log(arguments);
};

// arrow func 에는 arguments가 존재하지 않음
function outter() {
  // 따라서 화살표 함수를 감싸는 함수 선언형 outter()를 만들어 감싸준다.
  const myFunc2 = () => {
    console.log(arguments);
  };
  myFunc2();
}

// spread 연산자를 사용하여 arguments를 받아온다.
const myFunc3 = (...args) => {
  console.log(args);
};

var myObj = {
  count: 3,
  setCounter: function () {
    console.log(this.count);
  },
};

myObj.setCounter();

// case 1

myFunc(1, 2, 3, 4);

// arrow func 에는 arguments가 없기 때문에 함수 선언식으로 감싸주어 이를 호출한다. outer(5,6,7,8);
// myFunc2(5, 6, 7, 8);

// case 2

outter(5, 6, 7, 8);

// case 3

myFunc3(9, 10, 11, 12);
