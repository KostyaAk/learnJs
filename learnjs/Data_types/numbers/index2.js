const randInt = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};

console.log(randInt(1, 5));
console.log(randInt(1, 5));
console.log(randInt(1, 5));
