const camel = (str) => {
  let temp = str.split('');
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === '-') {
      temp[i + 1] = temp[i + 1].toUpperCase();
      temp.splice(i, 1);
    }
  }
  return temp.join('');
};

console.log(camel('i-love-cola'));
console.log(camel('Color-and-width'));
