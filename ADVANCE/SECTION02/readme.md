## Function 오브젝트

### 생각의 전환

함수가 호출되면 엔진은

- 함수의 변수와 함수를 {name : value} 형태로 실행 환경을 설정하고 함수 코드를 실행합니다.

{name: value} 형태로 생각을 전환해야

- JS의 아키텍처와 메커니즘을 쉽게 이해할 수 있습니다.

function(){} 코드를 보면

- 함수의 변수와 함수가 {name: value} 형태로 연상되어야 합니다.
- 프로퍼티 관점으로 보아라

```js
function book() {
  var title = 'JS BOOk';
  return title;
}

var result = book();
console.log(result);

>>>
JS BOOK
/*
{title : 'JS BOOK'}
{return : title}
*/
```

<HR/>

## function 오브젝트 생성 과정

```js
sports = {
    prototype: {
        constructor: sports
        __proto__: {
        }
    }
}
```

1. function sports(){...} 형태에서 function 키워드를 만나면
2. Function 오브젝트를 생성하고
   > {sports: {...}}
   > sports는 function 오브젝트 이름
   > 오브젝트{...}에 프로퍼티가 없는 상태
   > sports() 함수가 호출되어야 안의 코드를 실행하고 오브젝트를 채웁니다
3. sports 오브젝트에 prototype 오브젝트 첨부
4. prototype에 constructor(생상자) 프로퍼티 첨부
   > prototype.constructor가 sports 오브젝트 참조
5. prototype에 `__proto__` 오브젝트 첨부

```js
sports = {
  arguments: {},
  caller: {},
  length: 0,
  name: 'sports',
  prototype: {
    constructor: sports,
    __proto__: Object.prototype,
    //6. prototype.`__proto__`에 첨부, , Object 오브젝트의 프로토타입에 빌트인 된 6개의 메소드들은 여기에 들어있음
  },
  __proto__: Function.prototype,
  /*
  7. sports 오브젝트에 __proto__ 빌트인 Function 오브젝트의 프로토타입에 연결된 3개의 메소드 (bind, apply, call)는 여기에 들어 있음

  */
};
```

6. 빌트인 Object.prototype의 메소드로
   - Object 인스턴스를 생성하여
   - prototype.`__proto__`에 첨부
7. sports 오브젝트에 `__proto__` 오브젝트 첨부
   - sports.`__proto__` 구조가 됩니다.
8. sports 오브젝트가 function 이기 때문에, Function의 프로토타입이 가지는 빌트인 메소드를 생성했지만
   - Array라면 Array의 인스턴스가 연결되고
   - String이라면 String 인스턴스가 연결됩니다.
     > 오브젝트의 타입에 따라 연결되는 인스턴스가 달라집니다.

<hr/>

## JS 엔진 해석 방법

### 엔진 해석 순서

자바스크립트는 스크립팅 언어입니다

- 스크립팅 언어는 작성된 코드를 위에서부터 한 줄씩 해석하고 실행
- 하지만, 자바스크립트는 조금 차이가 있다.

중간에 있는 코드가 먼저 해석될 수도 있음<br/>
첫 번째, 함수 선언문을 작성한 순서대로 해석<br/>

> function sports(){...};

두 번째, 표현식을 순서대로 해석<br/>

> var sports = function(){...};

```js
function book() {
  debugger;
  log(title);
  log(readBook);
  log(getBook);

  var title = 'JS BOOK';
  function getBook() {
    return title;
  }
  var readBook = function () {};
  getBook();
}

book();

>>>
undefined
undefined
function getBook(){return title};

/*
book() 함수를 호출 했을 때,

1. 함수 선언문 해석 (1바퀴)
    - function getBook(){};
2. 변수 초기화      (2바퀴)
    - var title = undefined;
    - var readBook = undefined;
3. 코드 실행        (3바퀴)
    - var title = "JS BOOk";
    - var readBook = function(){};
    - getBook();
*/
```

### 함수 선언문 해석

1. 마지막 줄에서 book()함수를 호출합니다.
2. 엔진 제어가 book 함수의 첫 번쨰 줄로 이동합니다.
3. 함수 안에서 선언문을 찾습니다.
4. function getBook(){}이 함수 선언문이므로 function 오브젝트를 생성합니다.
5. 더 이상 함수 선언문이 없으므로 함수의 첫 번째 줄로 이동합니다.

### 변수 초기화

6. debugger를 실행하지 않습니다.
7. var title = "JS BOOK";

- title 변수에 undefined를 할당합니다

8. function getBook(){}은 초기화 했으므로 초기화하지 않습니다.
9. var readBook = function(){};

- readBook 변수에 undefined를 할당합니다.
- 함수 표현식은 변수를 선언만 합니다.

10. 여기까지가 초기화 단계이며 다시 함수의 첫 번째 줄로 이동합니다.

### 코드 실행

11. var title ="JS BOOk";

- title 변수에 "JS BOOk"을 할당합니다.

12. function getBook(){return title};

- 실행이 아닌 선언이므로 다음 줄로 이동

13. var readBook = function(){};

- function 오브젝트를 생성하여 readBook 변수에 할당
- readBook이 function 오브젝트가 되므로 이제 readBook 함수를 호출할 수 있습니다.

14. getBook() 함수를 호출합니다.

<hr/>

## 호이스팅

함수 선언문은 초기화 단계에서 function 오브젝트를 생성하므로 어디에서도 함수를 호출할 수 있습니다. <br/>
함수 앞에서 함수를 호출하는 것을 호이스팅이라고 합니다.

```js
var result = book();
console.log(result);

function book() {
  return '호이스팅';
}

>>>
호이스팅

/*
JS 엔진은 함수 선언문을 제일 위로 올려 해석하기 때문에 코드 작성을 밑에 해도 오류가 나지 않습니다.
*/
```

초기화 단계에서 값이 있으면 초기화하지 않습니다.

```js
var result = book();
log(result);

function book() {
  return '호이스팅';
}

book = function () {
  return '함수 표현식';
};

>>>
호이스팅
// 오브젝트 안에 정상적인 값 (호이스팅)이 있기 때문에 초기화하지 않았습니다.
```
