## 🌟 Object 오브젝트(ES3 기준)

### 자바스크립트의 오브젝트

오브젝트 구분

- 빌트인 오브젝트
- 네이티브 오브젝트
- 호스트 오브젝트

<br/>

네이티브 오브젝트 안에 빌트인 오브젝트가 포함되어 있다.
<br/>

### 빌트인 오브젝트

- 사전에 만들어 놓은 오브젝트
- Number, String, ...

<br/>

### 네이티브 오브젝트

- JS 스펙에서 정의한 오브젝트
- 빌트인 오브젝트 포함
- JS 코드를 실행할 때 만드는 오브젝트
- 예) Argunment 오브젝트

### 호스트 오브젝트

- 빌트인, 네이티브 오브젝트를 제외한 모든 오브젝트

  > 예 : window, DOM 오브젝트, ...

- JS는 호스트 환경에서 브라우저의 모든 요소 기술을 연결하고 융합하며 이를 제어

- 계속해서 host 오브젝트에 포함된 내용들을 공부해야 합니다.

```js
var node = document.querySelector('div');
console.log(node.nodeName);

>>>
DIV

/*

document는 DOM에서 제공하는 오브젝트로 HOST 오브젝트라고 불립니다.
마치 JS 함수처럼 사용이 가능합니다.
*/
```

<hr/>

## 오브젝트와 인스턴스

강좌에서는 오브젝트와 인스턴스를 구분합니다.

```js
case 1: 오브젝트

new 연산자 사용 x

var obj = {};

obj 오브젝트라 칭함

```

```js
case 2: 인스턴스

new 연산자 사용

var abc = new Object();

abc 인스턴스라 칭함
```

<hr/>

## 빌트인 Object와 프로퍼티(ES3)

오브젝트라 부르는 것이 맞지만, 구분을 위해 프로퍼티라 칭합니다. <br/>

### 프로퍼티 리스트

|          이름          |                   개요                    |
| :--------------------: | :---------------------------------------: |
|      new Object()      |   파라미터 데이터 타입의 인스턴스 생성    |
|        Object()        |           Object 인스턴스 생성            |
|    Object.prototype    |
|      constructor       |                  생성자                   |
|       valueOf()        | 프리미티브 값 반환 (인스턴스에 설정된 값) |
|    hasOwnProperty()    |          프로퍼티 소유 여부 반환          |
| propertyIsEnumerable() |          프로퍼티 열거 여부 반환          |
|    IsPrototypeOf()     |        prototype의 존재 여부 반환         |
|       toString()       |               문자열로 반환               |
|    toLocaleString()    |           지역화 문자열로 반환            |

<hr/>

## Object 인스턴스 생성

### new Object()

|   구분   |   데이터(값)    |
| :------: | :-------------: |
| 파라미터 |     값 opt      |
|   반환   | 생성한 인스턴스 |

<br/>

인스턴스를 생성하여 반환 <br/>
파라미터의 데이터 타입에 따라 생성할 인스턴스 결정 <br/>

```js
var newObj = new Object(123);
console.log(typeOf(newObj));
console.log(newObj + 223);

>>>
object
323

why?
/*
타입은 기본적으로 오브젝트 타입이지만, 파라미터에 따라 프리미티브 값이 형변환되어 적용된다.
*/
```

파라미터 값이 undefined, null이면 빈 Object 인스턴스 반환<br/>

```js
var newObj = new Object();
console.log(newObj);

>>>
{}
```

### Object()

|   구분   |   데이터(값)    |
| :------: | :-------------: |
| 파라미터 |     값 opt      |
|   반환   | 생성한 인스턴스 |

<br/>

Object 인스턴스 생성<br/>
파라미터는 {name : value} 형태

```js
var obj = Object({ name: 'JS BOOk' });
console.log(obj)
>>> {name: JS BOOk}

var obj2 = Object();
console.log(obj2)
>>> {}
```

## 함수와 메소드

함수

- 빌트인 오브젝트에서 바로 호출
- 오브젝트에 연결
- <b>Object.create()</b>

메소드

- 프로토타입이 존재하는 인스턴스에서 호출하는 함수는 메소드라고 부른다.
- 오브젝트의 prototype에 연결
- <b>Object.prototype.toString()</b>

### 함수, 메소드 호출

함수 호출 방법

- Object.create();

<br/>

메소드 호출 방법

- Object.prototype.toString();
- 또는 인스턴스를 생성하여 호출

```js
var obj = {};
obj.create();
```

<br/>

함수와 메소드를 구분해야 하는 이유

- JS 코드 작성 방법이 다르기 때문
- 함수는 파라미터에 값을 작성하고
- 메소드는 메소드 앞에 값을 작성

<a href="../SECTION10/readme.md">다음 섹션으로</a>
