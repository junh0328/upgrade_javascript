# SECTION 1, 기본 문법

## 🌟 문장

### Statement

JS 코드 실행 단위</br>
세미콜론 (;) 까지 하나의 문장</br>
var book = "책";</br>

### 문장 시작 위치

위치 제약 없음 </br>
들여쓰기: 일반적으로 2칸, 4칸 </br>

<hr/>

## 🌟 변수

### Variable

값을 저장하는 영역

### 변수 사용 목적

변수에 저장된 값의 재사용

### 변수 선언 방법

```js
var book;
```

### 값을 변수에 할당하는 방법

```js
var book = '책';

>> '=' 오른쪽의 값(책)을 왼쪽 변수(book)에 할당
>> book 변수를 통해 '책'이라는 값을 재사용
```

## 🌟 데이터 타입

### 데이터 타입 형태

```js
숫자 타입 : var value = 123;
문자 타입 : var value = "sports";
```

### typeof dustkswk

데이터(값) 타입 변환<br/>
typeof value에 데이터를 작성<br/>

### 키워드 (Keyword)

특별한 기능을 가진 단어 <br/>

### 데이터 타입을 자료형이라고도 부름

### 데이터는 타입을 가짐

JS는 데이터를 기준으로 타입을 결정 <br/>
타입을 먼저 선언하고 타입에 맞는 데이터를 할당하지 않음<br/>

</hr>

## 🌟 Number 타입, String 타입

### 언어 타입과 스펙 타입

#### 언어 타입

JS 프로그램에서 사용할 수 있는 타입<br/>
Undefined, Null, Boolean, String, Number, Object<br/>

#### 스펙(문서)타입

언어 알고리즘을 위한 타입으로 JS 프로그램에서 사용 불가<br/>
Reference, List, Completion, Property Descriptor, Data Block, ... <br/>

### Number 타입

부호(+, -)를 가진 값 <br/>
숫자 값 범위 <br/>
Number 타입의 특수한 3개 값<br/>

- NaN: Not-a-Number (숫자가 아닙니다.)
- Infinity: 양수 무한대
- -Infinity: 음수 무한대

```js
const result = 1 * "A";
console.log(result);

...

>>> NaN
```

### String 타입

문자 타입 <br/>
값을 " " 또는 ' '사이에 작성<br/>

## 🌟 Undefined 타입, Null 타입

### Undefined 타입

변수의 디폴트값<br/>

```js
var point;
console.log(point);
...
>>> undefined why? 변수를 선언했는데, 변수 안에 값이 들어있지 않기 때문에
```

변수를 선언만 한 것으로 undefined가 초깃값으로 설정 <br/>
변수에 undefined 할당 가능<br/>

### Null 타입

null과 undifined 차이

- undefined는 단지 변수만 선언

```js
var point;
```

- null을 할당해야 값이 null이 됨
- null을 선언한다면, 의도적으로 값을 할당한 것으로 코드를 수행한 것이 된다.

```js
var point = null;
console.log(point);
...
>>> null why? 변수 point에 null이라는 값을 선언했음
```

## 🌟 Boolean 타입, Object 타입

### Boolean 타입

불리언 타입<br/>

- 값: true, false

### Object 타입

오브젝트 타입 <br/>

- 오브젝트 형태
  ```js
  {
    name: value;
  }
  형태;
  ```
- 프로퍼티(property)

```js
  {키 : 값} 으로 구성된 객체 1개
```

- Object는 프로퍼티의 집합

```js
var book = {
  title: '책',
  page: 223,
};

console.log(book);
...
>>> {title: "책", page: 223}
```

<hr/>
<a href="../SECTION02/readme.md">다음 섹션으로</a>
