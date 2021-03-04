# SECTION 2

## 🌟 연산자 (Operator)

### 연산자

연산의 사전적 의미

- 규칙에 따라 계산하여 값을 구함 <br/>

연산자 형태

- +, -, '\*', /, % <br/>
- '>', >=, '<', <= <br/>
- ==, !=, ===, !== <br/>
- (,), typeof, delete, void<br/>
- Instanceof, in new 등 <br/>

### 표현식

표현식 형태

```js
1 + 2;
var total = 1 + 2;
var value = total / (2 + 3);
```

"표현식을 평가"한다고 한다.<br/>
표현식을 평가하면 결과가 반환되며, 이를 '평가 결과'라고 한다. <br/>

<hr/>

## 🌟 관계 연산자

```js
<,>, <=, >= 연산자
instanceof 연산자
in 연산자
```

instanceof, in 연산자 <br/>

- 사전 설명이 필요하므로 관련된 곳에서 다룸

<hr/>

## 🌟 동등, 부등, 일치, 불일치 연산자

### == 연산자

동등 연산자</br>
왼쪽과 오른쪽 값이 같으면 true 다르면 false </br>
타입은 비교하지 않음</br>

```js
console.log(1 == "1");

>>> true

why?
js는 숫자 : 문자 비교일 때 숫자타입으로 변환하여 비교 연산함
따라서 값이 같기 때문에 true로 결과물 출력
```

### != 연산자

부등 연산자</br>
왼쪽과 오른쪽 값이 다르면 true 같으면 false</br>

### === 연산자

일치 연산자</br>
왼쪽과 오른쪽의 값과 타입이 모두 같으면 true 값 또는 타입이 다르면 false </br>

```js
1 === 1, true
1 === "1", false

why? 숫자 : 문자 비교로 타입이 다르므로 일치 연산자에서는 false로 추력됨

```

```js
var value;
console.log(value == null);   >>> true
console.log(value === null);  >>> false

why?
변수 value의 상태는 undefined이다.
undifined와 null은 "값"이다.
일치 연산자로 비교하면 타입이 다르므로 false로 출력된다.
```

<hr/>

## 🌟 조건 연산자

### 조건 연산자

3항 연산자라고도 한다.

```js
exp ? exp - 1 : exp - 2;
```

exp 위치의 표현식을 먼저 평가<br/>

- true 이면 exp-1의 결과를 반환
- false 이면 exp2의 결과를 반환

exp 표현식 기준이므로 true 라면 뒤에 false 표현식을 건너 뛴다.

<hr/>
