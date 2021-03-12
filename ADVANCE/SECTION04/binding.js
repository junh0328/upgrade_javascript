function book() {
  debugger;
  var point = 100;
  function add() {
    point += 200;
  }
  function get() {
    return point;
  }
  add();
  console.log(get());
}

book();
