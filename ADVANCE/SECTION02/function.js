// function book() {
//   debugger;
//   console.log(title);
//   console.log(readBook);
//   console.log(getBook);

//   var title = 'JS BOOK';
//   function getBook() {
//     return title;
//   }
//   var readBook = function () {};
//   getBook();
// }

// book();

function book() {
  debugger;

  var title = 'JS BOOK';
  const getBook = function () {
    return title;
  };
  const readBook = function () {};
  getBook();

  console.log(title);
  console.log(readBook);
  console.log(getBook);
}

book();
