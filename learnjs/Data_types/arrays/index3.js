const maxSum = (arr) => {
  let max = 0,
    current = 0;
  for (let item of arr) {
    current += item;
    max = Math.max(max, current);
    if (current < 0) current = 0;
  }
  return max;
};

console.log(maxSum([-1, 100, -2, 4, 5, -9, 20]));
