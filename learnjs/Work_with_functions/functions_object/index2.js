function sum(a) {
  let summa = a;

  function chislo(num) {
    summa += num;
    return chislo;
  }

  chislo.toString = function () {
    return summa;
  };

  return chislo;
}

console.log(sum(1)(2) == 3); // 3
console.log(sum(5)(-1)(2) == 6); // 6
console.log(sum(6)(-1)(-2)(-3) == 7); // 0
