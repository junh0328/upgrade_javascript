(function printNow() {
  const today = new Date();

  const dayNames = [
    "(일요일)",
    "(월요일)",
    "(화요일)",
    "(수요일)",
    "(목요일)",
    "(금요일)",
    "(토요일)",
  ];
  // getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  // 12시간제로 변경
  hour %= 12;
  hour = hour || 12; // hour가 0이면 12를 재할당

  // 10미만인 분과 초를 2자리로 변경
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;

  console.log(now);

  // 1초마다 printNow 함수를 재귀 호출한다. 41.2.1절 "setTimeout / clearTimeout" 참고
  setTimeout(printNow, 1000);
})();
