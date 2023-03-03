const sumTo1 = (num) => {
  let res = 0;
  for (let i = 0; i <= num; i++) {
    res += i;
  }
  return res;
};
console.log(sumTo1(5));

const sumTo2 = (num) => {
  let res = 0;
  if (num === 1) return num;
  return num + sumTo2(num - 1);
};
console.log(sumTo2(5));

const sumTo3 = (num) => {
  if (num === 1) return num;
  return ((1 + num) / 2) * num;
};
console.log(sumTo3(5));
