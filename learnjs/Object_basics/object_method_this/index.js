const calculator = {
  a: 5,
  b: 3,
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

console.log(calculator.sum());
console.log(calculator.mul());
