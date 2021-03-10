## 🌟 JSON 오브젝트

### JSON 오브젝트 개요

JavaScript Object Notation

- 빌트인 오브젝트
- new 연산자로 인스턴스 생성 불가
  <br/>

JSON 주요 기능

- 데이터 송수신의 변환 기준
  > XML 에서 JSON 으로 차차 변화
- 텍스트이므로 전송 속도가 빠르다
  > XML은 파일이기 때문에 상대적으로 무거웠음
- 파일 확장자: .json, .txt 도 사용 가능

<br/>

JS 데아터 타입 지원

- 다른 언어도 사용하지만, 완전하게 같지 않을 수도 있음

### stringify()

JS 타입을 JSON 타입의 문자열로 변환

- JSON.stringify() 형태로 호출

### 1. 파라미터가 하나일 때

```js
code 1: 큰 따옴표 안에 작성됨

var value = { book: '책', title: 123 };

var result = JSON.stringify(value);
console.log(result);

>>>
{"book" : "책", "title" : 123 }
```

```js
code 2: 배열 변환

var value = { 'book', '책', 123};
var result = JSON.stringify(value);
console.log(result);

>>>
["book", "책", 123]
```

```js
code 3 : 특수한 값 변환

console.log(JSON.stringify([Infinity, NaN, null]));
console.log(JSON.stringify([true, false]));

>>>
[null, null, null]
[true, false]

/*
Infinity, NaN, null 은 null로 변환됩니다.
true, false는 변환하지 않습니다.
*/
```

```js
code 4: undefined 변환

console.log(JSON.stringify(undefined));
console.log(JSON.stringify([undefined]));
console.log(JSON.stringify({ value : undefined }));

>>>
undefined
[null]
{}

/*
값이 하나면 그대로 변환
undefined가 배열 안에 있으면 null로 변환
프로퍼티 값이면 해당 프로퍼티를 제외시킴 >>> {key: value}의 프로퍼티 전체를 제외
*/
```

### 2. 파라미터가 두 개일 때

```js
code 1 : 두 번째 파라미터에 함수 작성

var data = { book: '책', point: 65 };
function replace(key, value) {
  return key === 'point' ? 11 : value;
}

var result = JSON.stringify(data, replace);
console.log(result);
>>>
{"book": "책", "point" : 11}
```

```js
code 2: 두 번째 파라미터에 배열 작성

var data = { book: '책', point: 65, amount : 90 };
var result = JSON.stringify(data, ['book', 'amount']);
console.log(result);

>>>
{"book" : "책", "amount" : 90}
/*
stringify() 의 두 번쨰 파라미터 배열에 포함된 프로퍼티{key: value}만 출력합니다.
*/
```

### 2. 파라미터가 세 개일 때

```js
code 1: 세 번째 파라미터에 줄 분리 작성

var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data, "", '\n');
console.log(result);

>>>
{
  "sports" : "soccer",
  "time" : 90
}
```

```js
code 2: 들여쓰기 숫자 작성

var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data, "", 4); // 세 번째 파라미터에 숫자는 들여쓰기 자릿수입니다.
console.log(result);

>>>
{
  "sports" : "soccer",
  "time": 90
}

```

<hr/>

## JSON 타입 파싱 ( parse( ) )

JSON 타입을 JS 타입으로 변환

```js
code 1 : JSON 값이 숫자일 때,

var value= "123";
try {
  var result = JSON.parse(value);
} catch(e){
  console.log("JSON 파싱 에러");
}
console.log(result);
console.log(typeof result);

>>>
123
number
/*
- JS 엔진에 의해 " " 문자열로 작성되었더라도 number 타입으로 파싱해줍니다.
- 이는 JS의 특징입니다.
- 또한 try{} catch{} 문으로 감싸주는 이유는
- 일반적으로 JSON.parse()를 사용하는 경우가 서버나 JSON으로 작성된 API문서를 가져올 떄이기 때문에
- 처음 넘어올 때 오류가 발생하지 않는지 try/catch 문으로 감싸주는 것이 좋습니다.
*/
```

```js
code 2 : JSON 타입이 true, false 일 때

var value = true;
var result = JSON.parse(value);
console.log(result);
console.log(typeof result;)

>>>
true
boolean
```

```js
code 3: 배열에 작성

var value = ['ABC', '가나', '12'];
var result = JSON.parse(value);
console.log(result);
>>>
['ABC', '가나', '12']
// 배열에 작성된 String 타입의 숫자는 숫자로 변환하지 않습니다.
```

```js
code 4: Object 에 작성

var value = {"point" : "123"};
var result = JSON.parse(value);
console.log(result);

>>>
{point: "123"}
// 일반적인 형변환과 같이 Object 안에 작성된 String 타입의 숫자는 변환하지 않습니다.
```
