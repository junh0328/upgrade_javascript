## 🌟 자바스크립트 특징

### 자바스크립트 특징

자바스크립트는 스크립팅 언어입니다<br/>
스크립팅 언어의 특징

- 소스 파일의 코드를 사전에 컴파일하여 실행 파일을 만들어 놓지 않고
- 사용하는 시점에 컴파일하고 실행

```js
var value = 123;
var book = function () {
  // function 키워드를 만나면 오브젝트를 생성
  // 안의 코드는 컴파일하지 않음
  var point = 456;
  var getPoint = function () {
    return point;
  };
  getPoint();
};
book(); // book() 메소드를 호출할 때 해당 function을 컴파일하기 시작함
```

<br/>
컴파일 순서
- 소스 파일의 위에서부터 아래로 컴파일
- function 키워드를 만나면 function 오브젝트를 생성

### JS와 객체지향

객체 지향 프로그래밍 언어

- OOP: Object Oriented Programming

자바스크립트는 객체 지향 언어입니다 <br/>

자바스크립트의 OOP 구현

- 다른 언어의 OOP 구현과 차이가 있음
- JS의 특징이 반영된 OOP 구현

### OOP의 객체

객체(Object)

- 개념적 접근 (실체 x)
- 행위와 속성으로 구성
- 행위 : 먹다, 마시다
- 속성: 밥, 사이다

  > 객체를 형성화하면

  - 행위가 메소드가 되고
  - 속성이 프로퍼티가 됩니다.
  - 객체가 클래스로 됩니다.

  > 클래스 Class

  - 행위와 속성을 정의한 것으로
  - 인스턴스로 생성하여 프로그램에서 사용
  - 클래스는 new 연산자(생성자)를 사용하여 인스턴스를 생성해야함

<hr/>

## 자바스크립 객체 형태

### JS 객체 형태

1. Object 오브젝트 형태

```js
var book = { read: function(params){ ... }}
```

- 인스턴스를 생성할 수 없음

2.  Function 오브젝트 형태

```js
function readBook(params){...};
```

- 객체이지만, OOP의 객체라고 하기에는 부족

### prototype

JS의 OOP 구현 방법

- prototype에 메소드 연결

```js
var Book = function () {};
// 대문자인 것은 프로토 타입에 연결하여 쓰겠다는 시멘틱적 표현입니다.

Book.prototype.getBook = function () {
  return 'JS북';
};
```

- 다른 언어는 class 안에 메소드와 프로퍼티를 작성하지만
- 자바스크립트는 prototype에 메소드를 연결하여 작성합니다.
- ES6에서는 class에 메소드를 작성합니다.
- 하지만, JS 엔진 내부에서 prototype에 연결합니다.

```js
class Book {
  constructor(title) {
    this.title = title;
  }
  getBook() {
    return this.title;
  }
}
```

<hr/>

## 자바스크립트 인스턴스

### 인스턴스

- class를 new 연산자로 생성한 것<br/>
- ES5에는 클래스가 없지만, 프로토타입으로 연결된 것이 있다면 class로 봅니다.<br/>

### 인스턴스 목적

- Class에 작성된 메소드 사용
- 인스턴스마다 프로퍼티 값을 유지
- 축구 경기에서 각 팀에 <b>적용되는 규칙</b>(= 메소드)은 같지만, <b>팀마다 점수</b>(= 프로퍼티의 값)는 다릅니다.

### new 연산자

인스턴스를 생성하여 반환

```js
var Book = function (point) {         // 2. 전달 받은 파라미터를 point 에 넣어줌 this.point = 200;
  this.point = point;
};

Book.prototype.getPoint = function () {
  return this.point + 100;            // 3. getPoint함수를 실행할 때, 전달받은 파라미터를 넘겨주고 반환
};

var oneInstance = new Book(200);      // 1. new 생성자를 이용해 인스턴스 생성 및 파라미터 전달(200)

console.log(oneInstace.getPoint());   // 4. 결과값 출력

>>>
300
```

<hr/>

## 메소드 형태

1. 데이터 형태

- 배열: ["book", "책", 123];

2. OOP의 일반적인 형태

```js
var data = ['book', '책', 123];
var obj = new Array(); // obj의 엘리먼트는 아직 선언하지 않았기 때문에 빈 배열 상태
var result = obj.concat(data);
console.log(result);

>>>
[book, 책, 123]
```

3. 자바스크립트 형태
   > 데이터로 메소드 호출

```js
var data = ['book', '책', 123];
var result = data.concat();
console.log(result);

>>>
[book, 책, 123]

/*
JS 엔진이 data 타입에 따라 오브젝트를 결정
data가 배열이므로 Array의 프로토타입인 concat() 호출, data를 파라미터로 넘겨줌
일반적인 OOP로는 말이 안됨 why? Array() 오브젝트를 통해 인스턴스를 만들어주지 않았기 때문
but JS 엔진에 의해 가능 (JS OOP의 특징)
*/
```

> 오브젝트 함수 호출

```js
var data = ['book', '책', 123];
var bookObj = {
  concat: function (data) {
    return data.concat();
  },
};

console.log(bookObj.concat(data));
>>>
[book, 책, 123]
```

> 인스턴스의 메소드 호출

```js
var data = ['book', '책', 123];
var Book = function (data) {
  this.data = data;
};
Book.prototype.concat = function () {
  return this.data.concat();
};
var oneInstance = new Book(data);
console.log(oneInstance.concat());
```
