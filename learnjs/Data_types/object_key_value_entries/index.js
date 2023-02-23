const sumSalaries = (obj) => {
  let sum = 0;
  for (let prop of Object.values(obj)) {
    sum += prop;
  }
  return sum;
};

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(sumSalaries(salaries));
