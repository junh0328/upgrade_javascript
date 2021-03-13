var book = {
  point: 100,
  member: {
    point: 200,
    get: function () {
      console.log(this === book.member);
      console.log(this.point);
    },
  },
};
book.member.get();
