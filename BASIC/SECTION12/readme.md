## 🌟 Array 오브젝트 (ES3)

### Array 오브젝트 개요

빌트인 오브젝트<br/>
Array(배열)형태

- [123, "ABC", "가나다"]
- 대괄호 안에 콤마로 구분하여 값 작성

배열 엘리먼트

- [123, "ABC"]에서 123, "ABC"
- 각각을 엘리먼트 또는 요소라고 부름

### 배열의 생성 방법

```js
case 1: new Array()로 작성
var book = new Array();
```

```js
case 2:  Array()로 작성
var book = Array();
```

```js
case 3: 대괄호로 작성
var book = [];

// 제일 일반적인 형태
```

어떤 생성 방법을 사용하던, 모든 변수는 배열의 프로토타입을 사용할 수 있음

### 엘리먼트 작성 방법

```js
var book = ['책1', '책2'];
```

대괄호 안에 콤마로 구분하여 다수 작성 가능 <br/>
String 타입은 큰따옴표, 작은따옴표 모두 가능 <br/>
JS의 모든 타입의 값, 오브젝트 사용 가능<br/>
값을 작성하지 않고 콤마만 작성하면 undefined가 설정됨<br/>

### 배열의 차원

대괄호 수에 따라 결정<br/>

- 1차원 배열

```js
var list = [12, 34, 56];
for (var k = 0; (k = list.length); k++) {
  console.log(list[k]);

  >>>
  12
  34
  56
}
```

- 2차원 배열

```js
var list = [[12, 34, 56]];
for (var k = 0; k = list.length; k++) {
  var one = list[k];
  for(var m = 0; m < one.length; m++>){
    console.log(one[m]);
  }

  >>>
  12
  34
  56
}
```

- 3차원 배열

<hr/>

## Array 오브젝트 프로퍼티 (ES3)

|       이름       |                               개요                               |
| :--------------: | :--------------------------------------------------------------: |
|   new Array()    |                          인스턴스 생성                           |
|     Array()      |                          인스턴스 생성                           |
|  Array 프로퍼티  |
|      length      |                     배열의 엘리먼트 수 반환                      |
| Array.prototype  |       (인스턴스를 만들었을 때, 생성되는 함수 및 프로퍼티)        |
|   constructor    |                              생성자                              |
|    unshift()     |                    배열 처음에 엘리먼트 삽입                     |
|      push()      |                     배열 끝에 엘리먼트 첨부                      |
|     concat()     |                       배열 끝에 값을 연결                        |
|     slice()      |                  안덱스 범위의 엘리먼트를 복사                   |
|      join()      |                엘리먼트와 분리자를 결합하여 반환                 |
|    toString()    |                엘리먼트를 문자열로 연결하여 반환                 |
| toLocaleString() |     엘리먼트를 지역화 문자로 변환하고 문자열로 연결하여 반환     |
|     shift()      |         첫 번째 엘리먼트를 삭제하고 삭제한 엘리먼트 반환         |
|      pop()       |         마지막 엘리먼트를 삭제하고 삭제한 엘리먼트 반환          |
|     splice()     | 엘리먼트를 삭제하고 새로운 엘리먼트를 삽입, 삭제한 엘리먼트 반환 |
|      sort()      |            엘리먼트 값을 Unidode 순서로 분류하여 반환            |
|    reverse()     |               엘리먼트 위치를 역순으로 바꾸어 반환               |

<hr/>

## Array 인스턴스 생성

### Array(), new Array()

Array 인스턴스 생성, 반환 <br/>
배열 생성 기준 <br/>

- 파라미터에 따라 배열 생성 기준이 다르다
- 파라미터를 작성하지 않으면 빈 배열로 생성
- 작성한 순서로 엘리먼트에 설정
- new Array(3)처럼 파라미터에 숫자를 작성하면 3개의 엘리먼트 생성
  > 값이 할당되어있지 않기 때문에 undefined 출력

```js
var list = new Array(3);
console.log(list);

>>>
[undefined, undefined, undefined]
```

- new Array()는 new 연산자에서 생성자 함수를 호출하여 인스턴스 생성
- Array()는 직접 생성자 함수를 호출하여 인스턴스 생성

<hr/>

## 엘리먼트 추가, 삭제 메커니즘

### 엘리먼트 추가

배열에 엘리먼트를 추가하는 방법

- 삽입할 위치에 인덱스 지정

```js
var value = [1, 2];
value[4] = 5;
console.log(value);

>>>
[1,2, undefined, undefined, 5]
```

- 표현식으로 인덱스 지정

```js
var value = [1.2];
value[value.length + 2] = 5;
console.log(value);

>>>
[1,2, undefined, undefined, 5]
```

### 엘리먼트 삭제 메커니즘

삭제된 인덱스에 undefined 설정

- 배열을 읽을 때 제외시켜야 합니다.
- 삭제를 해도 [1,2,3,4] >> [1,3,4] 가 되지 않습니다.
- [1, undefined, 3, 4 ]가 됩니다.

### delete 연산자

|  구분  |             데이터(값)              |
| :----: | :---------------------------------: |
| object |              매치 대상              |
| 인덱스 |            배열의 인덱스            |
|  반환  | 삭제 성공 : true, 삭제 실패 : false |

<br/>

var 변수는 삭제 불가

```js
var value = 123;
console.log(delete value);
>>>
false
```

글로벌 변수는 삭제 가능

```js
value = "글로벌"
console.log(delete value);
>>>
true
```

프로퍼티 {name: value} 삭제 방법

- 삭제할 프로퍼티 이름(key) 작성 (코드에서는 title)

```js
var book = {title : "책"};
console.log(delete book.title);
>>>
true
```

인덱스로 배열의 엘리먼트 삭제

```js
var value = [1,2,3,4];
console.log(delete value[1]);
console.log(value.length);
console.log(value);

>>>
true
4
[1, undefined, 3, 4]

// 엘리먼트는 삭제되지만, 배열의 크기가 줄어들지는 않습니다.
```

<hr/>

## 엘리먼트 삽입, 첨부

### unshift()

|   구분   |      데이터(값)       |
| :------: | :-------------------: |
|   data   |         기준          |
| 파라미터 | [item 1, item 2], opt |
|   반환   |   추가 후의 length    |

0 번 인덱스에 파라미터 값 삽입 <br/>
배열에 있던 엘리먼트는 뒤로 이동

```js
var value = [1,2];
value.unshift(345,67);
console.log(value);

>>>
[345, 67, 1, 2]
```

### push()

|   구분   |      데이터(값)       |
| :------: | :-------------------: |
|   data   |         기준          |
| 파라미터 | [item 1, item 2], opt |
|   반환   |   추가 후의 length    |

배열 끝에 파라미터 값을 첨부

```js
var value = [1, 2];
value.push(345,67);
console.log(value);

>>>
[1,2,345,67]
```

서버에서 데이터를 받아와 추가해줄 때 사용

## concat()

|   구분   |      데이터(값)       |
| :------: | :-------------------: |
|   data   |         기준          |
| 파라미터 | [item 1, item 2], opt |
|   반환   |       연결 결과       |

배열에 파라미터 값을 연결하여 반환

```js
var value = [1, 2];
var result = value.concat(3, 4);
console.log(result);
>>>
[1,2,3,4]
```

<hr/>

## 엘리먼트 복사

### slice()

|   구분   |      데이터(값)       |
| :------: | :-------------------: |
|   data   |         대상          |
| 파라미터 | [item 1, item 2], opt |
|   반환   |       연결 결과       |

배열의 일부를 복사하여 배열로 반환

- 첫 번째 파라미터의 인덱스부터 두 번째 인덱스 직전까지

```Js
var origin = [1,2,3,4,5];
var result = origin.slice(1,3); // 인덱스 1번부터 length 가 3개

>>> [2,3]

// 원본은 바뀌지 않음

console.log(origin);

>>> [1,2,3,4,5]
```

- true(1), false(0) 를 수자로 변환

```js
var value = [1, 2, 3, 4, 5];
value.slice(true, 3) >>> [2, 3]; // true = 1, value[3] 직전까지

value.slice(false, 3) >>> [1, 2, 3]; // false = 0, value[3] 직전까지
```

- 첫 번째 파라미터만 작성

```js
console.log([1,2,3,4].slice(1));

>>>
[2,3,4]
// index[1] 부터, 파라미터가 1개이므로 끝 인덱스 (opt) default: length 3
```

<hr/>

## 엘리먼트 값을 문자열로 변환

### join()

엘리먼트와 분리자를 하나씩 결합하여 문자열로 연결

- [0] 인덱스, 분리자, [1]인덱스, 분리자
- 마지막 엘리먼트는 분리자를 연결하지 않음

```js
var value = [1, 2, 3];
var result = value.join('##');
console.log(result);

>>>
1##2##3

console.log(typeOf(result));

>>> string

// join에 문자열을 넣음에 따라, 배열이 아닌 string 타입으로 바뀌게 됨
```

파라미터를 작성하지 않으면 콤마로 분리
파라미터에 빈 문자열 작성

```js
var value = [1,2,3];
var result = value.joun("");
console.log(result);

>>>
123

console.log(typeOf(result));
>>>
string

// ""라는 화이트 스페이스를 조인하면서 배열이 아닌 string 타입으로 바뀌게 됨
```

<hr/>

## 엘리먼트 삭제

### shift()

배열의 첫 번째 엘리먼트 삭제<br/>
삭제한 엘리먼트 값이 undefined로 남지 않고 완전히 삭제됨 <br/>

- length 값이 하나 줄어 듬

```js
var value = [1,2, 34];
console.log(value.shift());

>>> 1 // shift()된 요소(엘리먼트) 출력

console.log(value);

>>> [2, 34];
```

빈 배열이면 undefined가 반환 됨

### pop()

배열의 마지막 엘리먼트 삭제 <br/>
삭제한 엘리먼트 값이 undefined로 남지 않고 완전히 삭제됨

- length 값이 하나 줄어 듬

```js
var value = [1,2,34];

console.log(value.pop());
>>>> 34

console.log(value);
>>> [1,2]
```

빈 배열이면 undefined 반환

### splice()

엘리먼트를 삭제하고 삭제한 엘리먼트 반환<br/>
삭제한 위치에 세 번째 파라미터 삽입<br/>

```js
var value = [1,2,3,4,5];
console.log(value.splice(1,3)); // 1 > 인덱스, 3 삭제할 엘리먼트 수

>>> [2,3,4]

console.log(value); // 남은 value 값 출력
>>> [1,5]

```

<hr/>

### sort(분류)

엘리먼트 값을 Unicode 포인트 순으로 정렬

- 코드 포인트가 작으면 앞에 오고 크면 뒤에 옵니다

```js
var value = [4,2,3,1];
console.log(value.sort());
>>> [1,2,3,4];

console.log(value);
>>> [1,2,3,4]
```

sort 대상 배열도 정렬됨 (코드에서는 value)<br/>
값이 undefined 이면 끝으로 이동

<hr/>

<a href="../SECTION13/readme.md">다음 섹션으로</a>
