# 모던 자바스크립트 Deep Dive

## 목차

- [24장 클로저](#24장-클로저)

## 24장 클로저

<p>클로저(closure)는 난해하기로 유명한 자바스크립트의 개념 중 하나로 자바스크립트에 관심이 있다면 한번쯤 들어보았을 것이다. 클로저는 실행 컨텍스트에 대한 지식이 있으면 이해하기 어려운 개념은 아니다. 클로저는 자바스크립트 고유의 개념이 아니다. <b>함수를 일급 객체로 취급하는 함수형 프로그래밍 언어</b>에서 사용되는 중요한 특성이다.</p>

### 일급 객체란?

<p>다음과 같은 조건을 만족하는 객체를 일급 객체라 한다.</p>

```
1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다
2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
3. 함수의 매개변수에 전달할 수 있다.
4. 함수의 반환 값으로 사용할 수 있다.
```

<a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#18%EC%9E%A5-%ED%95%A8%EC%88%98%EC%99%80-%EC%9D%BC%EA%B8%89-%EA%B0%9D%EC%B2%B4">일급 객체 다시 공부하기</a>

<p>
함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미이다. 객체는 값이므로 함수는 값과 동일하게 취급할 수 있다. 따라서 함수는 값을 사용할 수 있는 곳(변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)이라면 어디서든지 리터럴로 정의할 수 있으며 런타임에 함수 객체로 평가된다.

일급 객체로서 함수가 가지는 가장 큰 특징은 일반 객체와 같이 함수의 매개변수에 전달할 수 있으며, 함수의 반환값으로 사용할 수도 있다는 것이다. 이는 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나이다.

함수는 객체이지만 일반 객체와는 차이가 있다. 일반 객체는 호출할 수 없지만 함수 객체는 호출할 수 있다. 그리고 함수 객체는 일반 객체에는 없는 함수 고유의 프로퍼티를 소유한다.

</p>

<p>클로저는 자바스크립트 고유의 개념이 아니므로 클로저의 정의가 ECMAScript 사양에 등장하지 않는다. MDN에서는 클로저에 대해 다음과 같이 정의하고 있다.</p>

```
클로저는 함수와 그 함수가 선언된 렉시컬 환경과의 조합이다.
```

<p>정의에서 이해해야 할 핵심 키워드는 '함수가 선언된 렉시컬 환경'이다.</p>

```js
const x = 1;

function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x);
    // 10
    // why? 선언된 자신의 블록 스코프 { } 내부 부터 상위 스코프로 식별자 검색을 하므로, 외부 함수의 지역 변수인 const x = 10;의 변수 x를 참조할 수 있다.
  }

  innerFunc();
}

outerFunc();
```

<p>outerFunc 함수 내부에서 중첩 함수 innerFunc가 ①정의되고 ②호출되었다. 이때 중첩 함수인 innerFunc의 상위 스코프는 외부 함수 outerFunc의 스코프다. 따라서 중첩 함수 innerFunc 내부에서 자신을 포함하고 있는 외부 함수 outerFunc의 x 변수에 접근할 수 있다.</p>

<p>만약 innerFunc 함수가 outerFunc 함수의 내부에서 정의된 중첩 함수가 아니라면 innerFunc 함수를 outerFunc 함수 내부에서 호출한다 하더라도 outerFunc 함수의 변수에 접근할 수 없다.</p>

```js
const x = 1;

function outerFunc() {
  const x = 10;
  innerFunc();
}

function innerFunc() {
  console.log(x);
  // 1
  // 전역(global)에 정의된 변수 x , 함수 outerFunc, innerFunc 는 모두 같은 스코프에 존재한다.
  // 따라서 innerFunc 함수 내부에서 x를 찾는다면 상위 스코프인 글로벌(전역) 환경의 const x = 1;의 전역 변수 x를 참조한다.
}

outerFunc();
```

### 24.1 렉시컬 스코프

<p>이미 렉시컬 스코프에 대해서는 살펴보았다. 렉시컬 스코프를 실행 컨텍스트의 관점에서 다시 한번 살펴보자.</p>

```
자바스크립트 엔진은 함수를 어디서 호출했는지가 아니라 함수를 어디에 정의했는지에 따라 상위 스코프를 결정한다.
이를 렉시컬 스코프(정적 스코프)라 한다.
```

```js
const x = 1;

function foo() {
  const x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```

<details>
<summary>정답 보기</summary>

```
1
1
```

<p>앞서 <b>실행 컨텍스트</b>에서 살펴보았듯이 스코프의 실체는 실행 컨텍스트의 <b>렉시컬 환경 (식별자와 스코프를 관리하는 자료구조)</b>이다. 이 렉시컬 환경은 자신의 '외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)'를 통해 <b>상위 렉시컬 환경</b>과 연결된다. 이것이 바로 <b>스코프 체인</b>이다.</p>

</details>

<br/>

<img width="700" src="./images/28.jpg" alt="실행 컨텍스트와 렉시컬 환경">

<p>따라서 '함수의 상위 스코프를 결정한다'는 것은 '렉시컬 환경의 외부 렉시컬 환경에 대한 참조(상위 스코프)에 저장할 참조값을 결정한다는 것'과 같다.</p>

```
함수가 어디서 호출됐는지가 아닌 어디서 정의되었는지를 따지는 것이 렉시컬 스코프(정적 스코프)이다.
```

### 24.2 함수 객체의 내부 슬롯 `[[Environment]]`

<p>함수가 정의된 환경(위치)과 호출되는 환경(위치)는 다를 수 있다. 따라서 <b>렉시컬 스코프가 가능하려면 함수는 자신이 호출되는 환경과는 상관없이 자신이 정의된 환경, 즉 상위 스코프를 기억해야 한다.</b> 이를 위해 <b>함수는 자신의 내부 슬롯 [[Environment]]에 자신이 정의된 환경, 즉 상위 스코프의 참조를 저장한다.</b></p>

```
변수 > 참조
함수 > 호출
```

<p>다시 말해, 함수 정의<b>(function foo(){...})</b>가 평가되어 실행 컨텍스트에 함수 객체를 생성할 때 자신이 정의된 환경에 의해 결정된 상위 스코프를 참조를 함수 객체 자신의 내부 슬롯 [[Environment]]에 저장한다. 이때 자신의 내부 슬롯 [[Environment]]에 저장된 상위 스코프의 참조는 현재 실행 중인 실행 컨텍스트(running execution context)의 렉시컬 환경(스코프)을 가리킨다.</p>

<p>왜냐하면 ② <b>(함수 정의가 평가되어 함수 객체를 생성하는 시점)</b>은 함수가 정의된 환경, 즉 ① <b>(상위 함수가 평가 또는 실행되고 있는 시점)</b>이며, 이때 현재 실행 중인 실행 컨텍스트는 상위 함수의 실행 컨텍스트이기 때문이다.</p>

<p>렉시컬 스코프에서 살펴보았던 예제를 다시 한번 살펴보자.</p>

```js
const x = 1;

function foo() {
  const x = 10;

  // 상위 스코프는 함수 정의 환경(위치)에 따라 결정된다.
  // 함수 호출 위치와 상위 스코프는 아무런 관계가 없다.
  bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억한다.
function bar() {
  console.log(x);
}

foo(); // 1
bar(); // 1
```

<p>위 예제의 foo 함수 내부에서 bar 함수가 호출되어 실행 중인 시점의 실행 컨텍스트는 다음과 같다.</p>

<img width="700" src="./images/31_1.JPG" alt="함수 객체의 내부 슬롯 [[Environment]]에는 상위 스코프가 저장된다">

<p>foo 함수와 bar 함수는 모두 전역에서 함수 선언문으로 정의되었다. 따라서 foo 함수와 bar 함수는 모두 전역 코드가 평가되는 시점에 평가되어 함수 객체를 생성하고 전역 객체 (window)의 메서드가 된다. 이때 생성된 함수 객체의 내부 슬롯 [[Environment]]에는 함수 정의가 <b>평가</b>된 시점, 즉 전역 코드 평가 시점에 실행 중인 실행 컨텍스트의 렉시컬 환경인 <b>전역 렉시컬 환경의 참조가 저장된다.</b> 함수가 호출되면 함수 내부로 코드의 제어권이 이동한다. 그리고 함수 코드를 평가하기 시작한다.</p>

<p>이때 함수 렉시컬 환경의 구성 요소인 외부 렉시컬 환경에 대한 참조(Outer Lexical Environment Reference)에는 함수 객체의 내부 슬롯 [[Environment]]에 저장된 렉시컬 환경의 참조가 할당된다. 이것이 바로 함수 정의 위치에 따라 상위 스코프를 결정하는 렉시컬 스코프(정적 스코프)의 실체다.</p>

### 24.3 클로저와 렉시컬 환경

<p>다음 예제를 살펴보자</p>

```js
const x = 1;

// ①
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  }; // ②
  return inner;
}

// outer 함수를 호출하면 중첩 함수 inner를 반환한다.
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거된다.
const innerFunc = outer(); // ③
innerFunc(); // ④ 10
```

<p>outer 함수를 호출(③)하면 outer 함수는 중첩 함수 inner를 반환(return)하고 생명 주기(life cycle)를 마감한다. 즉, outer 함수의 실행이 종료되면 이 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거(pop)된다. 따라서 outer 함수의 지역 변수 x는 더는 유효하지 않게 되어 x 변수에 접근할 수 있는 방법이 달리 없어 보인다.</p>

<p>그러나 위 코드의 실행 결과(④)는 outer 함수의 지역 변수 x의 값인 10이다. 이미 생명 주기가 종료되어 <b>실행 컨텍스트 스택</b>에서 제거된 outer 함수의 지역 변수 x가 다시 부활이라도 한 듯 동작하고 있다.</p>

```
실행 컨텍스트의 실행이 종료되어 스택에서 제거되더라도, 참조가 남아있다면 렉시컬 환경은 소멸하지 않는다.

이처럼 외부 함수(outer)보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수(inner)는 이미 생명 주기가 종료한 외부 함수의 변수(x)를 참조할 수 있다.
이러한 중첩 함수를 클로저(closure)라고 부른다.
```

<p>자바스크립트의 모든 함수는 자신의 상위 스코프를 기억한다고 했다. 모든 함수가 기억하는 상위 스코프는 함수를 어디서 호출하든 상관없이 유지된다. 따라서 함수를 어디서 호출하든 상관없이 함수는 언제나 자신이 기억하는 상위 스코프의 식별자를 참조할 수 있으며 식별자에 바인딩된 값을 변경할 수도 있다. 위 예제에서 inner 함수는 자신이 평가될 때 자신이 정의된 위치에 의해 결정된 상위 스코프를 [[Environment]] 내부 슬롯에 저장한다.</p>

<p>outer 함수가 평가되어 함수 객체를 생성할 때(①) 현재 실행 중인 실행 컨텍스트(running execution context)의 렉시컬 환경, 즉 전역 렉시컬 환경을 outer 함수 객체의 [[Environment]] 내부 슬롯에 상위 스코프로서 저장한다.</p>

<img width="700" src="./images/31_2.JPG" alt="전역 함수 객체의 상위 스코프 결정">

<p>1. outer 함수를 호출하면 2. outer 함수의 렉시컬 환경이 생성되고 3. 앞서 outer 함수 객체의 [[Environment]] 내부 슬롯에 저장된 전역 렉시컬 환경을 outer 함수 렉시컬 환경의 '외부 렉시컬 환경에 대한 참조'에 할당한다. 그리고 중첩 함수 inner가 평가된다. 이때 중첩 함수 inner는 자신의 [[Environment]] 내부 슬롯에 현재 실행 중인 실행 컨텍스트(외부 함수 outer)의 렉시컬 환경을 상위 스코프로서 저장한다. (함수 표현식이기 때문에 런타임이 평가되었다)</p>

<img width="700" src="./images/31_3.JPG" alt="중첩 함수의 상위 스코프 결정">

<p>outer 함수의 실행이 종료하면 inner 함수를 반환(return)하면서 outer 함수의 생명 주기가 종료된다.(③) 즉, outer 함수의 실행 컨텍스트가 실행 컨텍스트 <b>스택</b>에서 제거된다. 이때 <b>outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 제거되지만 outer 함수의 렉시컬 환경까지 소멸하는 것은 아니다.(변수에 innerFunc에 의해 참조되고 있으므로)</b> 가비지 컬렉터는 누군가 참조하고 있는 메모리 공간을 함부로 해제하지 않는다.</p>

<img width="700" src="./images/31_4.JPG" alt="outer 함수의 렉시컬 환경은 유지된다">

<p>outer 함수가 반환한(return inner;) inner 함수를 호출(④)하면 inner 함수의 실행 컨텍스트가 생성되고 실행 컨텍스트 스택에 푸시된다. 그리고 렉시컬 환경의 외부 렉시컬 환경에 대한 참조에는 inner 함수 객체의 [[Environmnet]] 내부 슬롯에 저장되어 있는 참조값이 할당된다.</p>

<img width="700" src="./images/31_5.JPG" alt="외부 함수가 소멸해도 반환된 중첩 함수는 외부 함수의 변수를 참조할 수 있다">

<p>이처럼 중첩 함수 inner의 내부에서는 상위 스코프를 참조할 수 있으므로 상위 스코프의 식별자를 참조할 수 있고 식별자의 값을 변경할 수도 있다. 자바스크립트의 모든 함수는 상위 스코프를 기억하므로 이론적으로 모든 함수는 클로저다. 하지만 일반적으로 모든 함수를 클로저라고 하지는 않는다.</p>

### case 1 상위 스코프의 식별자를 참조하지 않는 경우

<details>
<summary>코드 및 소스 보기</summary>

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      function foo() {
        const x = 1;
        const y = 2;

        // 일반적으로 클로저라고 하지 않는다.
        function bar() {
          const z = 3;

          debugger;
          // 상위 스코프의 식별자를 참조하지 않는다.
          console.log(z);
        }

        return bar;
      }

      const bar = foo();
      bar();
    </script>
  </body>
</html>
```

<br/>

<img src="./images/closure1.png" alt="클로저no">

<p>위 예제의 중첩 함수 bar는 외부 함수 foo 보다 더 오래 유지되지만 상위 스코프의 어떤 식별자(x,y)도 참조하지 않는다. 이처럼 상위 스코프의 어떤 식별자도 참조하지 않는 경우 대부분의 모던 브라우저는 최적화를 통해 다음 그림과 같이 상위 스코프를 기억하지 않는다. 참조하지도 않는 식별자를 기억하는 것은 메모리 낭비이기 때문이다. 따라서 bar 함수는 클로저라고 할 수 없다.</p>

```
참조하는 식별자를 실행 컨텍스트가 종료되어도 렉시컬 환경을 통해 참조하고, 값을 변경할 수 있는 것이 클로저이다.
```

</details>

### case 2 상위 스코프의 식별자를 참조하지만, 중첩 함수가 반환되지 않은 경우

<details>
<summary>코드 및 소스 보기</summary>

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      function foo() {
        const x = 1;

        // 일반적으로 클로저라고 하지 않는다.
        // bar 함수는 클로저였지만 곧바로 소멸한다.
        function bar() {
          debugger;
          // 상위 스코프의 식별자를 참조한다.
          console.log(x);
        }
        bar();
      }

      foo();
    </script>
  </body>
</html>
```

<br/>
<img src="./images/closure2.png" alt="클로저soso">

<p>위 예제의 중첩 함수 bar는 상위 스코프의 식별자(x)를 참조하고 있으므로 클로저다. 하지만 외부 함수 foo의 외부로 중첩 함수가 반환되지 않는다. 즉, <b>외부 함수 foo보다 중첩  함수 bar의 생명 주기가 짧다.</b> 이런 경우 중첩 함수 bar는 클로저였지만 외부 함수보다 일찍 소멸되기 때문에 생명 주기가 종료된 외부 함수의 식별자를 참조할 수 있다든 클로저의 본질에 부합하지 않는다. 따라서 중첩 함수 bar는 일반적으로 클로저라고 하지 않는다.</p>

</details>

### case 3 상위 스코프의 식별자를 참조하고, 중첩 함수가 반환되는 경우 (올바른 클로저)

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      function foo() {
        const x = 1;
        const y = 2;

        // 클로저
        // 중첩 함수 bar는 외부 함수보다 더 오래 유지되며 상위 스코프의 식별자를 참조한다.
        function bar() {
          debugger;
          console.log(x);
        }
        return bar;
      }

      const bar = foo();
      bar();
    </script>
  </body>
</html>
```

<br/>
<img src="./images/closure3.png" alt="클로저yes">

<p>위 예제의 중첩 함수 bar는 상위 스코프의 식별자를 참고하고 있으므로 클로저다. 그리고 외부 함수의 외부로 반환되어 외부 함수보다 더 오래 살아 남는다. 이처럼 외부 함수보다 중첩 함수가 더 오래 유지되는 경우 중첩 함수는 이미 생명 주기가 종료한 외부 함수의 변수를 참조할 수 있다. 이러한 중첩 함수를 클로저라고 부른다. <b>클로저는 중첩 함수가 상위 스코프의 식별자를 참조하고 있고 중첩 함수가 외부 함수보다 더 오래 유지되는 경우에 한정하는 것이 일반적이다.</b></p>

<p>다만 클로저인 중첩 함수 bar는 상위 스코프의 식별자 x, y중 x만 참조하고 있다. 이런 경우 대부분의 모던 브라우저는 최적화를 통해 상위 스코프의 식별자 중에서 클로저가 참조하고 있는 식별자만 기억한다.</p>

<p>클로저에 의해 참조되는 상위 스코프의 변수(foo 함수의 변수 x)를 <b>자유 변수(free variable)</b>라고 부른다. 클로저란 <b>자유 변수에 묶여있는 함수</b>라고 말할 수 있다.</p>

### 24.4 클로저의 활용

<p><b>클로저는 상태를 안전하게 변경하고 유지하기 위해 사용한다.</b> 다시 말해, 상태가 의도치 않게 변경되지 않도록 <b>상태를 안전하게 은닉(information hiding)하고 특정 함수에게만 상태변경을 허용</b>하기 위해 사용한다.</p>

<p>함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 만들어보자.</p>

```js
// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

console.log(increase()); // 1
console.log(increase()); // 2
console.log(increase()); // 3
```

<p>위 코드는 잘 동작하지만 오류를 발생시킬 가능성을 내퐣고 있는 좋지 않은 코드다. 그 이유는 위 예제가 바르게 동작하려면 다음의 전제 조건이 지켜져야 하기 때문이다.</p>

```
1.카운트 상태(num 변수의 값)는 increase 함수가 호출되기 전까지 변경되지 않고 유지되어야 한다.
2.이를 위해 카운트 상태(num 변수의 값)는 increase 함수만이 변경할 수 있어야 한다.
```

<p>하지만 카운트 상태는 전역 변수를 통해 관리되고 있기 때문에 언제든지 누구나 접근할 수 있고 변경할 수 있다.(암묵적 결합이 가능하다)</p>

```js
// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

const logNum = function () {
  console.log(num);
};

num++; // 해당 num++ 연산자를 통해 전역에 선언된 num의 값을 변경하였다.

increase(); // 1
increase(); // 2
increase(); // 3

logNum(); //4
```

<p>따라서 카운트 상태를 안전하게 변경하고 유지하기 위해서는 increase 함수만이 num 변수를 참조하고 변경할 수 있게 하는 것이 바람직하다.</p>

```js
// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태 변수
  let num = 0;

  // 카운트 상태를 1만큼 증가 시킨다.
  return ++num;
};

// 이전 상태를 유지하지 못한다.
console.log(increase()); // 1
console.log(increase()); // 1
console.log(increase()); // 1
```

<p>카운트 상태를 안전하게 변경하고 유지하기 위해 전역 변수 num을 increase 함수 지역 변수로 변경하여 의도치 않은 상태 변경은 방지했다. 하지만, 호출될 때마다 지역 변수 num은 다시 선언되고 0으로 초기화되기 때문에 출력 결과는 언제나 1이다. 이전 상태를 유지할 수 있도록 클로저를 사용해보자.</p>

```js
const counter = (function () {
  // 카운트 상태 변수
  let num = 0;

  // 클로저인 메서드를 갖는 객체를 반환한다.
  // 객체 리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
  return {
    // num: 0, // 프로퍼티는 public하므로 은닉되지 않는다.
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase()); // 1
console.log(counter.increase()); // 2

console.log(counter.decrease()); // 1
console.log(counter.decrease()); // 0

console.log(num);
// num is not defined,
// why? increase 함수의 스코프 내에 선언했기 때문에 전역 코드에서는 increase 함수의 지역 변수 num을 찾지 못한다.
```

<p>이처럼 클로저는 상태(state)가 의도치 않게 변경되지 않도록 안전하게 은닉(information hiding)하고 특정 함수에게만 상태 변경을 허용하여 상태를 안전하게 변경하고 유지하기 위해 사용한다. 변수 값은 누군가에 의해 언제든지 변경될 수 있어 오류 발생의 근본적 원인이 될 수 있다. <b>외부 상태 변경이 가변 데이터를 피하고 불변성을 지향하는 함수형 프로그래밍에서 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이기 위해 클로저는 적극적으로 사용된다.</b></p>

<details>
<summary>함수형 프로그래밍에서 클로저를 활용하는 예제 보기</summary>

```js
/*
let num = 0;

function plusNum() {
  num++;
}

console.log(num);
plusNum();
console.log(num);

// 수억개의 코드

num = 200;

console.log(num); // num 값이 쉽게 변경됨
*/

function closure() {
  let num = 10;

  function plusNum() {
    num += 1;
  }

  function printNum() {
    console.log(num);
  }

  function setNum(val) {
    num = val;
  }

  // 함수를 객체 형식으로 리턴하는 이유는 새로 생성한 변수를 (.) 연산자를 통해 (객체와 같은 방식으로) 접근하기 위해서
  // 함수뿐만 아니라 지역 변수도 리턴이 가능하다 (하지만 추천하지 않음)
  // 지역 변수를 객체 형식으로 담아서 리턴될 경우에, closure의 의도와 다르게 내부에 정의된 함수 외에도 지역 변수의 값을 변경하는 경우가 생기기 때문에
  // (객체는 가변성의 성질을 가지므로)

  return { num, plusNum, printNum, setNum };
}

// console.log("num is:", num); // num is not defined, 상위 스코프에서 하위 스코프로 식별자 검색을 할 수 없음

const newNum = closure(); // closure 함수로 newNum 함수를 생성한다.

console.log(newNum); // 생성된 함수객체 newNum은 closure 함수가 리턴하는 객체 형식의 프로퍼티와 메서드가 들어있음

console.log((newNum.num = 20)); // newNum.num 에 값을 할당 (closure 함수의 메서드를 사용하지 않고 직접 변경)
console.log(newNum); // 객체형식으로 리턴되는 newNum의 특성상 newNum의 프로퍼티인 num의 값이 재할당됨

newNum.printNum(); // 하지만 printNum 메서드를 사용하면 기존의 10 출력

newNum.setNum(100); // 따라서 지역 변수 num을 변경하기 위해서는 새로운 메서드를 정의하여 값을 전달함으로서 부수효과를 줄어야함

newNum.printNum(); // 100 출력

// 하지만 지역 변수를 리턴하더라도 원시 타입의 값은 불변성의 성질을 가지기 때문에, 재할당하지 않는 이상 값을 변화시킬 수 없다.
// 따라서 함수를 통해 반환하여 사용하는 것이 올바르다.

>> console.log(newNum)
{
  num: 10,
  plusNum: [Function: plusNum],
  printNum: [Function: printNum],
  setNum: [Function: setNum]
}

>> console.log((newNum.num = 20));
20

>> console.log(newNum);
{
  num: 20,
  plusNum: [Function: plusNum],
  printNum: [Function: printNum],
  setNum: [Function: setNum]
}

>> newNum.printNum();
10

>> newNum.printNum();
100
```

</details>

### 24.5 캡슐화와 정보 은닉

<p><b>캡슐화(encapsulation)</b>는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다. <b>캡슐화</b>는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 <b>정보 은닉(information hiding)</b>이라 한다.</p>

<p>정보 은닉은 외부에 공개할 필요가 없는 구현의 일부를 외부에 공개되지 않도록 감추어 <b>적절치 못한 접근으로부터 객체의 상태가 변경되는 것을 방지해 정보를 보호하고, 객체 간의 상호 의존성, 즉 결합도를 낮추는 효과가 있다.</b></p>

<p>대부분의 객체지향 프로그래밍 언어는 클래스를 정의하고 그 클래스를 구성하는 멤버(프로퍼티와 메서드)에 대하여 public, private, protected와 같은 접근 제한자(access modifier)를 선언하여 공개 범위를 한정할 수 있다. public으로 선언된 프로퍼티와 메서드는 클래스 외부에서 참조할 수 있지만 private으로 선언된 경우는 클래스 외부에서 참조할 수 없다.</p>

<p>자바스크립트는 public, private, protected와 같은 접근 제한자를 제공하지 않는다. 따라서 자바스크립트 객체의 모든 프로퍼티와 메서드는 기본적으로 외부에 공개되어 있다. 즉, 객체의 모든 프로퍼티와 메서드는 기본적으로 public하다.</p>

<p>하지만 자바스크립트는 정보 은닉을 완전하게 지원하지 않는다.</p>
