function pow(x, n) {
  if (n < 1) return 'Input another value';
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(pow(3, 3));
console.log(pow(2, 4));
console.log(pow(1, 100));
