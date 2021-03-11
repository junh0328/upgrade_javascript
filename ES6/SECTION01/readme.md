## let, const 변수

### 변수 구분

로컬(지역)변수, 글로벌(전역)변수 <br/>
변수를 구분하는 이유는?

- 기능과 목적이 다르기 때문

글로벌 변수의 기능, 목적

- 다른 js 파일에서 변수의 값을 공유
- 파일에서 공통 변수 개념으로 사용
- 의도는 좋으나 처리 속도가 떨어짐

로컬 변수의 기능, 목적

- 빠르게 식별자를 해결하기 위해 가까운 스코프의 변수를 사용하려는 것
- 스코프란 범위라는 뜻으로, 중괄호(=블럭) {...} 내부에 선언된 식(코드)를 말한다.

```js
// "use strict";
value = 100;
function point() {
  value = 300;
  console.log('함수:', value);
}
point();

>>> 함수: 300
/*
글로벌 변수로 값을 할당한 value는 다른 파일에서도 이 변수를 사용할 수 있기 때문에,
함수 안에서 글로벌 변수의 값을 바꾸는 것은 좋지 않다.
but, 작동은 됨
*/
```

```js
'use strict';

debugger;

function point() {
  try {
    value = 300;
  } catch (e) {
    console.error(e);
    console.log('글로벌 변수 사용 불가');
  }
}
point();

>>> value is not defined;
>>> 글로벌 변수 사용 불가

/*
따라서 규칙을 지켜주기 위해 'use strict'를 사용한다.
결과는 적으로 글로벌 변수를 함수 안에서 값을 바꿔 사용하지 말라는 내용과 함께
에러가 발생하게 된다.
*/
```

> ES6 부터는 이 'use strict'가 default environment이다
> 'use strict'를 선언하고 코드를 작성하는 것이 안정적일 것이다

<hr/>

## 블록 스코프

블록 기준

- 중괄호 {코드}
- function name(){코드}
- if(a===1){코드}

블록 안과 밖이 스코프가 다름

- 변수이름이 같아도 값이 대체되지 않음

스코프에 같은 이름 사용 불가

### function 블록 스코프

function 안과 밖에 같은 이름의 let 변수 선언이 가능하다

- 스코프가 다르기 때문

```js
let sports = '축구';
if (sports) {
  let sports = '농구';  // 블록 {...}, 안에서 생성된 변수는 밖의 변수명과 같아도 각각 존재하게 된다
  console.log('안: ', sports);
}
console.log('밖: ', sports);

>>>
안 : 농구
밖 : 축구
```

function 밖의 let 변수를

- function 안에서 사용 가능(클로저)

```js
let sports = '축구';
function show() {
  console.log(sports);
}
show();

>>>
축구
```

### try-catch 블록 스코프

try 블록 { } 기준으로 안과 밖에 같은 이름의 let 변수 선언이 가능 <br/>
하지만, catch() 문에서는 try 밖의 변수 사용 가능 <br/>

```js
let sports = '축구';
try {
  let sports = '농구';
  console.log('안: ', sports);
  abc = error;
} catch (e) {
  console.log('catch: ', sports);  // catch() 문에서는 try 밖의 변수 사용 가능
}
console.log('밖: ', sports);

>>>
안 : 농구
catch : 축구
밖 : 축구
```

<hr/>

## let 변수 개요

```js
let book = '책';
if(book){
  let book = "책방";
  console.log(book);    >> 책방  // let 변수는 블록 스코프에 따라 값이 각각 존재한다.
}
console.log(book);      >> 책

/*
var 변수였다면, 해당 값을 덮어 씌워서 마지막에 할당된 값 ("책방")이 출력됐을 것
이것이 블록 스코프를 가지는 let 변수의 특징이다.
*/
```

- 블록 스코프를 가진 변수
- 변수가 선언된 블록이 스코프

스코프 적용 기준

- 블록{}, 문, 표현식

블록{}안과 밖이 스코프가 다름

- 변수 이름이 같아도 값이 대체되지 않음

### let 변수 선언

값을 할당하지 않고 변수만 선언할 수 있습니다. <Br/>
초깃값으로 undefined가 할당됩니다. <br/>
콤마로 구분하여 다수를 선언할 수 있습니다.

```js
let book;
let sport1, sport2;
```

### let 변수와 this

글로벌 오브젝트에서 let 변수를 this로 참조 불가<br/>

```js
var music = '음악';
let sports = '축구';

console.log(this.music, this.sports);

>>>
음악, undefined

/*
let 변수는 글로벌 오브젝트로 선언해도 window 오브젝트에 설정되지 않습니다.

var 변수는 선언되기 때문에 this 로 참조하여 음악이라는 값을 가져올 수 있지만,
let 변수는 선언되지 않기 때문에 값을 할당하지 않았다는 undefined가 출력됩니다.
*/
```

### 다수의 js 파일 사용 정리

글로벌 오브젝트에 작성

```js
var globalVar = 'var 변수'; // 글로벌 오브젝트에 설정되어 window 오브젝트에 공유
let globalLet = 'let 변수'; // Script에 설정되어 공유 (window 오브젝트에 저장되지는 않지만 값을 공유한다는 측면은 같음)

{
  let globalBlock = 'block 변수'; // 블록 스코프에 작성되면 공유하지 않고, 블록 내부에서만 쓸 수 있는 변수로 만들어짐 (local 변수)
}
```

- var 변수 : window 오브젝트에 설정, 공유
- let 변수 : Script에 설정, 공유

  > window.sports = {...} 처럼 의도적으로 작성하지 않아도 됨

- { let 변수 } : Block {}에 설정, 공유하지 않음
  > 글로벌 오브젝트에서만 사용하는 로컬 변수로 사용

함수에 작성

```js
function showLocal() {
  var localVar = 'var 변수';
  let localLet = 'let 변수';
  {
    let blockLet = 'block 변수';
    // 블록 스코프 안에서는 위에 선언한 localVar, localLet을 사용할 수 있지만, 위에서는 사용 불가
    // why? 블록 내부에서만 선언된 지역(local) 변수이기 때문
  }
}
```

- var 변수, let 변수 : Local;
- { let 변수} : Block;

<hr/>

## 호이스팅

ES5의 실행 콘텍스트 처리 순서

- 1. 함수 선언문 설정
- 2. 변수 이름을 바인딩 변숫값은 undefined
- 3. 소스코드 실행

```js
console.log('music 변수: ', music);
var music = '음악';

>>>
music 변수 : undefined
// music 이라는 변수를 사용해서 값을 구할 수는 있지만, 실제로 값이 함수보다 늦게 선언되었기 때문에 undefined가 나온다.
// 이처럼 변수가 코드보다 밑에서 선언되더라도 변수값은 비어있지만 끌어다가 사용할 수 있는 것을 호이스팅이라고 합니다

/*
1. music 이라는 변수가 더 늦게 선언되었습니다.
2. 변수가 아래에 있지만 music 변수를 통해 값을 출력할 수는 있습니다. (실제로는 아직 변수가 밑에 있어서 할당되지 않음)
3. 아래에 선언된 변수 music을 위의 코드 console에서 땡겨 실행하는 것을 '호이스팅'이라고 합니다.
4. music이라는 변수의 식별자를 해결하지 못하면 에러가 발생합니다.
*/
```

let 변수는 호이스팅되지 않음

- 즉, let 변수 앞에서 변수 사용 불가

```js
try {
  console.log(sports);
} catch (e) {
  console.error(e);
  console.log('호이스팅 불가');
}
let sports = '축구';

>>>
ReferenceError: Cannot access 'sports' before initialization
호이스팅 불가

// sports 변수가 초기화 되기 전에 접근할 수 없습니다
```

let 변수를 인식하는 시점

```js
'use strict';
debugger;

console.log('변수 호출 :', globalVar);
debugger;

var globalVar = 'var 변수';
debugger;

try {
  console.log(globalLet);
} catch (e) {
  console.error(e);
  console.log('globalLet 인식하지 못함');
}

let globalLet = 'let 변수';
debugger;

console.log(globalLet);
debugger;

>>>
변수 호출 : undefined
Cannot access 'globalLet' before initialization
globalLet 인식하지 못함
let 변수

/*
var 로 선언한 변수는 선언문이 해당 변수를 부르는 메소드보다 밑에 있더라도 호이스팅에 의해 불러올 수 있다.(값은 undefined)
let 으로 선언한 변수는 호이스팅이 되지 않기 때문에 아예 인식을 하지못하기 때문에 반드시 메소드보다 위에 작성해줘야 한다.
*/
```

<hr/>

## const 변수

값을 바꿀 수 없는 변수 선언<br/>
name1 에 변수 이름 작성, 식별자로 사용

```js
const sports = '축구';
try {
  sports = '농구';
} catch (e) {
  console.error(e);
  console.log('const 할당 불가');
}

>>>
Assignment to constant variable.
const 할당 불가
```

value1, value2에 초깃값 작성

- 반드시 값을 작성, 변수 선언만 불가
- 표현식 작성 가능, 평가 결과 사용

JS에서 상수는 대문자 사용이 관례<br/>

```js
const bonus = 100;
const POINT = 200;
```

우선 let이 아닌 const 사용 여부를 검토

- const > let > var 순서로 사용하자

### const 변수

- const 변수 전체를 바꿀 수는 없지만,

  > Object의 프로퍼티 값을 바꿀 수 있음

  ```js
  const book = { tilte: '책' };
  try {
    book = { title: '음악 책' };    // 프로퍼티 전체를 바꿀 수는 없습니다.
  } catch {
    console.log('const 전체 할당 불가');
  }
  book.title = '미술 책';           // 프로퍼티(ket: value)의 일부인 값(value)는 바꿀 수 있습니다. (한개 씩만 가능)
  console.log(book.title);

  >>>
  const 전체 할당 불가
  미술 책
  ```

  > 배열의 엘리먼트 값도 바꿀 수 있음

  ```js
  const book = ['책'];
  try {
    book = ['음악 책'];
  } catch (e) {
    console.log('const 전체 할당 불가');
  }
  book[0] = '미술 책';
  console.log(book[0]);

  >>>
  const 전체 할당 불가
  미술 책
  ```
