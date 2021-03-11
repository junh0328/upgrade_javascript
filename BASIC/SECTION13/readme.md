## 🌟 Array 오브젝트 (ES5)

### 프로퍼티 리스트(ES5)

|        이름         |                              개요                               |
| :-----------------: | :-------------------------------------------------------------: |
|     Array 함수      |
|      isArray()      |         배열 여부 반환, 배열이면 true 아니면 false 반환         |
|   Array.prototype   |
|      indexOf()      |            지정한 값에 일치하는 엘리먼트 인덱스 반환            |
|    lastIndexOf()    |             indexOf()와 같으며, 마지막 인덱스 반환              |
|   forEach() ✔️ ℹ️   |                배열을 반복하면서 콜백 함수 실행                 |
|    every() ✔️ ℹ️    |             반환 값이 false일 때까지 콜백 함수 실행             |
|    some() ✔️ ℹ️     |             반환 값이 true일 때까지 콜백 함수 실행              |
|   filter() ✔️ ℹ️    | 콜백 함수에서 true를 반환한 엘리먼트 반환 (false인 값은 없어짐) |
|     map() ✔️ ℹ️     |          콜백 함수에서 반환한 값을 새로운 배열로 반환           |
|   reduce() ✔️ ！    |      콜백 함수의 반환 값을 파라미터 값으로 사용 (왼 > 오)       |
| reduceRight() ✔️ ！ |     reduce()와 같음 단, 배열의 끝에서 앞으로 진행 (오 > 왼)     |

<br/>
- ✔️ 배열을 반복할 때마다 콜백 함수를 실행<br/>
- ℹ️ 파라미터를 3개를 넘겨줌 <br/>
- ！ 파라미터가 4개

### isArray()

체크 대상이 배열이면 true, 아니면 false<br/>
isArray()는 함수이다. (isArray 와 같은 프로퍼티가 아님)

```js
console.log(Array.isArray([1, 2])); >>> true;
console.log(Array.isArray(123)); >>> false;

//isArray()가 함수인 이유

console.log(typeOf[1,2]) >>> object

// 타입오브 연산자로 배열임을 확인할 수 없기 때문에 배열임을 확인하기 위해 isArray() 함수가 추가됨
```

<hr/>

## index 처리 메소드

### indexOf()

파라미터 값과 같은 엘리먼트의 인덱스를 반환

- 왼쪽에서 오른쪽으로 검색
- 값이 같은 엘리먼트가 있으면 검색 종료
- 데이터 타입까지 체크 (===)

```js
var value = [1, 2, 3, 4, 5];
console.log(value.indexOf(2)); >>> 1;

// why? value 값이 2인 인덱스 value[1] 을 반환해줬다.
```

```js
var value = [1, 2, 3, 4, 5];
console.log(value.indexOf('-2')); >>> -1

// why? value에 -2라는 값이 없고, 타입까지 비교하기 때문에 string 타입이 없어 -1을 반환함
```

파라미터가 두 개일 경우, 두 번째 파라미터의 인덱스부터 검색

<hr/>

## 콜백 함수를 가진 Array 메소드

### 지금부터 다루는 7개의 메소드는 모두 콜백 함수를 호출합니다. 키워드는 시멘틱과 독립성입니다.

### forEach()

배열의 엘리먼트를 하나씩 읽어 가면서 콜백 함수 호출 <br/>
콜백 함수 파라미터 (엘리먼트(요소) 값, 인덱스, 배열 전체)<br/>

```js
code 1: 콜백 함수의 파라미터 element, index, all
var list = ["A", "B", "C"];
list.forEach(function(el, index, all){
  console.log(el + ":" + index + ":" + all);
});

>>>
A:0:A,B,C
B:0:A,B,C
C:0:A,B,C
```

break, continue 사용 불가 (무조건 배열 전체를 돌아야 함)<br/>
콜백 함수 분리<br/>

```js
code 2: 콜백 함수 분리
var list = ["A", "B", "C"];
var func1 = function(el, index, all){
  console.log(el + ":" + index + ":" + all);
};
list.forEach(func1);

>>>
A:0:A,B,C
B:0:A,B,C
C:0:A,B,C

/*
콜백함수 func1을 따로 분리하여 forEach()문을 사용
이렇게 forEach()문처럼 콜백 함수와 관계없이 바로 뜻을 확인할 수 있는 것을 시멘틱이라 합니다.
*/

```

this로 오브젝트 참조가능 <br/>

```js
code 3: this 오브젝트 참조

var list = [1,2];
var fn = function(el, index, all){
  console.log(el + this.ten);
};
list.forEach(fn, {ten : 10});

>>>
11
12

// this 를 통해 {ten : 10} 프로퍼티를 forEach()문의 파라미터로 넣어주었다.
```

<hr/>

## for() 문과 forEach()의 차이

### forEach()

forEach()를 시작할 때 반복 범위 결정<br/>
엘리먼트를 추가하더라도 처리하지 않음<br/>

```js
var list = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    list.push('AB');
  }
  console.log(el);
};
list.forEach(fn);

>>>
1
2
3

/*
1 2 3 AB 라고 생각할 수 있지만, 시작할 때 이미 인덱스가 3개로 범위가 정해졌기 때문에 추가하더라도 반영되지 않습니다.
forEach()문의 특징입니다.
*/
```

현재 인덱스보다 큰 인덱스의 값을 변경하면 변경된 값을 사용<br/>

```js
var list = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    list[2] = 345;
  }
  console.log(el);
};
list.forEach(fn);

>>>
1
2
345

/*
code 1과 달리 index 내의 변화는 변경이 가능하다.
list[2] 현재 존재하는 인덱스와 값이 있기 때문에, 이를 변경하였고
결과적으로 element가 변화됐음을 알 수 있다.
*/
```

현재 인덱스보다 큰 인덱스의 엘리먼트를 삭제하면 배열에서 삭제되므로, 반복에서 제외됨

- 추가는 처리하지 않지만, 삭제는 반영된다.

### for() 와 forEach()

forEach()는 시멘틱 접근이다. (코드를 읽어보지 않더라도 어떤 의미인지 알아야 함)

- 처음부터 끝까지 반복한다는 시맨틱
- 반복 중간에 끝나지 않는다는 시멘틱

for()는 함수 코드를 읽어야 알 수 있다

- break, continue가 있기 때문에 무조건 반복하는 것이 아니다
- 조건에 따라 나올 수 있기 때문에

forEach()는 반복만 하며 콜백 함수에서 기능을 처리한다. <br/>

forEach()는 인덱스 0부터 시작

- for()와 같이 인덱스 증가 값을 조정할 수 없음

```js
for(var k = 2; ... ; k++){
  과 같이 초기 시작 인덱스를 정해줄 수 없다는 의미
}
```

<hr/>

## true, false를 반환하는 메소드

### every(), some()

서로 정 반대되는 의미를 가지기 때문에 한 번에 처리함<Br/>
forEach()처럼 시멘틱 접근

- false를 반환할 때까지 콜백 함수 호출
- 즉, false가 반환되면 반복 종료
- false를 반환하지 않으면 true 반환

```js
var value = [20, 10, 30, 40];
var fn = function (el, index, all) {
  console.log(el);
  return el > 15;     // 10을 만나는 순간 false가 되기 때문에 더이상 진행하지않고 나옴
};
var result = value.every(fn);
console.log('결과', result);  // 콘솔창에 '결과'를 찍게됨
>>>

20
10
결과 : false
```

false가 되는 조건이 배열의 앞에 있을 때 효율성이 높다.

<hr/>

## filter(), map()

### filter()

forEach()처럼 시멘틱 접근이다<br/>
배열의 엘리먼트를 하나씩 읽어가면서 콜백 함수에서 true를 반환하면 현재 읽은 엘리먼트를 반환<br/>
조건에 맞는 엘리먼트를 추려낼 때 유용하다.

```js
var value = [10, 20, 30, 40];
var fn = function (el, index, all) {
  return el > 15;
};
var result = value.filter(fn);

console.log(result);

>>>
[20, 30, 40]

/*
return 문이 포함된 콜백함수의 조건에 맞게 filter링되었다.
조건문이 true인 값만 거르고 false를 제거한다.
*/
```

### map()

forEach()처럼 시맨틱 접근<br/>
배열의 엘리먼트를 하나씩 읽어가면서 콜백 함수에서 반환한 값을 새로운 배열에 첨부하여 반환

```js
var value = [10, 20, 30];
var fn = function (el, index, all) {
  return el + this.num1;
};
var point = { num1: 100 };
var result = value.map(fn, point);

>>>

110
120
130
```

<hr/>

<a href="../SECTION14/readme.md">다음 섹션으로</a>
