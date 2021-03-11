## Arrow Function

Arrow의 사전적 의미

- 화살, 화살표 =>
- 강좌에서는 화살표 함수로 표기

코드 형태

- (param) => { ... }

```js

const multiple = function (a, b) {
  return a * b;
};

const add = (a, b) => {
  return a + b;
};

var result2 = multiple(4, 5);
var result = add(1, 2);

console.log(result2);
console.log(result);
>>
20
3
```

<br/>
function(){...}의 축약 형태이지만 고려할 사항도 있음
- this 참조가 다름

### 함수 블록 사용

함수 블록과 return 작성 생략

```js
const total = (one, two) => one + two;

// 함수 블록 {}과 return 을 생략한 형태로 { return one + two }의 결과값과 같습니다
```

함수 블록 {}만 작성한 형태

```js
case 1:
const total = (one) => {};
console.log(total(1));

>>>
undefined

// why? 리턴문을 작성하지 않았기때문, return 문을 작성하지 않더라도 리턴될 값을 넣어주면 undefined가 아님

case 2:
const total = (one) => one;
console.log(total(1));

>>>
1
```

### 파라미터 사용

파라미터가 하나일 때

```js
const get = param => param + 20;
console.log(get(10));

>>>
30
```

파라미터가 없으면 소괄호만 작성

```js
const get = () => 10 + 20;
console.log(get());

>>>
30
```

<hr/>

## 화살표 함수 구조

function을 => (화살표)로 표기하는 것이 전부가 아님<br/>
화살표 함수는 일반 함수와 구조가 다름

- 화살표 함수 나름의 특징이 있음

```js
{
  debugger;
  ('use strict');

  const book = function () {
    return 100;
  };

  debugger;

  const point = () => 100;

  debugger;
}

/*
1. point 함수를 전개하면 prototype과 constructor가 없습니다.
2. prototype에 메소드를 연결하여 확장할 수 없습니다.
3. prototype이 없으므로 그만큼 가볍습니다.
4. 생성자 함수가 없으므로, new 연산자로 인스턴스를 생성할 수 없습니다.
5. 단독으로 가볍게 쓰기 위함입니다.
6. 이것이 화살표 함수의 특징이며 용도입니다.
*/
```

### arguments 사용 불가

arguments를 사용할 수 없음 <br/>
arguments 대신에 rest 파라미터 사용

<hr/>

## 화살표 함수와 this

strict 모드에서 함수를 호출할 때

- 함수 앞에 오브젝트 작성은 필수

```js
'use strict';
function book() {
  function getPoint() {
    log(this);
  }
  getPoint();
}

window.book();

/*
1. strict 모드에서는 window.book()처럼 호출하는 함수(book()) 앞에 오브젝트를 작성해야 합니다
2. 이렇게 하지 않으면 book() 함수 안에서 this 값이 undefined 입니다
3. 또한, getPoint()처럼 window를 앞에 작성하지 않으면 getPoint()안에서 this 값이 undefined 입니다.
```

- 화살표 함수로 해결

```js
'use strict';
var point = 100;  // 글로벌 오브젝트로 선언하여, window 오브젝트에 저장및 공유됨
function sports() {
  const getPoint = () => {
    log(this.point);
  };
  getPoint();
}
window.sports();

>>>
100

/*
1. 화살표 함수로 작성하면 getPoint()로 호출할 수 있습니다.
2. 또한, getPoint() 화살표 함수 안에서 this가 undefined가 아니라 글로벌(window) 오브젝트를 참조합니다.
3. var point = 100; 을 작성했으므로 100이 출력됩니다.
*/
```

### this 가 정적 스코프 참주

화살표 함수에서 정적 스코프의 this를 사용<br/>
정적(Lexical) 스코프란

- 엔진이 해석할 때, 화살표 함수를 만나면
- function 오브젝트를 생성하고
- 화살표 함수가 속한 스코프를 생성한 오브젝트에 바인딩

오브젝트에 바인딩된 스코프의 this를

- 화살표 함수에서 this로 사용

```js
var title = '책';
const book = {
  show: () => console.log(this.title);
}
book.show();

/*
1. 위에서 부터 아래로 읽음
2. book.show() 함수 호출
3. book에 들어있는 함수 show가 function 오브젝트를 생성하고
4. 화살표 함수가 속한 스코프 [ book.show() ]를 생성한 오브젝트에 바인딩

-- 멈춤
*/
```

### 화살표 함수 특징

function 대신 =>를 사용, 함수 표현식 형태

- <b>prototype이 없으므로 함수가 가볍다</b>
- constructor가 없으므로 new 연산자로 인스턴스를 생성할 수 없다.

화살표 함수에 this가 없다.

- 화살표 함수로 Function 오브젝트를 생성할 때
- 정적으로 화살표 함수가 속한 스코프의 this를 화살표 함수에 바인딩한다.
- 바인딩된 this 참조가 바뀌지 않으며 화살표 함수에서 this로 사용한다.
- 일반 함수는 call(), apply(), bind() 등으로 바꿀 수 있다.

메소드보다 함수로 사용하는 것이 효율성이 높다.

- 메소드: 생성자 함수( new )에 의해 생성된 인스턴스가 prototype에게 제공받는 함수
- 함수: 오브젝트(String, Number, Global , ...)에 속해 있는 단독의 함수
