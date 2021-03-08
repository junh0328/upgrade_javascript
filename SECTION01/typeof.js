var point = new Number(3);

console.log(typeof point);
// valueOf()는 빌트인 오브젝트인 Number 오브젝트의 프로토타입 함수 중 하나이다.
/**
 * 프로토타입은 new 생성자를 통해 인스턴스를 만들었을 때 Number 객체의 인스턴스(3)를
 * 변수 point에 할당하면서 사용이 가능해진다.
 * */
console.log(point.valueOf());
console.log((StringPoint = point.toString()));
console.log((value = StringPoint + '6'));

console.log(typeof StringPoint);

var point2 = null;

console.log(typeof point2);
