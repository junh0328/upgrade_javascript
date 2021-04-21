/*
this의 값은 함수를 '호출하는 방법'에 의해 결정된다. (선언이 아닌 호출될 때)

호출한 놈 === 객체
(this) 
*/

var someone = {
  name: "Junhee Lee",
  whoAmI: function () {
    console.log(this);
  },
};

someone.whoAmI();

var what = someone.whoAmI;
what();
