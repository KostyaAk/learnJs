const getCount = (obj) => {
  let count = 0;
  for (let key of Object.keys(obj)) {
    count++;
  }
  return count;
};
let user = {
  name: 'John',
  age: 30,
};

console.log(getCount(user));
