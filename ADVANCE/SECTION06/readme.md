## 논리적 정리

### 프로퍼티 연동 방지

1. Object에 Object를 할당하면 프로퍼티 값이 연동됩니다.

```js
var origin = { member: 100 };
var dup = origin;
dup.member = 200;
console.log(origin.member);

>>>
200


/*
오브젝트를 할당하면 값을 공유하는 성질
*/
```

2. 배열도 마찬가지로 연동됩니다.

```js
var origin = [1, 2, 3];
var dup = origin;
dup[1] = 200;
console.log(origin);

>>>
[1, 200, 3]
/*
배열도 마찬가지로 배열을 할당하면 값을 공유(연동)합니다.
*/
```

3. 연동 방지 : 프로퍼티 단위로 할당

```js
var origin = { member: 100 };
var dup = {};
for (var name in origin) {
  dup[name] = origin[name];
}
dup.member = 200;
console.log(origin.member);
console.log(dup.member);

>>>
100
200
```

<hr/>

## 클로저

function 오브젝트를 생성할 때 함수가 속한 스코프를 [[Scope]]에 설정하고 <br/>
함수가 호출되었을 때 [[Scope]]의 프로퍼티를 사용하는 메커니즘 <br/>
[[Scope]]의 설정과 사용 방법을 이해하면 클로저는 단지 논리적인 설명이다

### 클로저 논리 전개

```js
function book() {
  var point = 100;
  var getPoint = function (params) {
    point = point + param;
    return point;
  };
  return getPoint;
}
var obj = book();
console.log(obj(200));

>>>
300
```
