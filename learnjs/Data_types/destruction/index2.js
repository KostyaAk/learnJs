let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let sum = 0;
  let man = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (sum < salary) {
      sum = salary;
      man = name;
    }
  }

  return man;
}

console.log(topSalary(salaries));
