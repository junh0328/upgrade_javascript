const user = {
  name: "junhee",
  age: 25,
  address: {
    zipCode: 14063,
    city: "Anyang",
  },
};

const {
  address: { city },
} = user;

console.log(city);
