# 모던 자바스크립트 Deep Dive

## 목차

- [41장 타이머](#41장-타이머)

## 41장 타이머

### 41.1 호출 스케쥴링

함수를 명시적으로 호출하면 함수가 즉시 실행된다.

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 5)) >>> 7;
```

만약 <b>함수를 명시적으로 호출하지 않고 일정 시간이 경과된 이후에 호출되도록 함수 호출을 예약</b>하려면 <b>타이머 함수</b>를 사용한다. 이를 <b>호출 스케줄링(scheduling a call)</b>이라 한다.

자바스크립트는 ① 타이머를 생성할 수 있는 타이머 함수 setTimeout과 setInterval, ② 타이머를 제거할 수 있는 타이머 함수 clearTimeout과 clearInterval을 제공한다. 타이머 함수는 ECMAScript 사양에 정의된 빌트인 함수가 아니다. <b>브라우저 환경과 Node.js 환경에서 모두 전역 객체의 메서드로서 타이머 함수를 제공한다. 즉, 타이머 함수는 호스트 객체이다.</b>

setTimeout 함수가 생성한 타이머는 단 한 번 동작하고, setInterval 함수가 생성한 타이머는 반복 동작한다.

자바스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖기 때문에 두 가지 이상의 태스크(task)를 동시에 실행할 수 없다. 즉, 자바스크립트 엔진은 싱글 스레드로 동작한다. 이러한 이유로 타이머 함수는 비동기 처리 방식으로 동작한다.

### 41.2 타이머 함수

### setTimeout / clearTimeout

```js
const timeoutdId = setTimeout(func|code[, delay, param1, param2, ...]);
```

| 매개변수            | 설명                                                                                                                                                         |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| func                | 타이머가 만료된 뒤 호출될 콜백 함수 <br/> 콜백 함수 대신 코드를 문자열로 전달할 수 있다. 이때 코드 문자열은 타이머가 만료된 뒤 해석되고 실행된다.            |
| delay               | 타이머 만료 시간(밀리초(ms) 단위), setTimeout 함수는 delay 시간으로 단 한 번 동작하는 타이머를 생성한다. <br/> 인수 전달을 생략한 경우 기본 값 0이 지정된다. |
| param1, param2, ... | 호출 스케줄링된 콜백 함수에 전달해야 할 인수가 존재하는 경우 세 번째 이후의 인수로 전달할 수 있다.                                                           |

```js
// 1초(1000ms) 후 타이머가 만료되면 콜백 함수가 호출된다.
setTimeout(() => console.log("Hi!"), 1000);

// 세 번째 인수로 문자열 'Lee' 전달
setTimeout((name) => console.log(`Hi! ${name}.`), 1000, "Lee");

// 두 번째 인수(delay)를 생략하면 기본값 0이 지정된다.
setTimeout(() => console.log("Hello!"));
```

setTimeout 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머를 식별할 수 있는 고유한 id를 반환한다. setTimeout 함수가 반환한 타이머 id는 <b>① 브라우저 환경일 경우 숫자</b>이며 <b>② Node.js 환경인 경우 객체</b>다

setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소할 수 있다.

```js
const timerId = setTimeout(() => console.log("Hi!"), 1000);
console.log(timeId);

clearTimeout(timerId);
```

#### 브라우저에서 보기

<img width="400" src="./images/38_1.png" alt="setTimeout id값">

### setInterval/ clearInterval

setInterval 함수는 두 번째 인수로 전달받은 시간(ms, 1/1000초)으로 <b>반복 동작하는 타이머를 생성한다.</b> setInterval의 첫 번째 인수인 콜백 함수는 두 번째 인수로 전달받은 시간이 경과할 때마다 반복 실행되도록 <b>호출 스케줄링된다.</b>

```js
const timeoutdId = setInterval(func|code[, delay, param1, param2, ...]);
```

setInterval 함수는 생성된 타이머를 식별할 수 있는 고유한 타이머 id를 반환한다. Node.js 환경인 경우 객체를 반환한다.

```js
let count = 1;

const timeoutId = setInterval(() => {
  console.log(count); // 1 2 3 4 5

  if (count++ === 5) clearInterval(timeoutId);
}, 1000);

console.log("timeoutId: ", timeoutId);
```

### Node.js 환경에서 보기

<img width="400" src="./images/38_2.png" alt="setInterval id 객체">

### 41.3 디바운스와 스로틀

scroll, resize, mousemove 같은 이벤트는 짧은 시간 간격으로 연속해서 발생한다. 이러한 이벤트에 바인딩한 이벤트 핸들러는 과도하게 호출되어 성능에 문제를 일으킬 수 있다. <b>디바운스와 스로틀은 짧은 시간 간격으로 연속해서 발생하는 이벤트를 그룹화해서 과도한 이벤트 핸들러의 호출을 방지하는 프로그래밍 기법이다.</b>

```html
<!DOCTYPE html>
<html>
  <body>
    <button>click me</button>
    <pre>일반 클릭 이벤트 카운터    <span class="normal-msg">0</span></pre>
    <pre>디바운스 클릭 이벤트 카운터 <span class="debounce-msg">0</span></pre>
    <pre>스로틀 클릭 이벤트 카운터   <span class="throttle-msg">0</span></pre>
    <script>
      const $button = document.querySelector("button");
      const $normalMsg = document.querySelector(".normal-msg");
      const $debounceMsg = document.querySelector(".debounce-msg");
      const $throttleMsg = document.querySelector(".throttle-msg");

      const debounce = (callback, delay) => {
        let timerId;
        return (event) => {
          if (timerId) clearTimeout(timerId);
          timerId = setTimeout(callback, delay, event);
        };
      };

      const throttle = (callback, delay) => {
        let timerId;
        return (event) => {
          if (timerId) return;
          timerId = setTimeout(
            () => {
              callback(event);
              timerId = null;
            },
            delay,
            event
          );
        };
      };

      $button.addEventListener("click", () => {
        $normalMsg.textContent = +$normalMsg.textContent + 1;
      });

      $button.addEventListener(
        "click",
        debounce(() => {
          $debounceMsg.textContent = +$debounceMsg.textContent + 1;
        }, 500)
      );

      $button.addEventListener(
        "click",
        throttle(() => {
          $throttleMsg.textContent = +$throttleMsg.textContent + 1;
        }, 500)
      );
    </script>
  </body>
</html>
```

<img width="400" src="./images/timer.gif" alt="이벤트/디바운스/쓰로틀">

### 디바운스 (debounce)

디바운스(debounce)는 짧은 시간 간격으로 이벤트가 연속해서 발생하면 이벤트 핸들러를 호출(call)하지 않다가 일정 시간이 경과된 이후에 이벤트 핸들러가 한 번만 호출되도록 한다.

즉 <b>디바운스는 짧은 시간 간격으로 발생하는 이벤트를 그룹화해서 마지막에 한 번만 이벤트 핸들러가 호출되도록 한다.</b>

<img src="./images/debounce.gif" alt="디바운스">

[코드종님의 유튜브 강의](https://www.youtube.com/watch?v=TZCiv_c5q8s)

- 마지막 이벤트(space)를 바탕으로 일정 시간이 지나야 다시 호출할 수 있게 하는 것이 디바운스다
- 마지막 이벤트를 발생한 이후(빨간색) 일정 시간이 지나 회복된 상태(초록색)에서 새로운 이벤트를 다시 실행할 수 있다.

텍스트 입력 필드에서 input 이벤트가 짧은 시간 간격으로 연속해서 발생하는 경우, 디바운스를 통해 Ajax와 같은 요청의 빈도를 줄여 서버에 부하를 줄일 수 있다.

```html
<!DOCTYPE html>
<html>
  <body>
    <input type="text" />
    <div class="msg"></div>
    <script>
      const $input = document.querySelector("input");
      const $msg = document.querySelector(".msg");

      const debounce = (callback, delay) => {
        let timerId;
        // debounce 함수는 timerId를 기억하는 클로저를 반환한다.
        return (event) => {
          // delay가 경과하기 이전에 이벤트가 발생하면 이전 타이머를 취소하고
          // 새로운 타이머를 재설정한다.
          // 따라서 delay보다 짧은 간격으로 이벤트가 발생하면 callback은 호출되지 않는다.
          if (timerId) clearTimeout(timerId);
          timerId = setTimeout(callback, delay, event);
        };
      };

      // debounce 함수가 반환하는 클로저가 이벤트 핸들러로 등록된다.
      // 300ms보다 짧은 간격으로 input 이벤트가 발생하면 debounce 함수의 콜백 함수는
      // 호출되지 않다가 300ms 동안 input 이벤트가 더 이상 발생하면 한 번만 호출된다.
      $input.oninput = debounce((e) => {
        $msg.textContent = e.target.value;
      }, 300);
    </script>
  </body>
</html>
```

<img width="400" src="./images/debounce2.gif" alt="디바운스 예시">

검색 창에서 매 클릭 이벤트 (e.target.value) 마다 ajax 요청을 보내는 것보다 디바운스를 통해 일정 기간을 바탕으로 마지막 이벤트에 대한 ajax 요청을 보내는 것이 서버의 부하를 줄이는 데 더욱 효율적일 것이다.

### 쓰로틀 (throttle)

쓰로틀(throttle)은 짧은 시간 간격으로 이벤트가 연속해서 발생하더라도 일정 시간 간격으로 이벤트 핸들러가 최대 한 번만 호출되도록 한다.

스로틀은 짧은 시간 간격으로 연속해서 발생하는 이벤트를 그룹화해서 일정 시간 단위로 이벤트 핸들러가 호출되도록 호출 주기를 만든다.

<img src="./images/throttle.gif" alt="쓰로틀">

[코드종님의 유튜브 강의](https://www.youtube.com/watch?v=TZCiv_c5q8s)

- 이벤트를 지속적으로 발생시키고 있다고 하더라도 위에 설정된 300ms의 시간을 간격으로 두고 이벤트를 발생시킨다
- 쓰로틀에서 지정한 delay(300ms)의 사이에 발생하는 이벤트들은 무시된다

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        width: 300px;
        height: 300px;
        background-color: rebeccapurple;
        overflow: scroll;
      }

      .content {
        width: 300px;
        height: 1000vh;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="content"></div>
    </div>
    <div>
      일반 이벤트 핸들러가 scroll 이벤트를 처리한 횟수:
      <span class="normal-count">0</span>
    </div>
    <div>
      스로틀 이벤트 핸들러가 scroll 이벤트를 처리한 횟수:
      <span class="throttle-count">0</span>
    </div>

    <script>
      const $container = document.querySelector(".container");
      const $normalCount = document.querySelector(".normal-count");
      const $throttleCount = document.querySelector(".throttle-count");

      const throttle = (callback, delay) => {
        let timerId;
        // throttle 함수는 timerId를 기억하는 클로저를 반환한다.
        return (event) => {
          // delay가 경과하기 이전에 이벤트가 발생하면 아무것도 하지 않다가
          // delay가 경과했을 때 이벤트가 발생하면 새로운 타이머를 재설정한다.
          // 따라서 delay 간격으로 callback이 호출된다.
          if (timerId) return;
          timerId = setTimeout(
            () => {
              callback(event);
              timerId = null;
            },
            delay,
            event
          );
        };
      };

      let normalCount = 0;
      $container.addEventListener("scroll", () => {
        $normalCount.textContent = ++normalCount;
      });

      let throttleCount = 0;
      // throttle 함수가 반환하는 클로저가 이벤트 핸들러로 등록된다.
      $container.addEventListener(
        "scroll",
        throttle(() => {
          $throttleCount.textContent = ++throttleCount;
        }, 1000)
      );
    </script>
  </body>
</html>
```

<img width="500" src="./images/throttle2.gif" alt="쓰로틀">

- scroll 이벤트는 사용자가 스크롤할 때 짧은 시간 간격으로 연속해서 발생한다
- 이처럼 짧은 시간 간격으로 연속해서 발생하는 이벤트의 과도한 이벤트 핸들러의 호출을 방지하기 위해 throttle 함수를 통해 호출 주기를 만든다
- 쓰로틀은 scroll 이벤트 처리나 무한 스크롤 UI 구현 등에 유용하게 사용된다

### Lodash

[Lodash 공식문서](https://lodash.com/docs/4.17.15#debounce)

예제를 통해서는 throttle과 debounce에 관해 직접 선언하고 호출했지만, lodash 등을 통해서 더 안전한 코드를 제공받을 수 있다

### 레퍼런스

[코드종님의 유튜브 강의](https://www.youtube.com/watch?v=TZCiv_c5q8s)

> 해당 게임 예제는 유튜브 링크를 통해 들어가서 직접 구현해볼 수 있습니다
