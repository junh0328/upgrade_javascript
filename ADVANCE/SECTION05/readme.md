## this

### this 개요

키워드 <br/>

`obj.name()` 형태로 호출한

- 함수(메소드)에서 this로 인스턴스(오브젝트)를 참조

실행 콘텍스트의 this 바인딩 컴포넌트에 바인딩

### this와 글로벌 오브젝트

글로벌 오브젝트에서 this는 글로벌 오브젝트 참조 <br/>

this와 window 오브젝트

> window는 JS에서 만든 것이 아니며 글로벌 오브젝트의 스코프도 아님
> window와 글로벌 오브젝트를 같은 선상에서 사용

<br/>

글로벌 오브젝트에 코드 작성

```js
case 1:
window.onload = function () {
  // 이 안이 아니라 밖에 코드를 작성
};

// function과 돌일한 스코프를 가지는 이 부분에 작성
```

1. this가 window 참조

```js
console.log(this === window);
// 값과 타입이 모두 같다는 뜻
>>> true
```

2. this가 글로벌 변수 사용

```js
var value = 100;          // value는 글로벌 변수
console.log(this.value);  // this를 통해 글로벌 변수 value에 접근함
>>>
100
```

3. window로 글로벌 변수 사용

```js
var value = 100;
console.log(window.value);

>>>
100

/*
window 오브젝트가 글로벌 오브젝트를 참조하므로, this와 같은 형태로 사용된다.
*/
```

4. this.value = 100; 형태로 값 할당

```js
this.value = 100;
console.log(window.value);
>>>
100
/*
window 오브젝트와 같이 다른 오브젝트를 마치 내것처럼 사용하는 개념을 'Host 오브젝트'라고 하비다.
DOM 오브젝트도 Host 오브젝트입니다.
*/
```

<hr/>

window.onload function 안에 코드를 작성

```js
case 2:
window.onload = function () {
  // function과 돌일한 스코프를 가지는 이 부분에 작성
};
```

1. this가 window 참조

```js
window.onload = function () {     // window.onload 에서 window를 함수 내부에서 참조 가능하다는 의미
  console.log(this === window);
};

>>>
true

/*
onload 도 function 오브젝트이므로, onload 앞에 작성한 window를 this로 참조할 수 있다.
*/
```

2. this로 지역 변수 사용

```js
window.onload = function () {
  var value = 100;
  console.log(this.value);    // console.log(value) 와 같이 onload의 지역변수인 value만 선언했다면 값이 나왔을 것
};                            // 하지만 this를 붙인 관계로 window 오브젝트를 참조하였기 때문에 식 밖의 value가 선언되지 않았으므로, undefined 반환

>>>
undefined
/*
여기서 this는 window 오브젝트를 참조하고,
value는 onload 함수의 지역변수이다.
만약
*/
```

3. this.value = 100; 형태로 값 할당

```js
window.onload = function () {
  this.value = 100;
  console.log(this.value);
};

>>>
100
/*
this.value 로 작성하였으므로 이 this가 window 오브젝트를 참조하여, 100을 출력할 수 있었다.
*/
```

<h3>함수가 되든 이벤트 핸들러 함수가 되든, 함수의 앞에 작성한 오브젝트를 this 객체가 참조한다. </h3>

<hr/>

<h2>this 참조 오브젝트</h2>

```js
var book = {
  point: 100,
  member: {
    point: 200,
    get: function () { // get() 내부의 함수에서 사용되는 this는 get() 함수의 바로 위인 member 오브젝트를 참조한다.
      console.log(this === book.member);
      console.log(this.point);
    },
  },
};
book.member.get();

>>>
true
200

/*
🌟 book.member.get() : get()함수는 this 참조를 member 오브젝트 내의 프로퍼티들을 참조한다. 🌟
get() 내부의 함수에서 사용되는 this는 get() 함수의 자신을 호출한 바로 앞의 오브젝트 (여기서는 member)를 참조한다.
따라서 member 스코프 내에 존재하는 point에 접근하여 값을 반환할 수 있게 되었다.
*/
```

<h3> 정리 시간</h3>

```js
function getTitle() {
  console.log('HTML BOOK');
}
var book = function () {
  function getTitlte() {
    console.log('JS BOOK');
  }
  this.getTitle();
  getTitle();
};
book();

>>>
HTML BOOK
JS BOOK

/*
1. book() 호출, book() 함수에 오브젝트가 없기 때문에 this는 window를 참조
2. this.getTitle() 호출시, window.getTitle()과 동일하기 때문에 >> HTML BOOK 출력
3. getTilte() 호출시, 현재 실행 영역에서 선언적 환경 레코드가 있는 function getTilte()를 먼저 호출 >> JS BOOK 출력
*/
```

<hr/>

<hr/>
<a href="../SECTION06/readme.md">다음으로 가기</a>
