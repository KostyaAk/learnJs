const fib = (n) => {
  let prev2 = 1;
  let prev1 = 1;
  for (let i = 3; i <= n; i++) {
    let cur = prev2 + prev1;
    prev2 = prev1;
    prev1 = cur;
  }
  return prev1;
};

console.log(fib(7));
