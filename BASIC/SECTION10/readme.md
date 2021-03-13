## 🌟 Function 오브젝트

### 프로퍼티 리스트

|        이름        |                 개요                 |
| :----------------: | :----------------------------------: |
|      Function      |
|     Function()     |            인스턴스 생성             |
|   new Function()   |            인스턴스 생성             |
| Function 프로퍼티  |                                      |
|       length       |          함수의 파라미터 수          |
| Function.prototype |
|    constructor     |                생성자                |
|       call()       |              함수 호출               |
|      apply()       |  함수 호출, 배열을 파라미터로 사용   |
|     toString()     |         함수를 문자열로 반환         |
|       bind()       | 새로운 오브젝트를 생성하고 함수 실행 |

### new Function()

### Function()

<hr/>

## 🌟 함수 생명 주기

### 함수 분류

function 분류

- 빌트인 Function 오브젝트
- function 오브젝트
- function 인스턴스 (new 연산자 사용)

function 오브젝트 생성 방법

- function 키워드 사용
- function getBook(title){return title};

JS 엔진이 function 키워드를 만나면

- 이름이 getBook인 function 오브젝트 생성

### 함수 생명 주기 (function life cycle)

함수 호출

- getBook("JS BOOK");
- 함수를 호출하면서 파라미터 값을 넘겨 줌

함수 코드 실행

- JS 엔진 컨트롤이 함수의 처음으로 이동
- 파라미터 이름에 넘겨 받은 파라미터 값 매핑
- 함수 코드 실행
- return 작서엥 관계없이 반환 값을 갖고 함수를 호출한 곳으로 돌아 감

```js
function add(one, two) {
  return one + two;
}

var result = add(10, 20);
console.log(result);

>>> 30
```

<hr/>

## 🌟 함수 형태

함수 선언문 (Function Declaration)

```js
function getBook(book){...}
```

- function 키워드, 함수 이름, 블록{ ... }은 작성 필수
- 나머지 파라미터, 함수 코드는 선택
- 함수 이름은 생성한 function 오브젝트의 이름으로 사용

함수 표현식(Function Expression)

```js
 const getBook = function(book){...}
```

```js
var getBook = function (title) {
  return title;
};
```

<br/>

- function 오브젝트를 생성하여 변수에 할당
- 변수 이름이 function 오브젝트 이름이 됨
  <br/>

식별자 위치의 함수 이름은 생략 가능

```js
var name = function abc(){
    ...
}

// 위 코드에서 abc가 식별자 위치의 함수 이름입니다.
```

<a href="https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/" target="_blank">함수 표현식과 함수 선언식 차이점 알아보기</a>

<hr/>

## 🌟 함수 호출

### call()

```js
function getTotal(one, two) {
  return one + two;
}

var result = getTotal.call(this, 10, 20);

console.log(result);
>>> 30
```

<br/>

첫 번째 파라미터인 (this)로 참조할 오브젝트를 표시

- 일반적으로 this를 사용하며 다른 오브젝트로도 작성 가능

```js
var value = { one: 10, two: 20 };

function getTotal() {
  return this.one + this.two;
}

var result = getTotal.call(value);

console.log(result);

>>> 30
```

<hr/>

### apply()

```js
function getTotal(one, two) {
  return one + two;
}

var result = getTotal.apply(this, [10, 20]);

console.log(result);

>>> 30
```

<br/>
파라미터 수가 유동적일 때 사용<br/>
두 번째 파라미터에 배열 사용<br/>

#### call(), apply() 부가적인 목적?

첫 번째 파라미터에 호출된 함수에서 this로 참조할 오브젝트 사용

### toString()

### bind()

```js

const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX());
// The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

>>>
undefined
42


```

<p>
bind() 함수는 새로운 바인딩한 함수를 만듭니다. 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ECMAScript 2015에서 말하는 특이 함수 객체입니다. 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다.
</p>

```js
this.x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  },
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// module과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x와
// module의 속성 x를 혼동할 수 있음
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

<hr/>

## Argument 오브젝트

함수가 호출되어 함수 안으로 이동했을 때 arguments 이름으로 생성되는 오브젝트<br/>
함수를 호출한 곳에서 넘겨 준 값을 순서대로 작성<br/>
호출된 함수에 파라미터를 작성한 경우 호출된 함수의 파라미터에 값을 설정하고 아규먼트 오브젝트에도 저장

```js
function getTotal(one) {
  return one + arguments[1] + arguments[2];
}

var result = getTotal(10, 20, 30);

console.log(result);
>>> 60

why?
/*
파라미터를 1개만 받는 함수여도, arguments 배열의 인덱스를 통해, 함수가 받는 파라미가 아닌
다른 파라미터도 저장 및 반환할 수 있습니다.
*/
```

```js
case : 심화;

function getTotal(one){
    return one + arguments[1] + arguments[2];
}

var result = getTotal.apply(this, [10,20,30]);
console.log(result);
>>> 60
```

<hr/>

<a href="../SECTION11/readme.md">다음 섹션으로</a>

```

```
