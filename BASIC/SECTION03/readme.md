# SECTION 3, 문장

## 🌟 문장 (Statement)

### 문장

형테 : ;(세미콜론)<br/>
문장을 끝나게 하는 역할<br/>

```js
var book = '책';
```

### 화이트 스페이스

사람 눈에 보이지 않는 문자<br/>

- enter, space bar, ...
- 가독성을 위한 것
- 문자마다 기능을 갖고 있음

### 블록 (중괄호)

형태 : { 문장 리스트 opt}<br/>
중괄호 { }

- 실행 그룹으로
- 블록 안의 모든 문장 실행 <br/>

문장 리스트 <br/>

- { } 안의 모든 문장
- 문장 리스트 작성은 선택 ( 필수 x)

<hr/>

## 🌟 if, debugger

### if

형태 <br/>

- if(표현식) 문장1
- if(표현식) 문장1 else 문장2

조건에 따른 처리<br/>

- 먼저 표현식을 평가
- 평가 결과를 true/false로 변환
- true 이면 문장1 실행
- false이면 문장2 실행

### debugger

debugger 위치에서 실행을 멈춥니다.

- 브라우저의 개발자 도구 창이 열려있을 때만 멈춤
- ES5부터 지원

```js
'use strict'; // 더 강력한 자바스크립트 문법을 지원해줘라

debugeer;

var sports = '스포츠';
console.log(sports);
```

<hr/>

## 🌟 while, do-while

### while

표현식의 평가 결과가 false가 될 때까지 문장을 반복하여 실행

```js
var k = 1;

while (k < 3) {
  console.log(k);
  k++;
}

...
>>> 1, 2
```

### do-while

처리 방법은 while문과 같지만, do 문을 먼저 실행

```js
var k = 0;
do {
  console.log('do:', k);
  k++;
} while (k < 3);
{
  console.log('while:', k);
}

...

>>>
do: 0
do: 1
do: 2
while: 3
```

평가 결과가 false일 때(k = 3 이 되어 더이상 조건문이 true가 아닐 때), do 문으로 넘어가지 않고, console.log('while')문으로 넘어감

<hr/>

## 🌟 for 문

형태: for(초깃값opt; 비교opt; 증감opt) { 문장 }<br/>
2번째의 비교 표현식의 평가 결과가 true인 동안 문장을 반복 실행<br/>

```js
for(var k=0; k<2; k++){
  console.log(k);
}

>>>
0
1
```

### for() 옵션

형태: for(초깃값opt; 비교opt; 증감opt) { 문장 }<br/>
형태에서 opt는 생략 가능<br/>

```js
case1 : 증감 생략

for(var k =0; k<3){
  console.log(k);
  k++;
}

...
>>>
0
1
2

```

<hr/>

## 🌟 break, continue

### break

형태:<br/>
break; <br/>
break 식별자;<br/>

<br/>

반복문 종료<br/>

```js
for(var k =0; k=5; k++){
  if(k % 2 == 1){
    break;
  }
}
console.log(k);
...
>>> 1

1은 조건(2로 나눴을 때 나머지가 1인 수, 홀수)을 만족하는 가장 빠른 정수이다.
```

<br/>
for, for~in, while, do~while, switch 문 등에서 사용

### continue

형태:<br/>
continue; <br/>
continue 식별자;<br/>

<br/>

반복문의 처음으로 분기<br/>

```js
for(var k=0; k<5; k++){
  if(k===2 || k ===3){
    continue;
  }
  console.log(k);
}
...
>>>
0
1
4
console.log를 만나지 못하고 반복문으로 되돌아가게 하는 'continue'
```

<hr/>

## 🌟 strict 모드

형태: "use strict"<br/>
엄격하게 JS 문법 사용의 선언 <br/>
작성한 위치부터 적용<br/>
ES5부터 지원

<hr/>
<a href="../SECTION04/readme.md">다음 섹션으로</a>
