# SECTION 4, 함수

## 🌟 함수 (function)

function<br/>

- 특정 기능을 처리하는 자바스크립트 코드 묶음

함수형태 <br/>

```js
CASE1: 함수 선언식

function book() {
  var title = 'JS BOOK';
}


CASE2: 함수 표현식

var point = function (one, two) {
  var total = one + two;
  var bonus = total + 100;
};
```

<a href="https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/" target="_blank">함수 표현식과 함수 선언식 차이점 알아보기</a>

<br/>

- 함수 선언식은 <b>호이스팅</b>에 영향을 받지만, 함수 표현식은 <b>호이스팅</b>에 영향을 받지 않는다.
- 함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 <b>호이스팅</b>에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

### 함수 구성 요소

function 키워드 <br/>
함수 이름<br/>
파라미터 (parameter)<br/>

- 매개 변수, 인자, 아규먼트라고도 부름
- 파라미터 작성은 optional(선택적)

함수 Body<br/>

- 중괄호 { ... } 안에 작성한 코드
- 함수 코드, 소스 텍스트로도 부름
- 강좌에서는 함수 코드로 표기
- 함수 코드 작성은 선택

### 함수 이름 규칙

통용되는 관례를 기준으로 말함<br/>

calculatePoint()처럼 동사로 시작<br/>

- 포인트를 계산한다는 의미

두 개 이상의 단어를 사용할 때<br/>

- 두 번째 단어부터 명사 사용
- 명사의 첫 문자를 대문자로 사용
- 낙타등 표기법이라고 부름

동사 + 명사 형태로 동적인 모습

<hr/>

## 🌟 함수 호출

### 호출받는 함수

함수는 호출되어야 실행됩니다<br/>
호출받는 함수

- 함수가 호출되었을 때 실행되는 함수
- 함수라고 하면 호출받는 함수를 지칭

파라미터

- 호출한 함수에서 넘겨준 값을 받음
- (one, two)처럼 소괄호() 안에 파라미터 이름 작성

```js
function setValue(one, two) {
  var total = one + two;
}

setValue(10, 20);

...
setValue(10,20) 함수에 파라미터 두 개(10,20)를 포함한 호출 요청을 보내면 작성된 function setValue(one,two){ ... } 함수를 통해 결과값을 만들어 줍니다.
```

일반적으로 호출 받는 함수는 위에 작성합니다.

### return

형태 : return 표현식 opt; <br/>
표현식의 평가 결과 반환<br/>

```js
function getPoint() {
  return 10 * 30;
}
var result = getPoint();
console.log(result);
...

>>>
300
```

1. getPoint() 함수 호출
2. return의 오른쪽 표현식(10\*30)을 평가
3. 평가 결과 300을 반환
4. 300을 갖고 getPoint()로 돌아갑니다
5. 300을 result 변수에 할당합니다.

return 또는 표현식을 작성하지 않으면 undefined 반환<br/>

```js
case1: return 또는 표현식을 작성하지 않은 경우

function getPoint(){};

var result = getPoint();
console.log(typeof result);

>>>
undefined
```

return과 표현식을 한 줄에 작성<br/>

<hr/>

## 🌟 주석 작성 목적

코드가 목적을 달성하기 위한 기능, 시나리오 등을 생각하고 정리하는 것 <br/>
코드를 작성하기 전에 우선 먼저 정리한 생각을 주석으로 작성<br/>
주석 작성 기준 <br/>

- 코드의 목적, 결과가 미치는 영향을 작성
- 다른 사람이 알 수 있도록 자세하게 작성

<br/>

<a href="../SECTION05/readme.md">다음 섹션으로</a>
