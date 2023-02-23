const spam = (str) => {
  if (!str) return false;

  let cur = str.toLowerCase();
  return cur.includes('xxx') || cur.includes('viagra');
};

console.log(spam('XXXXXX'));
console.log(spam('XxXxxXXx'));
console.log(spam('aaaviagra'));
console.log(spam('vIaGrafff'));
console.log(spam('vIaGf'));
