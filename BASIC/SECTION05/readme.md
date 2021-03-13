# SECTION 5, 오브젝트

## 🌟 프로퍼티(Property)

Propery

- {name: value} 형태

name에 프로퍼티 이름/키를 작성

- 따옴표 작성 생략

```js
var book = {
  title: '책',
  point: {
    ten: 10,
    bonus: 200,
    promotion: function () {},
  },
};
```

value에 JS에서 지원하는 타입 작성

- {a: 123, b: "ABC", c: true, d: {}}
- {book: function(){...}}

오브젝트(Object)를 객체라고 부르지만

- 뉘앙스가 다르며, 강좌에서는 오브젝트로 표기
- 오브젝트와 객체 구분이 필요할 때, 별도 표기

🌟 객체는 실체가 없이 개념만으로 통용될 수 있음 <br/>
🌟 하지만, 오브젝트는 반드시 프로퍼티를 가지고 있음

### ！🌟 프로퍼티 추가, 변경 🌟！

오브젝트에 프로퍼티 추가, 변경 <br>

1. var obj = {};
2. obj.abc = 123;
3. obj 오브젝트에 프로퍼티 이름으로 abc가 없으면 abc:123이 추가되고, abc가 있으면 프로퍼티 값이 123으로 변경됨

작성 방법 <br>

1. 점(.)과 프로퍼티 이름 사용

```js
var book = {};
book.title = "JS BOOK";
book.price = 18900;

console.log(book);
...
>>>
{ title: JS BOOK, price: 18900 }

프로퍼티 형식으로 담겨진 결과물을 확인할 수 있다.
```

<hr/>

### object 프로퍼티 열거

오브젝트에서 프로퍼티 값 추출

```js
var obj = {book : "책"};
var value = obj.book;

console.log(value);

...
>>>
책
```

obj 오브젝트에 프로퍼티 이름인

- book이 있으면 프로퍼티 값 반환
- book이 없으면 undefined 반환

```js
var obj = {book : "책"};
var value = obj.price;

console.log(value);

...
>>>
undefined
```

### for ~ in 문

오브젝트에서 프로퍼티를 열거(처음부터 끝까지 모두 읽음)<br/>

<br/>

형태:<br/>
for(변수 in 오브젝트) 문장; <br/>
for(표현식 in 오브젝트) 문장; <br/>

```js
var sports = {
  soccer: "축구",
  baseball: "야구",
};
for (var item in sports){
  log(item);            // {key : value} 중 key에 접근
  log(sports[item]);    // {key : value} 중 value에 접근
}

...
>>>
soccer
축구
baseball
야구
```

<br/>

for (var item in sports){...}

- 프로퍼티 이름이 item에 설정
- sports[item]으로 프로퍼티 값을 구함
- 프로퍼티를 작성한 순서대로 읽혀진다는 것을 보장하지 않음

<a href="../SECTION06/readme.md">다음 섹션으로</a>
