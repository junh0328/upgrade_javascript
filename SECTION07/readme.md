## 🌟 Number 오브젝트

### Number 오브젝트

숫자(123) 처리를 위한 오브젝트 <br/>
즉, Number 오브젝트에

- 숫자 처리를 위한
- 함수와 프로퍼티가 포함되어 있으며
- 함수를 호출하여 숫자 처리를 하게 됩니다.

모든 obejct를 잘 다루기 위해서는 빌트인된 함수와 프로퍼티를 잘 사용할 수 있어야 합니다.

### 프로퍼티 리스트

|    이름(수단)    |                  개요(목적)                  |
| :--------------: | :------------------------------------------: |
|   new Number()   |                인스턴스 생성                 |
|   Number 함수    |
|     Number()     |          숫자 값으로 변환하여 반환           |
| Number.prototype |                                              |
|   constructor    |                    생성자                    |
|    toString()    |           숫자 값을 문자열로 변환            |
| toLocaleString() |         숫자 값을 지역화 문자로 변환         |
|    valueOf()     | 프리미티브 값(인스턴스에 설정된 값)으로 반환 |
| toExponential()  |               지수 표기로 변환               |
|    toFixed()     |           고정 소숫점 표기로 변환            |
|  toPrecision()   |      고정 소숫점 또는 지수 표기로 변환       |

<br/>

- ( ) , 소괄호가 있는 것은 함수이다.
- ( ) x , 소괄호가 없는 것은 오브젝트입니다.
- 개요(목적)를 기준으로 접근해야 합니다.
- new Number()는 인스턴스를 생성합니다 x (수단을 위한 목적)
- 인스턴스를 생성하기 위해 new Number()를 사용합니다. (목적을 위한 수단)

<hr/>

## 🌟 Number 타입으로 변환

### Number()

|   구분   |           데이터(값)           |
| :------: | :----------------------------: |
| 파라미터 | 변환할 값 opt (opt, 없어도 됨) |
|   반환   |           변환한 값            |

<br/>

파라미터 값을 Number 타입으로 변환<br/>
파라미터 값이 String 타입이라도 값이 숫자이면 변환 가능

```js
console.log(Number('123') + 200);

...

>>>
323
```

숫자로 변환할 수 있으면 변환 <br/>
파라미터 값을 작성하지 않으면 0을 반환<br/>

```js
console.log(Number(0x14));
console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));

...
>>>
20
1
0
NaN
```

<hr/>

## 🌟 new 연산자

|    구분     |   데이터(값)    |
| :---------: | :-------------: |
| constructor |     생성자      |
|  파라미터   |     값 opt      |
|    반환     | 생성한 인스턴스 |

<br/>

오브젝트로 인스턴스를 생성하여 반환<br/>

- 원본을 복사하는 개념
- new 연산자를 사용하면 인스턴스
- 코딩 관례로 첫 문자를 대문자로 작성합니다.

```js
var obj = new Number();
log(typeof obj);

...
>>>
object

why?
- new Number()를 통해 만들어진 인스턴스가 obj 변수에 할당됨
```

<br/>

대문자 Object는 {키 : 값} 형태의 집합입니다.<br/>
소문자 object는 인스턴스입니다.<br/>
<br/>
인스턴스 생성 목적

- 인스턴스마다 값을 갖기 위한 것
- 각 변수마다(obj, obj2) 인스턴스의 파라미터(123, 234)를 통해 값을 저장하기 위함

```js
var obj = new Number("123");
console.log(obj.valueOf());
var obj2 = new Number("234");
console.log(obj2.valueOf());
...
>>>
123
234
```

<hr/>

## 🌟 Number 인스턴스 생성

### new Number()

|   구분   |       데이터(값)       |
| :------: | :--------------------: |
| 파라미터 |         값 opt         |
|   반환   | 생성한 Number 인스턴스 |

<br/>

빌트인 Number 오브젝트로 새로운 Number 인스턴스를 생성

```js
// 파라미터 값이 String 타입이여도 Number()함수에 의해 숫자로 저장됩니다.
var obj = new Number("123");

console.log(obj);

>>>
123

/*
1. 새로 생성한 Number 인스턴스가 obj에 할당됩니다.

2. 오른쪽 Local의 obj를 펼칩니다.
  1) __proto__ 가 있으며
  2) [[PrimitiveValue]] = 123이 있습니다.
*/
```

<br/>

new Number() 생성자를 통해 생긴 인스턴스입니다.<br/>
파라미터를 통해 인스턴스에 값을 넣어줄 수 있습니다. <br/>
생성된 인스턴스를 변수 obj에 저장합니다.<br/>

<br/>
새롭게 만들어진 인스턴스에는 기존 Object의 prototpye 만을 전달합니다.<br/>
나머지 Object(대문자)의 프로퍼티(함수(), 프로퍼티{키:값})는 주지 않으며, 프로토타입에 연결된 함수들만 사용이 가능합니다.

<hr/>

## 🌟 프리미티브 값

Primitive Value

- 언어에 있어 가장 낮은 단계의 값

```js
var book = '책';

// 위 함수에서 "책"은 더 이상 분해, 전개가 불가능한 프리미티브 값입니다.
```

<br/>
프리미티브 타입

- Number, String, Boolean : 인스턴스 생성 가능
- Null, Undefined: 인스턴스 생성 불가
- Object는 프리미티브 값을 제공하지 않음

### 인스턴스의 프리미티브 값

var obj = new Number(123);

- 인스턴스를 생성하면
- 파라미터 값을 인스턴스의 프리미티브 값으로 설정

프리미티브 값을 갖는 오브젝트

- Boolean, Date, Number, String

### valueOf()

|   구분   |      데이터(값)       |
| :------: | :-------------------: |
|   data   | Number 인스턴스, 숫자 |
| 파라미터 |     사용하지 않음     |
|   반환   |     프리미티브 값     |

<br/>

Number 인스턴스의 프리미티브 값 반환

```js
var obj = new Number("123");

console.log(obj.valueOf());

>>>
123
/*
data => obj
params => x
return => 123
*/
```

<hr/>

<a href="../SECTION08/readme.md">다음 섹션으로</a>
