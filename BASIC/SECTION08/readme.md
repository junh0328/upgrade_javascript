## 🌟 String 오브젝트

"ABC"처럼 문자 처리를 위한 오브젝트 <br/>
즉, String 오브젝트에

- 문자 처리를 위한
- 함수와 프로퍼티가 포함되어 있으며
- 함수를 호출하여 문자 처리를 하게 됩니다.

### 문자열 연결 방법

한 줄에서 연결

```js
var book = "12" + "AB" + "가나";

console.log(book);

>>>
12AB가나
```

<br/>
줄을 분리하여 연결

```js
var concat = 123 + "abc"
              + "가나";

console.log(concat);

>>>
123abc가나
```

<br/>

### 프로퍼티 리스트

|       이름       |                     개요                     |
| :--------------: | :------------------------------------------: |
|   new String()   |                인스턴스 생성                 |
|   String 함수    |
|     String()     |            문자열로 변환하여 반환            |
| String 프로퍼티  |
|      length      |           문자열의 문자 수를 반환            |
| String.prototype |
|   constructor    |                    생성자                    |
|    valueOf()     |  프리미티브 값 반환 (인스턴스에 설정된 값)   |
|    toString()    |                문자열로 반환                 |
|     charAt()     |               인덱스 문자 반환               |
|    indexOf()     | 일치하는 문자열 중에서 가장 작은 인덱스 반환 |
|     concat()     |                 문자열 연결                  |
|  toLowerCase()   |              영문 소문자로 변환              |
|  toUpperCase()   |              영문 대문자로 변환              |
|      trim()      |      문자열 앞뒤의 화이트 스페이스 삭제      |
|   substring()    |         시작에서 끝 직전까지 값 반환         |
|     slice()      |         시작에서 끝 직전까지 값 반환         |
|   match() [✔️]   |                매치 결과 반환                |
|  replace() [✔️]  |        매치 결과를 지정한 값으로 대체        |
|  search() [✔️]   |          검색된 첫 번째 인덱스 반환          |
|   split() [✔️]   |            구분자로 분리하여 반환            |
|       [✔️]       |       정규 표현식에서 사용가능한 함수        |

<hr/>

## 🌟 문자열로 변환

### String()

|   구분   |  데이터(값)   |
| :------: | :-----------: |
| 파라미터 | 변환 대상 opt |
|   반환   |   변환한 값   |

<br/>

파라미터 값을 String 타입으로 변환하여 반환

- 값을 작성하지 않으면 빈문자열 반환

```js
var value = String(123);

console.log(value.typeOf);
>>>
object undefined

why? 생성자로 생성한 인스턴스가 아니기 때문에 object 오브젝트에서 찾았으나 값을 찾을 수 없음
```

<br/>

### new String()

|   구분   |       데이터(값)       |
| :------: | :--------------------: |
| 파라미터 |         값 opt         |
|   반환   | 생성한 String 인스턴스 |

<br/>

String 인스턴스를 생성하여 반환<br/>
파라미터 값을 String 타입으로 변환

- 파라미터 값이 프리미티브 값이 됩니다.

```js
var obj = new String(126);
console.log(typeOf(obj));

>>>
string
```

### valueOf() [값]

|   구분   |      데이터(값)       |
| :------: | :-------------------: |
|   data   | String 인스턴스, 문자 |
| 파라미터 |     사용하지 않음     |
|   반환   |     프리미티브 값     |

<br/>

String 인스턴스의 프리미티브 값 반환

```js
var obj = new String(123);
console.log(obj.valueOf());

>>>
123
```

<hr/>

## 🌟 length 프로퍼티

1.문자 수 반환

```js
var value = "ABC";

console.log(value);

>>>
3
```

<br/>
2.length 프로퍼티 활용

```js
var value = 'abc';

for (var k = 0; k < value.length; k++) {
  console.log(value[k]);
}
>>>
a
b
c
```

<br/>

<hr/>

## 🌟 화이트 스페이스 삭제

### trim()

|   구분   |  데이터(값)   |
| :------: | :-----------: |
|   data   |   삭제 대상   |
| 파라미터 | 사용하지 않음 |
|   반환   |  삭제한 결과  |

<br/>

문자열 앞뒤의 화이트 스페이스 삭제<br/>
메소드 체인(Method chain)<br/>

```js
var value = "  value  " ;
console.log(value.length); >>> 8
console.log(value.trim().length); >>> 4

// 자체적으로 화이트 스페이스를 지우는 함수
```

<b>오브젝트(Object)에는 프로퍼티와 함수들이 들어있습니다.</b><br/>
<b>이때 new 생성자 함수에 의해 생성된 인스턴스를 object(소문자)라고도 합니다.</b>

<hr/>

## 🌟 함수 호출 구조

### toString()

|   구분   |       데이터(값)        |
| :------: | :---------------------: |
|   data   | 문자열, String 인스턴스 |
| 파라미터 |      사용하지 않음      |
|   반환   |        변환한 값        |

<br/>

data 위치의 값을 String 타입으로 변환<br/>
"123".toString();<br/>

> String 타입을 String 타입으로 변환하면 의미가 없다?

toString() 함수가 필요한 이유

```js
__proto__: toString(); // 빌트인 String 오브젝트의 toString()
__proto__: toString(); // 빌트인 object 오브젝트의 toString()
```

<br/>
그래서 대부분의 빌트인 오브젝트에 toString()과 valueOf()가 있습니다.

### JS 함수 호출 구조

우선, 데이터 타입으로

- 오브젝트를 결정하고
- 오브젝트의 함수를 호출합니다.

```js
var value = 123;
value.toString();

'123'.toString();
```

<br/>
toString(123)

- 123을 파라미터에 작성

```js
var result = toString(123);
console.log(result);

>>>
object Undefined

why?
/*
new String(123) 과 같이 생성자 함수를 통해 만들어준 String 인스턴스가 아닙니다.
따라서 String 오브젝트의 toString()을 사용할 수 없고,
Object 오브젝트에서 toString()을 부르게 됩니다.
*/
```

<hr/>

## 🌟 인덱스로 문자열 처리

### charAt()

|   구분   |       데이터(값)        |
| :------: | :---------------------: |
|   data   |        반환대상         |
| 파라미터 | 반환 기준 인덱스(Index) |
|   반환   |    인덱스 n번째 문자    |

인덱스의 문자를 반환

```js
code 1

var value = "sports";
console.log(value.chartAt(1));

>>> p

console.log(value[1]);

>>> p
```

<br/>

문자열 길이보자 인덱스가 크면 빈 문자열 반환 (null이 아님)

```js
code 2

var value = "sports";
console.log(value.charAt(12));

>>>
" "
```

<br/>

일반적으로 존재하지 않으면 undefined를 반환

```js
var value = "sports";
console.log(value[12]);

>>> undefined;
```

<br/>

undefined 또는 null 값이 아닌 " " 빈 문자열을 반환하는 것은 charAt()만의 특징입니다.

### indexOf()

|   구분   |           데이터(값)            |
| :------: | :-----------------------------: |
|   data   |            검색 대상            |
| 파라미터 |          검색할 문자열          |
|          | 검색 시작 위치, 디폴트 인덱스 0 |
|   반환   |             인덱스              |

<br/>

data 위치의 문자열에서 파라미터의 문자와 같은 첫 번째 인덱스를 반환<br/>
검색 기준

- 왼쪽에서 오른쪽으로 검색

```js
var value = "123123";

console.log(value.indexOf(2));
>>> 1

console.log(value.indexOf(23));
>>> 1
```

- 같은 문자가 없으면 -1 반환

```js
var value = "김선호"

console.log(value.indexOf("박"));
>>> -1

console.log(value.indexOf("김"));
>>> 0
```

<hr/>

## 🌟 문자열 연결, 대소문자 변환

### concat()

|   구분   |          데이터(값)           |
| :------: | :---------------------------: |
|   data   | 연결 시작 값, String 인스턴스 |
| 파라미터 | 연결 대상 opt, 다수 작성 가능 |
|   반환   |          연결한 결과          |

<br/>

data 위치의 값에

- 파라미터 값을 작성 순서로 연결하여 문자열로 반환

```js
var result = "sports".concat("축구");

console.log(result);

>>> sports축구
```

<br/>
String 인스턴스를 작성하면 프리미티브 값을 연결

### toLowerCase(), toUpperCase();

영 대문자를 소문자로 변환 <-> 영 소문자를 대문자로 변환

```js
var Upper = "ABC"
var Lower = "abc"

console.log(Upper.toLowerCase());
>>> abc

console.log(Lower.toUpperCase());
>>> ABC
```

<hr/>

## 🌟 문자열 추출

### substring()

### substr()

### slice()

|   구분   | 데이터(값)  |
| :------: | :---------: |
|   data   |  반환 대상  |
| 파라미터 | 시작 인덱스 |
|          |  끝 인덱스  |
|   반환   |    결과     |

<br/>

파라미터의 시작 인덱스부터 끝 인덱스 직전까지 반환

```js
var value = '012345678';

console.log(value.slice(1, 4));

>>> 123

console.log(value.slice(false, 4));

>>> 0123

// false, undefined, null, 빈 문자열은 0으로 간주
```

<hr/>

## 🌟 정규 표현식 사용 함수 🌟

### 🌟 match()

|   구분   |     데이터(값)      |
| :------: | :-----------------: |
|   data   |      매치 대상      |
| 파라미터 | 정규 표현식, 문자열 |
|   반환   |     [매치 결과]     |

<br/>

매치 결과를 배열로 반환

- 매치 대상에 정규 표현식 패턴을 적용하여 매치하고 매치 결과를 반환
- 문자열도 작성이 가능하나, js 엔진이 정규 표현식으로 변환하여 매치

```js
var value = 'Sports';
console.log(value.match(/s/));

>>>
[s]

console.log(value.match('spo'));
>>>
null

why?
/*
정규 표현식에서는 대소문자를 구분하므로 toLowerCase() 함수를 사용하여 소문자로 만들고 사용하는 것이 좋은 방법이다
*/
```

<hr/>

### 🌟 replace()

|   구분   |     데이터(값)      |
| :------: | :-----------------: |
|   data   |      치환 대상      |
| 파라미터 | 정규 표현식, 문자열 |
|          |   대체할 값, 함수   |
|   반환   |      치환 결과      |

<br/>

매치 결과를 파라미터에 작성한 값으로 대체하여 반환<br/>
두 번째 파라미터에 함수를 작성하면 먼저 함수를 실행하고, 함수에서 반환한 값으로 대체

```js
var value = 'abcabc';
console.log(value.replace('a', '바꿈'));
console.log(value.replace(/a/, '바꿈'));
console.log(value.replace(/a/g, '바꿈'));

>>>
바꿈bcabc
바꿈bcabc       //
바꿈bc바꿈bc
```

<hr/>

### 🌟 search()

|   구분   |     데이터(값)      |
| :------: | :-----------------: |
|   data   |      검색 대상      |
| 파라미터 | 정규 표현식, 문자열 |
|   반환   |    매치된 인덱스    |

<br/>

검색된 첫 번째 인덱스 반환

- 매치되지 않으면 -1 반환

```js
var value ="cbacba";
console.log(value.search(/a/));
console.log(value.search("K"));

>>>
2       // 매치된 가장 첫 번째 인덱스 값 반환
-1      // 매치되지 않으므로 -1 반환
```

<hr/>

### 🌟 split()

|   구분   |         데이터(값)          |
| :------: | :-------------------------: |
|   data   |          분리 대상          |
| 파라미터 | 분리자: 정규 표현식, 문자열 |
|          |           반환 수           |
|   반환   |            결과             |

<br/>

분리 대ㅐ상을 분리자로 분리하여 배열로 반환

```js
console.log("12_34_56".split("_"));

>>>
[12, 34, 56]

```

<br/>

분리자를 작성하지 않은 경우

```js
var value = "123";
console.log(value.split(""));

>>> [1, 2, 3]

console.log(value.split());
>>> [123]
```

<br/>

두 번째 파라미터에 반환 수를 작성

```js
var value = '12_34_56_78';
console.log(value.split('_', 3));

>>>
[12, 34, 56]  // 78은 반환되지 않음 (3개만 반환하려고 파라미터를 지정해줬기 때문)
```

<hr/>

<a href="../SECTION09/readme.md">다음 섹션으로</a>
