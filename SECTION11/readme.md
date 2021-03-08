## 🌟 Global 오브젝트

### Global 오브젝트 개요

모든 '<'script'>'를 통해 하나만 존재

- new 연산자로 인스턴스 생성 불가
- (하나만 존재하기 때문에 생성할 필요가 없음)
- 모든 코드에서 공유
- (파일이 달라도 프로퍼티의 값을 공유할 수 있다.)

이름은 있지만 오브젝트 실체가 없음<br/>
오브젝트를 작성(사용)할 수 없음<br/>

```js
console.log(Global.xxx) >>> x;

why? 실체가 없으므로 그냥 함수만 불러와 사용하면 된다.
```

### Global 오브젝트 함수, 변수

Global 오브젝트와 함수, 변수를 <b>Global 함수</b>, <b>Global 변수</b>라고 부름 <br/>
함수 안에 작성한 것

- 지역함수, 로컬함수라고 부름
- 지역 변수, 로컬 변수라고 부름

<hr/>

## Global 프로퍼티

프로퍼티 리스트

|     이름     |                        개요                        |
| :----------: | :------------------------------------------------: |
|      값      |
|     NaN      |                    Not-a-Number                    |
|   Infinity   |                     무한대 값                      |
|  undefined   |           undefined(값이 선언되지 않음)            |
|     함수     |
|   isNaN()    |      NaN 여부 NaN이면 true, 아니면 false 반환      |
| isInfinite() | Infinite 여부 Infinite이면 true, 아니면 false 반환 |
|  parseInt()  |                정수로 변환하여 반환                |
| parseFloat() |                실수로 변환하여 반환                |
| encodeURI()  |                     URI 인코딩                     |
| decodeURI()  |        encodeURI 함수의 인코딩 값을 디코딩         |

<br/>

글로벌 오브젝트는 인스턴스를 만들지 못하므로 모두 함수입니다.

<hr/>

## Global과 window 객체의 관계

글로벌과 window 오브젝트 주체<br/>

- 글로벌 오브젝트는 JS가 주체
- window 오브젝트는 window가 주체

주체는 다르지만, Global 오브젝트의 프로퍼티와 함수가 window 오브젝트에 설정됨

- 글로벌 오브젝트는 실체가 없어 어딘가에 저장되어야 하는데, window 객체가 대신 저장해준다.

<hr/>

## 정수, 실수 변환

### parseInt()

값을 정수로 변환하여 반환

```js
console.log(parseInt(123.56));  >>> 123
console.log(parseInt(24px));    >>> 24
console.log(parseInt("0012"));  >>> 12
console.log(parseInt());        >>> NaN
```

### parseFloat()

값을 실수로 변환하여 반환 <br/>

- JS는 기본적으로 실수로 처리하므로 실수로 변환하는 것이 의미가 없지만 문자열의 실수 변환은 의미가 있다.

```js
console.log(parseFloat('-123.456') + 7) >>> 117.456;
```

<hr/>

## 인코딩, 디코딩

### encodeURI()

URI를 인코딩하여 반환

- Uniform Resource Identifier
- 인코딩 제외 문자를 제외하고 "%16진수%16진수" 형태로 변환

인코딩 제외 문자

- 영문자, 숫자

```
# ; / ? : @ ^ = + , - _ . ! ~ * ()
```

- 프론트에서 사용자의 요청이 한글(문자 또는 문자열)일 경우, 한글을 파라미터로 넘겨줄 때 인코딩 시킨 다음 백엔드에서 디코딩해서 사용

### decodeURI()

인코딩을 디코딩하여 반환<br/>
파라미터에 encodeURI()로 인코딩한 문자열 작성

```js
const result = encodeURI("안녕하세요");

>>> %EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94
...

const DecodeResult = decodeURI(result);
>>> 안녕하세요
```

<hr/>

<a href="../SECTION12/readme.md">다음 섹션으로</a>
