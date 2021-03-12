## Argument

### Arguments 처리 구조

파라미터를 {key: value} 형태로 저장

- 파라미터 수만큼 0부터 인덱스 부여
- key로 사용
- 파라미터로 받은 값을 value에 설정
- {0: param1, 1: param2}

```js
function get() {
  return arguments;
}
console.log(get('A', 'B'));

>>>
{0: A, 1: B}
```

<br/>

이러한 구조를 Array-like라함

- key 값이 0부터 1씩 증가
- length 프로퍼티가 있어야 함
  > for 문으로 돌릴 수 있다.

### 엔진의 파라미터 처리

```js
var get = function (one) {
  return one;
};

console.log(get(77, 100));
>>>
77
```

1. get() 함수를 호출하면서

- 77과 100을 파라미터 값으로 넘겨 줍니다.

2. 넘겨받은 값을 함수의 파라미터 이름에 설정

- one : 77

3. Arguments 오브젝트를 생성합니다.
4. 넘겨받은 파라미터 수를

- Arguments 오브젝트의 length 프로퍼티에 생성

5. 넘겨받은 파라미터 수만큼 반복하면서

- 0부터 key로 하여 순서대로 파라미터 값을 설정
- {0 : 77}, {1 : 100} 형태

6. 함수의 초기화 단계에서 실행

```js
var get = function (one) {
  return one;
};

console.log(get(77, 100));  >>> 77

var get2 = function () {
  console.log('arguments 0 번째 인덱스 호출: ' + arguments[0]);
};

get2(77);   >>> arguments 0 번째 인덱스 호출: 77

var get3 = function () {
  console.log('arguments 1 번째 인덱스 호출: ' + arguments[1]);
};

get3(77, 100); arguments 1 번째 인덱스 호출: 100
```
