function Calcul() {
  this.operations = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = (str) => {
    let items = str.split(' ');
    let item1 = Number(items[0]);
    let item2 = Number(items[2]);
    let oper = items[1];

    if (isNaN(item1) || isNaN(item2) || !this.operations[oper]) {
      return NaN;
    }

    return this.operations[oper](item1, item2);
  };

  this.addMethod = (name, func) => {
    this.operations[name] = func;
  };
}

let c = new Calcul();
console.log(c.calculate('1 + 2'));
c.addMethod('*', (a, b) => a * b);
console.log(c.calculate('2 * 3'));
