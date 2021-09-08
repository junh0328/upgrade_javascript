# 자바스크립트 정리하기

```
① ELOQUENT JAVASCRIPT
② 인프런 강의(김영보)
③ 모던 자바스크립트 deep dive

를 바탕으로 만들어진 자바스크립트 스킬업 개념 정리입니다

처음에는 한 readme에 전부 작성하여 검색 (ctrl F)을 통해 모를 때마다 찾아보려 했으나,

너무 길어져서 가독성을 위해 섹션 별로 구분하였습니다.

섹션도 큰 차이는 없지만 같이 보면 좋은 방향으로 묶어두었습니다 😃
```

## 🔥 [velog에서 정리본 보기](https://velog.io/@junh0328/DEEP-DIVE-%ED%95%9C-%EC%9E%A5-%EC%9A%94%EC%95%BD-02.-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80)

## 목차

### 🔥 [섹션 1](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme.md)

- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#1%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D">프로그래밍</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#2%EC%9E%A5-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EB%9E%80">자바스크립트란?</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#3%EC%9E%A5-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD%EA%B3%BC-%EC%8B%A4%ED%96%89-%EB%B0%A9%EB%B2%95">자바스크립트 개발 환경과 실행 방법</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#4%EC%9E%A5-%EB%B3%80%EC%88%98">변수</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#5%EC%9E%A5-%ED%91%9C%ED%98%84%EC%8B%9D%EA%B3%BC-%EB%AC%B8">표현식과 문</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#6%EC%9E%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85">데이터 타입</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#8%EC%9E%A5-%EC%A0%9C%EC%96%B4%EB%AC%B8">제어문</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#9%EC%9E%A5-%ED%83%80%EC%9E%85%EB%B3%80%ED%99%98%EA%B3%BC-%EB%8B%A8%EC%B6%95-%ED%8F%89%EA%B0%80">타입변환과 단축 평가</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#10%EC%9E%A5-%EA%B0%9D%EC%B2%B4-%EB%A6%AC%ED%84%B0%EB%9F%B4">객체 리터럴</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#11%EC%9E%A5-%EC%9B%90%EC%8B%9C-%EA%B0%92%EA%B3%BC-%EA%B0%9D%EC%B2%B4-%EB%B9%84%EA%B5%90">원시 값과 객체 비교</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#12%EC%9E%A5-%ED%95%A8%EC%88%98">함수</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#13%EC%9E%A5-%EC%8A%A4%EC%BD%94%ED%94%84">스코프</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#14%EC%9E%A5-%EC%A0%84%EC%97%AD-%EB%B3%80%EC%88%98%EC%9D%98-%EB%AC%B8%EC%A0%9C%EC%A0%90">전역 변수의 문제점</a>
- <a href="https://github.com/junh0328/upgrade_javascript/tree/master/DEEPDIVE#15%EC%9E%A5-let,-const-%ED%82%A4%EC%9B%8C%EB%93%9C%EC%99%80-%EB%B8%94%EB%A1%9D-%EB%A0%88%EB%B2%A8-%EC%8A%A4%EC%BD%94%ED%94%84">let, const 키워드와 블록 레벨 스코프</a>

### 🔥 [섹션 2](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md)

- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#17%EC%9E%A5-%EC%83%9D%EC%84%B1%EC%9E%90-%ED%95%A8%EC%88%98%EC%97%90-%EC%9D%98%ED%95%9C-%EA%B0%9D%EC%B2%B4-%EC%83%9D%EC%84%B1">생성자 함수에 의한 객체 생성</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#18%EC%9E%A5-%ED%95%A8%EC%88%98%EC%99%80-%EC%9D%BC%EA%B8%89-%EA%B0%9D%EC%B2%B4">함수와 일급 객체</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#19%EC%9E%A5-%ED%94%84%EB%A1%9C%ED%86%A0%ED%83%80%EC%9E%85">프로토타입</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#20%EC%9E%A5-strict-mode">strict mode</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#21%EC%9E%A5-%EB%B9%8C%ED%8A%B8%EC%9D%B8-%EA%B0%9D%EC%B2%B4">빌트인 객체</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#22%EC%9E%A5-this">this</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme2.md#23%EC%9E%A5-%EC%8B%A4%ED%96%89-%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8">실행 컨텍스트</a>

### 🔥 [섹션 3](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme3.md)

- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme3.md#24%EC%9E%A5-%ED%81%B4%EB%A1%9C%EC%A0%80">클로저</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme3.md#25%EC%9E%A5-%ED%81%B4%EB%9E%98%EC%8A%A4">클래스</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme3.md#26%EC%9E%A5-ES6-%ED%95%A8%EC%88%98%EC%9D%98-%EC%B6%94%EA%B0%80-%EA%B8%B0%EB%8A%A5">ES6 함수의 추가 기능</a>

### 🔥 [섹션 4](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md)

- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md#27%EC%9E%A5-%EB%B0%B0%EC%97%B4">배열</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md#28%EC%9E%A5-Number">Number</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md#29%EC%9E%A5-Math">Math</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md#30%EC%9E%A5-Date">Date</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md#31%EC%9E%A5-RegExp">RegExp</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme4.md#32%EC%9E%A5-String">String</a>

### 🔥 [섹션 5](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme5.md)

- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme5.md#33%EC%9E%A5-Symbol">Symbol</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme5.md#34%EC%9E%A5-%EC%9D%B4%ED%84%B0%EB%9F%AC%EB%B8%94">이터러블</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme5.md#35%EC%9E%A5-%EC%8A%A4%ED%94%84%EB%A0%88%EB%93%9C-%EB%AC%B8%EB%B2%95">스프레드(...) 문법</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme5.md#36%EC%9E%A5-%EB%94%94%EC%8A%A4%ED%8A%B8%EB%9F%AD%EC%B2%98%EB%A7%81-%ED%95%A0%EB%8B%B9">디스트럭처링 할당(구조 분해 할당)</a>

### 🔥 [섹션 6](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme6.md)

- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme6.md#38%EC%9E%A5-%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B3%BC%EC%A0%95">브라우저 렌더링 과정</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme6.md#39%EC%9E%A5-DOM">DOM</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme6.md#40%EC%9E%A5-%EC%9D%B4%EB%B2%A4%ED%8A%B8">이벤트</a>

### 🔥 [섹션 7](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md)

- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md#41%EC%9E%A5-%ED%83%80%EC%9D%B4%EB%A8%B8">타이머</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md#42%EC%9E%A5-%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D">비동기 프로그래밍</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md#43%EC%9E%A5-Ajax">Ajax</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md#44%EC%9E%A5-REST-API">REST API</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md#45%EC%9E%A5-%ED%94%84%EB%A1%9C%EB%AF%B8%EC%8A%A4">Promise</a>
- <a href="https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme7.md#46%EC%9E%A5-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0%EC%99%80-async/await">제너레이터와 async/await</a>

### 🔥 [섹션 8](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme8.md)

- [에러처리](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme8.md#47%EC%9E%A5-%EC%97%90%EB%9F%AC%EC%B2%98%EB%A6%AC)
- [모듈](https://github.com/junh0328/upgrade_javascript/blob/master/DEEPDIVE/readme8.md#48%EC%9E%A5-%EB%AA%A8%EB%93%88)
