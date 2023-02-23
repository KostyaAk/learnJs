const getAverageAge = (arr) => {
  let res = 0;
  arr.forEach((element) => {
    res += element.age;
  });
  return Math.floor(res / arr.length);
};

let vasya = { name: 'Вася', age: 26 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 29 };

let arr = [vasya, petya, masha];

console.log(getAverageAge(arr));
