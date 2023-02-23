let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let sum = 0;
if (salaries) {
  for (let key in salaries) {
    sum += salaries[key];
  }
}

console.log('sum = ', sum);
