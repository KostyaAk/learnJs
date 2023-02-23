function Calculator() {
  this.a = 5;
  this.b = 10;
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();

console.log('Sum =' + calculator.sum());
console.log('Mul =' + calculator.mul());
