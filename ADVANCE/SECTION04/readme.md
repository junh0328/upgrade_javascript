## 스코프(Scope)

### 스코프 목적

스코프는 범위, 영역이라는 의미 <br/>

범위를 제한하여

- 식별자를 해결하려는 것
- 스코프에서 식별자를 해결

식별자 해결(Identifier Resolution)

- 변수 이름, 함수 이름을 찾는 것
- 이때 스코프를 사용
- 이름을 찾게 되면 값을 구할 수 있음
- 크게는 이름을 설정하는 것도 식별자 해결

스코프는 식별자 해결을 위한 것

### 스코프 설정

```js
function book(){
    var point = 123;
    functino get(){
        console.log(point);
    };
    get();
};
book();

/*
get 함수가 속한
- var point
- function get(){ ...}
- get();

이 코드의 영역을 스코프로 설정합니다.
*/
```

<hr/>

## 글로벌 스코프

글로벌 오브젝트가 글로벌 스코프이다. <br/>

오브젝트는 개발자 관점으로 오브젝트에 함수와 변수를 작성 <br/>

스코프는 식별자 해결을 위한 것으로

- 엔진 관점

글로벌 스코프는 최상위 스코프

- 함수에서 보면 최종 스코프

<hr/>

## 스코프 바인딩

### 바인딩이란?

구조적으로 결속된 상태로 만드는 것

- 대상: 프로퍼티 이름 {key : value} 중 key 값

바인딩 목적

- 스코프 설정, 식별자 해결

바인딩 시점 구분

- 정적 바인딩(Lexical, Static Binding)
- 동적 바인딩(Dynamic Binding)

### 정적, 동적 바인딩

정적 바인딩

- 초기화 단계에서 바인딩
- 함수 선언문 이름을 바인딩
- 표현식(변수, 함수) 이름을 바인딩
  JS는 대부분 정적 바인딩 <br/>

동적(다이나믹) 바인딩

- 실행할 때 바인딩
- eval(), with 문

### 바인딩 시점의 중요성

바인딩할 때 스코프가 결정되기 때문에 바인딩 시점이 중요하다 <br/>
function 오브젝트 생성 지점에 스코프 결정

- 스코프를 function 오브젝트의 [[Scope]]에 설정
- 스코프가 변경되지 않음

함수 안의 모든 함수의 스코프가 같음

```js
function book() {
  debugger;
  var point = 100;
  function add() {
    point += 200;
  }
  function get() {
    return point;
  }
  add();
  console.log(get());
}

book();
>>>
300
/*
add() 함수를 만드는 시점에 [[Scope]] 를 설정하기 때문에 point 변수를 공유할 수 있게 됨
*/
```

<hr/>
<a href="../SECTION05/readme.md">다음으로 가기</a>
