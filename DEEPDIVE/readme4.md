# 모던 자바스크립트 Deep Dive

## 목차

- [27장 배열](#27장-배열)
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md">다음 섹션으로</a>

## 27장 배열

### 27.1 배열이란?

<p><b>배열(array)는 여러 개의 값을 순차적으로 나열한 자료구조다.</b> 배열은 사용 빈도가 매우 높은 가장 기본적인 자료구조다. 자바스크립트는 배열을 다루기 위한 유용한 메서드를 다수 제공한다.</p>

```js
const arr = ["apple", "banana", "orange"];
```

<p><b>배열이 가지고 있는 값을 요소(element)</b>라고 부른다. 자바스크립트의 모든 값은 배열의 요소가 될 수 있다. 즉, 원시값은 물론 객체, 함수, 배열 등 자바스크립트에서 값으로 인정하는 모든 것은 배열의 요소가 될 수 있다. 배열의 요소는 배열에서 자신의 위치를 나타내는 0 이상의 정수인 인덱스(index)를 갖는다. 인덱스는 배열의 요소에 접근할 때 사용한다. 대부분의 프로그래밍 언어에서 인덱스는 0부터 시작한다.</p>

<p>요소에 접근할 때는 대괄호 표기법 [ ]을 사용한다. 대괄호 내에는 접근하고 싶은 요소의 인덱스를 지정한다. </p>

```js
arr[0]; // -> 'apple'
arr[1]; // -> 'banana'
arr[2]; // -> 'orange'
```

<p>배열은 요소의 개수, 즉 배열의 길이를 나타내는 length 프로퍼티를 갖는다.</p>

```js
arr.length; // -> 3
```

<p>배열은 ① index 와 ② length 프로퍼티를 갖기 때문에 for 문을 통해 순차적으로 요소에 접근할 수 있다.</p>

```js
// 배열의 순회
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 'apple' 'banana' 'orange'
}
```

<p><b>자바스크립트에 배열이라는 타입은 존재하지 않는다. 배열은 객체 타입이다.</b></p>

```js
typeof arr; // -> object
```

<p>배열은 ① 배열 리터럴 ② Array 생성자 함수 ③ Array.of ④ Array.from 메서드로 생성할 수 있다. 배열의 생성자 함수는 Array이며, 배열의 프로토타입 객체는 Array.prototype이다. Array.prototype은 배열을 위한 빌트인 메서드를 제공한다.</p>

```js
const arr = [1, 2, 3];

arr.constructor === Array; // -> true (arr의 생성자가 Array 생성자 함수이니?)
Object.getPrototypeOf(arr) === Array.prototype; // -> true
```

<p>배열은 객체지만 일반 객체와는 구별되는 독특한 특징이 있다.</p>

|      구분       |           객체            |     배열      |
| :-------------: | :-----------------------: | :-----------: |
|      구조       | 프로퍼티 키와 프로퍼티 값 | 인덱스와 요소 |
|    값의 참조    |        프로퍼티 키        |    인덱스     |
|    값의 순서    |             X             |       O       |
| length 프로퍼티 |             X             |       O       |

<br/>

<p>일반 객체와 배열을 구분하는 가장 명확한 차이는 <b>① 값의 순서와 ② length 프로퍼티</b>다. 인덱스로 표현되는 값의 순서와 length 프로퍼티를 갖는 배열은 반복문을 통해 순차적으로 값에 접근하기 적합한 자료구조다. 배열의 장점은 처음부터 순차적으로 요소에 접근할 수도 있고, 마지막부터 역순으로 요소에 접근할 수도 있으며, 특정 위치부터 순차적으로 요소에 접근할 수도 있다는 것이다. 이는 배열이 인덱스, 즉 값의 순서와 length 프로퍼티를 갖기 때문에 가능한 것이다.</p>

### 27.2 자바스크립트 배열은 배열이 아니다

<p><b>자료구조(data structure)</b>에서 말하는 배열은 <b>동일한 크기의 메모리 공간이 빈틈없이 연속적으로 나열된 자료구조를 말한다.</b> 즉, 배열의 요소는 하나의 데이터 타입으로 통일되어 있으며 서로 연속적으로 인접해 있다. 이러한 배열은 <b>밀집 배열(dense array)</b>이라 한다.</p>

<img width="500" src="./images/33_1.jpg" alt="밀집 배열">

<p>이처럼 일반적인 의미의 배열은 각 요소가 동일한 데이터 크기를 가지며, 빈틈없이 연속적으로 이어져 있으므로 다음과 같이 인덱스를 통해 단 한 번의 연산으로 임의의 요소에 접근<b>(암의 접근(random access, 시간 복잡도 O(1)))</b>할 수 있다. 이는 매우 효율적이며, 고속으로 동작한다.</p>

```
검색 대상 요소의 메모리 주소  = 배열의 시작 메모리 주소 + 인덱스 * 요소의 바이트 수
```

<p>각 요소가 8바이트인 메모리 주소가 1000에서 시작하는 배열을 생각해 보자.</p>

- 인덱스가 0인 요소의 메모리 주소 : 1000 + 0 \* 8 = 1000
- 인덱스가 1인 요소의 메모리 주소 : 1000 + 1 \* 8 = 1008
- 인덱스가 2인 요소의 메모리 주소 : 1000 + 2 \* 8 = 1016

<p>이처럼 배열은 인덱스를 통해 효율적으로 요소에 접근할 수 있다는 장점이 있다. <b>하지만 정렬되지 않은 배열에 특정한 요소를 검색하는 경우 배열의 모든 요소를 처음부터 특정 요소를 발견할 때까지 차례대로 검색해야 한다.(선형 검색 linear search, 시간 복잡도 O(n))</b></p>

```js
// 선형 검색을 통해 배열(array)에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고, 존재하지 않으면 -1을 반환한다.
function linearSearch(array, target) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] === target) return i;
  }

  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 3)); // 2
console.log(linearSearch([1, 2, 3, 4, 5, 6], 0)); // -1
```

<p>또한 배열에 요소를 삽입하거나 삭제하는 경우 배열의 요소를 연속적으로 유지하기 위해 요소를 이동시켜야 하는 단점도 있다.</p>

<img width="500" src="./images/33_2.jpg" alt="배열 요소의 삽입과 삭제">

<p>자바스크립트의 배열은 지금까지 살펴본 자료구조에서 말하는 일반적인 의미의 배열과 다르다. <b>즉, 배열의 요소를 위한 각각의 메모리 공간은 동일한 크기를 갖지 않아도 되며, 연속적으로 이어져 있지 않을 수도 있다. 배열의 요소가 연속적으로 이어져 있지 않는 배열을 희소 배열(sparse array)이라 한다.</b></p>

<p>이처럼 자바스크립트의 배열(희소 배열)은 엄밀히 말해 일반적인 의미의 배열이 아니다. <b>자바스크립트의 배열은 일반적인 배열의 동작을 흉내 낸 특수한 객체다.</b> 자바스크립트 배열은 인덱스를 나타내는 무자열을 프로퍼티 키로 가지며, length 프로퍼티를 갖는 특수한 객체다. <b>자바스크립트 배열의 요소(element)는 사실 프로퍼티 값({ key:value })이다.</b> 자바스크립트에서 사용할 수 있는 모든 값은 객체의 프로퍼티 값이 될 수 있으므로 어떤 타입의 값이라도 배열의 요소가 될 수 있다.</p>

```js
const arr = [
  "string",
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [],
  {},
  function () {},
];
```

<p>즉 ① 자바스크립트 배열은 인덱스로 배열 요소에 접근하는 경우에는 일반적인 배열보다 느리지만 ② 특정 요소를 검색하거나 요소를 삽입 또는 삭제하는 경우에는 일반적인 배열보다 빠르다. 자바스크립트 배열은 <b> 인덱스로 접근하는 경우의 성능 대신 특정 요소를 탐색하거나 배열 요소를 삽입 또는 삭제하는 경우의 성능을 선택한 것이다.</b></p>

### 27.3 length 프로퍼티와 희소 배열

<p>length 프로퍼티는 요소(element)의 개수, 즉 배열의 길이를 나타내는 0이상의 정수를 값으로 갖는다. length 프로퍼티의 값은 빈 배열일 경우 0이며, 빈 배열이 아닐 경우 가장 큰 인덱스에 1을 더한 것과 같다.</p>

```js
console.log([].length); // -> 0
console.log([1, 2, 3].length); // -> 3
```

<p>length 프로퍼티의 값은 배열에 요소를 추가하거나 삭제하면 자동 갱신된다.</p>

```js
const arr = [1, 2, 3];
console.log(arr.length); // 3

// 요소 추가
arr.push(4);
// 요소를 추가하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr.length); // 4

// 요소 삭제
arr.pop();
// 요소를 삭제하면 length 프로퍼티의 값이 자동 갱신된다.
console.log(arr.length); // 3
```

<p>length 프로퍼티 값은 요소의 개수, 즉 배열의 길이를 바탕으로 결정되지만 <b>임의의 숫자 값을 명시적으로 할당할 수도 있다.</b> 그럴 경우 배열의 길이가 줄어든다.</p>

```js
const arr = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값인 5보다 작은 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// 배열의 길이가 5에서 3으로 줄어든다.
console.log(arr); // [1, 2, 3]
```

<p>더 큰 값을 할당하는 경우 length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지 않는다.</p>

```js
const arr = [1];

// 현재 length 프로퍼티 값인 1보다 큰 숫자 값 3을 length 프로퍼티에 할당
arr.length = 3;

// length 프로퍼티 값은 변경되지만 실제로 배열의 길이가 늘어나지는 않는다.
console.log(arr.length); // 3
console.log(arr); // [[ 1, <2 empty items> ]
```

<p>값이 없이 비어 있는 요소를 위해 메모리 공간을 확보하지 않으며 빈 요소를 생성하지도 않는다.</p>

```js
console.log(Object.getOwnPropertyDescriptors(arr));
/*
{
  '0': {value: 1, writable: true, enumerable: true, configurable: true},
  length: {value: 3, writable: true, enumerable: false, configurable: false}
}
*/
```

<p>이처럼 <b>배열의 요소가 연속적으로 위치하지 않고 일부가 비어 있는 배열을 희소 배열이라 한다.</b> 자바스크립트는 희소 배열을 문법적으로 허용한다. 하지만, 희소 배열은 사용하지 않는 것이 좋다. 희소 배열은 연속적인 값의 집합이라는 배열의 기본적인 개념과 맞지 않으며, 성능에도 좋지 않은 영향을 준다. 따라서 배열에는 같은 타입의 요소를 연속적으로 위치하는 것이 최선이다.</p>

### 27.4 배열 생성

<p>객체와 마찬가지로 배열 또한 다양한 생성 방식이 있다.</p>

```
① 배열 리터럴
② Array 생성자 함수
③ Array.of
④ Array.from
```

### ① 배열 리터럴

<p>배열 리터럴은 객체 리터럴과 달리 프로퍼티 키가 없고 값만 존재한다.</p>

```js
const arr = [1, 2, 3];
console.log(arr.length); // 3
```

<p>배열 리터럴에 요소(element)를 생략하면 희소 배열이 생성된다.</p>

```js
const arr = [1, , 3]; // 희소 배열

// 희소 배열의 length는 배열의 실제 요소 개수보다 언제나 크다.
console.log(arr.length); // 3
console.log(arr); // [1, empty, 3]
console.log(arr[1]); // undefined
```

### ② Array 생성자 함수

<p>Object 생성자 함수를 통해 객체를 생성할 수 있듯이 Array 생성자 함수를 통해 배열을 생성할 수도 있다. Array 생성자 함수는 전달된 인수의 개수에 따라 다르게 동작하므로 주의가 필요하다.</p>

```js

case 1 : 인수 1개

const arr = new Array(10);

console.log(arr); // [empty × 10]
console.log(arr.length); // 10

---------------------------------

case 2 : 인수 2개이상 또는 숫자가 아닌 경우

// 전달된 인수가 2개 이상이면 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3); // -> [1, 2, 3]

// 전달된 인수가 1개지만 숫자가 아니면 인수를 요소로 갖는 배열을 생성한다.
new Array({}); // -> [{}]

---------------------------------

case 3 : 인수 x
new Array(); // -> []

```

### ③ Array.of

<p>ES6에서 도입된 Array.of 메서드는 정적 메서드로서 전달된 인수를 요소로 갖는 배열을 생성한다. Array 생성자 함수아ㅗ는 다르게 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.</p>

```js
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
Array.of(1); // -> [1]

Array.of(1, 2, 3); // -> [1, 2, 3]

Array.of("string"); // -> ['string']
```

### ④ Array.from

<p><p>ES6에서 도입된 Array.from 메서드는 정적 메서드로서 유사 배열 객체 또는 이터러블ㄹ 객체를 인수로 전달받아 배열로 변환하여 반환한다. </p>

```js
// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: "a", 1: "b" }); // -> ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
Array.from("Hello"); // -> ['H', 'e', 'l', 'l', 'o']
```

### 27.5 배열 요소의 참조

<p>배열의 요소를 참조할 때는 대괄호 표기법을 사용한다.</p>

```js
const arr = [1, 2];

// 인덱스가 0인 요소를 참조
console.log(arr[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr[1]); // 2

// 인덱스가 2인 요소를 참조. 배열 arr에는 인덱스가 2인 요소가 존재하지 않는다.
console.log(arr[2]); // undefined
```

### 27.6 배열 요소의 추가와 갱신

<p>객체에 프로퍼티를 동적으로 추가할 수 있는 것처럼 배열에도 요소를 동적으로 추가할 수 있다.</p>

```js
const arr = [0];

// 배열 요소의 추가
arr[1] = 1;

console.log(arr); // [0, 1]
console.log(arr.length); // 2
```

<p>만약 현재 배열의 length 프로퍼티 값보다 큰 인덱스로 새로운 요소를 추가하면 희소 배열이 된다.</p>

```js
const arr = [1, 2];

arr[100] = 100;

console.log(arr); // [ 1, 2, <98 empty items>, 100 ]
console.log(arr.length); // 101
```

<p>인덱스 요소의 위치를 나타낼 때 정수 이외의 값을 인덱스처럼 사용하면 요소가 생성되는 것이 아니라 프로퍼티가 생성된다. 이때 추가된 프로퍼티는 length 값에 영향을 주지 않는다.</p>

```js
const arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr["1"] = 2;

// 프로퍼티 추가
arr["foo"] = 3;
arr.bar = 4;
arr[1.1] = 5;
arr[-1] = 6;

console.log(arr); // [1, 2, foo: 3, bar: 4, '1.1': 5, '-1': 6]

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(arr.length); // 2
```

### 27.7 배열 요소의 삭제

<p>자바스크립트에서의 배열은 사실 객체이기 때문에 배열의 특정 요소를 삭제하기 위해 delete 연산자를 사용할 수 있다.</p>

```js
const arr = [1, 2, 3];

// 배열 요소의 삭제
delete arr[1];
console.log(arr); // [1, empty, 3]

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr.length); // 3
```

<p>delete 연산자는 객체의 프로퍼티를 삭제한다ㅏ. 이때 배열은 희소 배열이 되며 length 프로퍼티 값은 변하지 않는다. 따라서 희소 배열을 만들지 않으면서 배열의 특정 요소를 완전히 삭제하려면 Array.prototype.splice 메서드를 사용한다.</p>

```js
const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소 수)
// arr[1]부터 1개의 요소를 제거
arr.splice(1, 1);
console.log(arr); // [1, 3]

// length 프로퍼티가 자동 갱신된다.
console.log(arr.length); // 2
```

### 27.8 배열 메서드

> <a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array">MDN: Array 메서드 살펴보기</a>

```
단순히 정리된 내용만 보고 유추하는 것이 아닌, 스스로 많이 활용해 봐야 합니다.
아직까지 써보지 않거나 약한 부분에 대해서 정리할 것 같습니다. MDN을 통해 하나하나씩 공부해 나갈 것을 추천드립니다.
```

<p>자바스크립트는 배열을 다룰 때 유용한 다양한 빌트인 메서드를 제공한다. Array 생성자 함수는 정적 메서드를 제공하며, 배열 객체의 프로토타입인 Array.prototype은 프로토타입 메서드를 제공한다. 배열 메서드는 결과물을 반환하는 패턴이 <b>두 가지</b>이므로 주의가 필요하다. <b>배열에는 ① 원본 배열을 직접 변경하는 메서드 ② 원본 배열을 직접 변경하지 않고 새로운 배열을 생성하여 반환하는 메서드</b>가 있다.</p>

```js
const arr = [1];

// push 메서드는 원본 배열(arr)을 직접 변경한다.
arr.push(2);
console.log(arr); // [1, 2]

// concat 메서드는 원본 배열(arr)을 직접 변경하지 않고 새로운 배열을 생성하여 반환한다.
const result = arr.concat(3);
console.log(arr); // [1, 2]
console.log(result); // [1, 2, 3]
```

<p>ES5부터 도입된 배열 메서드는 대부분 원본 배열을 직접 변경하지 않지만 초창기 배열 메서드는 원본 배열을 직접 변경하는 경우가 많다. 원본 배열을 직접 변경하는 메서드는 외부 상태를 직접 변경하는 <b>부수효과(side effect)</b>가 있으므로 사용할 때 주의해야 한다. 가급적 원본 배열을 직접 변경하지 않는 메서드를 사용하는 편이 좋다.</p>

<p>살펴 볼 배열 메서드 목록보기 (가장 많이 쓰이는 Array의 [정적/프로토타입] 메서드 목록)</p>

```
Array.isArray 🌟
Array.prototype.indexOf 🌟
Array.prototype.push (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.pop (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.unshift (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.shift (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.concat 🌟
Array.prototype.splice 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.slice 🌟
Array.prototype.join 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.reverse 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.fill 🌟 (원본 배열을 변경한다 - 부수효과 o)
Array.prototype.includes 🌟

1. push / pop
2. unshift / shift
위 메서드들은 스택/ 큐 구조로만 정리하고 넘어갈 것이다
```

<details>
<summary>심호흡하고 들어오기</summary>

### Array.isArray 🌟

<p>Array.isArray는 Array 생성자 함수의 정적 메서드다. 앞서 살펴본 Array.of 와 Array.from 도 정적 메서드이다.</p>

```
Array.isArray 메서드는 전달된 인수가 배열이면 true, 배열이 아니면 false를 반환한다
```

```js
// true (truthy 한 값)
console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray([{ key: 1 }, { key: 2 }]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array(100)));

console.log("--------------------------------------------------");

// false (falsy 한 값)
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(1));
console.log(Array.isArray("Array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ 0: 1, length: 1 }));
```

### Array.prototype.indexOf 🌟

<p>indexOf 메서드는 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.</p>

```
원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환핟다
원본 배열에 인수로 전달한 요소가 존재하지 않으면 -1을 반환한다.
```

```js
const arr = [1, 2, 2, 3];

// 배열 arr에서 요소 2를 검색하여 첫 번째로 검색된 요소의 인덱스를 반환한다.
arr.indexOf(2); // -> 1
// 배열 arr에 요소 4가 없으므로 -1을 반환한다.
arr.indexOf(4); // -> -1
// 두 번째 인수는 검색을 시작할 인덱스다. 두 번째 인수를 생략하면 처음부터 검색한다.
arr.indexOf(2, 2); // -> 2

/* indexOf 메서드는 배열에 특정 요소가 존재하는지 확일할 때 유용하다.*/

const foods = ["apple", "banana", "orange"];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (foods.indexOf("orange") === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods.push("orange");
}

console.log(foods); // ["apple", "banana", "orange"]
```

<p>indexOf 메서드 대신 Array.prototype.includes 메서드를 사용하면 가독성이 더 좋다.</p>

### Array.prototype.includes 🌟

<p>ES7에서 도입된 includes 메서드는 배열 내에 특정 요소가 포함되어 있는지 확인하여 true 또는 false를 반환한다.</p>

```
첫 번째 인수로 검색할 대상을 지정한다
두 번째 인수로 검색을 시작할 인덱스를 전달할 수 있다. (기본값은 0)
```

```js
const foods = ["apple", "banana"];

// foods 배열에 'orange' 요소가 존재하는지 확인한다.
if (!foods.includes("orange")) {
  // foods.includes("orange") 는 false 이므로 ! 연산자를 통해 해당 결과를 true로 바꿔 블록문 내부를 실행한다
  // foods 배열에 'orange' 요소가 존재하지 않으면 'orange' 요소를 추가한다.
  foods.push("orange");
}

console.log(foods); // ["apple", "banana", "orange"]
```

### Array.prototype.concat 🌟

<p>concat 메서드는 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다. 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다. 원본 배열은 변경되지 않는다.</p>

```js
const arr1 = [1, 2];
const arr2 = [3, 4];

// 배열 arr2를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 인수로 전달한 값이 배열인 경우 배열을 해체하여 새로운 배열의 요소로 추가한다.
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4]

// 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(3);
console.log(result); // [1, 2, 3]

// 배열 arr2와 숫자를 원본 배열 arr1의 마지막 요소로 추가한 새로운 배열을 반환한다.
result = arr1.concat(arr2, 5);
console.log(result); // [1, 2, 3, 4, 5]

// 원본 배열은 변경되지 않는다.
console.log(arr1); // [1, 2]
```

<p>concat 메서드는 ES6의 스프레드(...)문법으로 대체할 수 있다.</p>

```js
let result = [1, 2].concat([3, 4]);
console.log(result); // [1, 2, 3, 4]

// concat 메서드는 ES6의 스프레드 문법으로 대체할 수 있다.
result = [...[1, 2], ...[3, 4]];
console.log(result); // [1, 2, 3, 4]
```

<p>결론적으로 push/unshift 메서드와 concat 메서드를 사용하는 대신 ES6의 스프레드 문법을 일관성 있게 사용하는 것을 권장한다.</p>

### Array.prototype.splice 🌟

<p>splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다.</p>

```
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

```
① start: 배열의 변경을 시작할 인덱스입니다. 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정됩니다.
② deleteCount: 원본 배열의 요소를 제거하기 시작할 인덱스인 요소의 개수입니다. 0인 경우 아무런 요소도 제거되지 않습니다.
③ items: 제거한 위치에 삽입한 요소들의 목록입니다. 생략할 경우 원본 배열에서 요소들을 제거하기만 합니다
```

<p>하나도 제거하지 않고, 2번 인덱스에 "drum"과 "guitar" 추가</p>

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum", "guitar");

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// removed is [], no elements removed
```

<p>3번 인덱스에서 한 개 요소 제거</p>

```js
var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed is ["mandarin"]
// myFish is ["angel", "clown", "drum", "sturgeon"]
```

<p>0번 인덱스에서 두 개 요소 제거하고 "parrot", "anemone", "blue" 추가</p>

```js
var myFish = ["angel", "clown", "trumpet", "sturgeon"];
var removed = myFish.splice(0, 2, "parrot", "anemone", "blue");

// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed is ["angel", "clown"]
```

<p>배열의 특정 요소를 제거하려면 indexOf 메서드를 통해 특정 요소의 인덱스를 취득한 다음 splice 메서드를 이용합니다</p>

```js
const arr = [1, 2, 3, 1, 2];

// 배열 array에서 item 요소를 제거한다. item 요소가 여러 개 존재하면 첫 번째 요소만 제거한다.
function remove(array, item) {
  // 제거할 item 요소의 인덱스를 취득한다.
  const index = array.indexOf(item);

  // 제거할 item 요소가 있다면 제거한다.
  if (index !== -1) array.splice(index, 1);

  return array;
}

console.log(remove(arr, 2)); // [1, 3, 1, 2]
console.log(remove(arr, 10)); // [1, 3, 1, 2]
```

### Array.prototype.slice 🌟

<p>slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환합니다. 원본 배열이 변겨오디지 않으며, 이미 존재하는 배열(new Array(100))에서 일부를 복사하여 새로운 값으로 가공할 때 유용한 메서드입니다. slice 메서드는 두 개의 매개변수를 갖습니다</p>

```
① start: 복사를 시작한 인덱스입니다. 음수인 경우 배열의 끝에서의 인덱스를 나타냅니다
② end: 복사를 종료할 인덱스입니다. end에 해당되는 요소는 복사되지 않습니다 (그 전까지만 복사)
```

```js
const arr = [1, 2, 3];

// arr[0]부터 arr[1] 이전(arr[1] 미포함)까지 복사하여 반환한다.
arr.slice(0, 1); // -> [1]

// arr[1]부터 arr[2] 이전(arr[2] 미포함)까지 복사하여 반환한다.
arr.slice(1, 2); // -> [2]

// 원본은 변경되지 않는다.
console.log(arr); // [1, 2, 3]
```

<p>arr[1] 이후의 모든 요소를 복사하여 반환하기</p>

```js
const arr = [1, 2, 3];

// arr[1]부터 이후의 모든 요소를 복사하여 반환한다.
arr.slice(1); // -> [2, 3]
```

<p>새로운 원본 배열의 복사본을 생성하여 반환하기</p>

```js
const arr = [1, 2, 3];

// 인수를 모두 생략하면 원본 배열의 복사본을 생성하여 반환한다.
const copy = arr.slice();
console.log(copy); // [1, 2, 3]

/* 얕은 복사 (shallow copy) */
console.log(copy === arr); // false 서로 다른 메모리 주소(참조 값)를 가지고 있기 때문에 (얕은 복사)
console.log(copy[0]);
console.log(arr[0]);
console.log(copy[0] === arr[0]); // true 해당 원시 값을 비교하면 같음
```

### Array.prototype.join 🌟

<p>join 메서드는 원본 배열의 모든 요소를 문자열로 변환한 후, 인수로 전달받은 문자열, 즉 <b>구분자(separator)</b>로 연결한 문자열을 반환한다. 구분자는 생략 가능하며 기본 구분자는 콤마(',')다.</p>

```js
const arr = [1, 2, 3, 4];

// 기본 구분자는 ','이다.
// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 기본 구분자 ','로 연결한 문자열 타입을 반환한다.
console.log(arr.join()); // -> '1,2,3,4';

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 빈문자열로 연결한 문자열 타입을 반환한다.
console.log(arr.join("")); // -> '1234'

// 원본 배열 arr의 모든 요소를 문자열로 변환한 후, 구분자 ':'로 연결한 문자열 타입을 반환한다.
console.log(arr.join(":")); // -> '1:2:3:4'

console.log(arr); // -> [1, 2, 3, 4] 원본 배열은 유지된다
```

### Array.prototype.reverse 🌟

<p>reverse 메서드는 원본 배열의 순서를 반대로 뒤집는다. <b>이때 원본 배열이 변경된다.(부수효과 o)</b></p>

```js
const arr = [1, 2, 3];
const result = arr.reverse();

// reverse 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [3, 2, 1]
// 반환값은 변경된 배열이다.
console.log(result); // [3, 2, 1]
```

### Array.prototype.fill 🌟

<p>ES6에 도입된 fill 메서드는 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다. 이때 원본 배열이 변경된다. (부수효과 o)</p>

```js
const arr = [1, 2, 3];

// 인수로 전달 받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
arr.fill(0);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [0, 0, 0]
```

<p>두 번째 인수로 요소 채우기를 시작할 인덱스를 전달할 수 있다.</p>

```js
const arr = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다.
arr.fill(0, 1);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0]
```

<p>세 번째 인수로 요소 채우기를 멈출 인덱스를 전달할 수 있다.</p>

```js
const arr = [1, 2, 3, 4, 5];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 3 이전(인덱스 3 미포함)까지 요소로 채운다.
arr.fill(0, 1, 3);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0, 4, 5]
```

<p>fill 메서드로 요소를 채울 경우 모든 요소를 하나의 값만으로 채울 수밖에 없다는 단점이 있다. 하지만 콜백 함수를 통해 요소값을 만들면서 배열을 채울 수 있다.</p>

```js
/* faker, shortId 라이브러리를 사용하여 더미 사용자 만들기 */

const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: '이준희',
      },
      content: '첫 번째 게시글 #해시태그 #익스프레스',
    },
  ]

--------------------------------------------------------
initialState.mainPosts = initialState.mainPosts.concat(
  Array(20)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.paragraph(),
    }))
);
```

</details>

### stack 자료구조

<p>스택(stack)은 데이터를 마지막에 밀어 넣고, 마지막에 밀어 넣은 데이터를 먼저 꺼내는 후입 선출(LIFO) 방식의 자료구조다. 스택은 언제나 가장 마지막에 밀어 넣은 최신 데이터를 먼저 취득한다. 스택에 데이터를 밀어 넣는 것을 푸시(push)라 하고 스택에서 데이터를 꺼내는 것을 팝(pop)이라고 한다.</p>

<img width="500" src="./images/33_3.jpg" alt="스택">

### queue 자료구조

<p>큐(queue)는 데이터를 마지막에 밀어 넣고, 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 먼저 꺼내는 선입 선출(FIFO) 방식의 자료구조다. 스택은 언제나 마지막에 밀어 넣은 최신 데이터를 취득하지만 큐는 언제나 밀어 넣은 순서대로 취득한다.</p>

<img width="500" src="./images/33_4.jpg" alt="큐">

### 27.9 배열 고차 함수

<p>고차 함수(Higher-Order Function, HOF)는 함수를 인수로 전달받거나 함수를 반환하는 함수를 말한다. 자바스크립트의 함수는 일급 객체이므로 함수를 값처럼 인수로 전달할 수 있으며 반환할 수도 있다. 고차 함수는 외부 상태의 변경이나 가변(mutable) 데이터를 피하고 <b>불변성(immutability)</b>을 지향하는 <b>함수형 프로그래밍</b>에 기반을 두고 있다.</p>

<p><b>함수형 프로그래밍</b>은 순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을 제거하여 복잡성을 해결하고 변수의 사용을 억젲하여 상태 변경을 피하려는 프로그래밍 패러다임이다. 함수형 프로그래밍은 순수 함수를 통해 부수 효과를 최대한 억제하여 오류를 피하고 프로그램의 안정성을 높이려는 노력의 일환이라고 할 수 있다.</p>

```
Array.prototype.sort
Array.prototype.forEach
Array.prototype.map
Array.prototype.filter
Array.prototype.reduce
Array.prototype.some
Array.prototype.every
Array.prototype.find
Array.prototype.findIndex
Array.prototype.flatMap
```
