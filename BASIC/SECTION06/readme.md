# SECTION 6, 빌트인

## 🌟 빌트인(Built-in)

Built-in이란?

- 값 타입, 연산자, 오브젝트(object)를 사전에 만들어 놓은 것
  > 여기서 오브젝트란 해당 오브젝트가 가지는 프로퍼티와 함수들을 의미한다.
- (JS 코드를 처리하는 영역에)

장점

- 사전 처리를 하지 않고 즉시 사용
- 자바스크립트 특징

빌트인 값 타입

- Undefined, Null, Boolean, Number, String, Object

빌트인 연산자

- +, - , \*, /, %, ++, --, new 등

### 빌트인 오브젝트

빌트인 Number 오브젝트

- 123과 같은 숫자, 상수, 지수를 처리하는 오브젝트
- 여기서 오브젝트는 소문자 <b>object</b>

### object ?

- (이미 키 : 값 상태로 만들어져 있음)
- data를 처리하는데 중점을 두고 있다.

```
빌트인 Number 오브젝트는
Number 처리를 위한 프로퍼티의 집합입니다.
즉 Number 처리를 위한 오브젝트입니다.

JS에서 Number 처리를 위한 프로퍼티를 사전에 만들어 제공하므로
Number.length로 1 이라는 정수를 구할수 있으며,
Number.isNaN()으로 함수를 호출할 수 있습니다.
```

<hr/>

## 🌟 빌트인 오브젝트 유형

빌트인 오브젝트는 총 11개의 오브젝트가 존재합니다. <br/>

Number 오브젝트 <br/>

- 123과 같은 숫자, 상수, 지수
  <br/>

String 오브젝트 <br/>

- "abc"와 같은 문자열, 분리, 연결
  <br/>

Boolean 오브젝트 <br/>

- true, false
  <br/>

Object 오브젝트 <br/>

- {key: value} 형태
  <br/>

Array 오브젝트 <br/>

- [1, 2, "A", "가나다"] 형태
  <br/>

Function 오브젝트 <br/>

- function abc(){...} 형태
  <br/>

Math 오브젝트 <br/>

- abs(), round() 등의 수학 계산
  <br/>

Date 오브젝트 <br/>

- 연월일, 시분초
  <br/>

JSON 오브젝트 <br/>

- [{"name" : "value"}] 형태
- 서버와 데이터 송수신에 사용
  <br/>

RegExp 오브젝트 <br/>

- ^, $와 같은 정규 표현식
  <br/>

Global 오브젝트 <br/>

- 소스 파일 전체에서 하나만 존재
- 모든 코드에서 공유, 접근 가능
- 전역 객체라고도 하며, 뉘앙스에 차이가 있다
  <br/>

<hr/>
<a href="../SECTION07/readme.md">다음 섹션으로</a>
