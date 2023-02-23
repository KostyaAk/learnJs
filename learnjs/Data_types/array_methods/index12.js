function unique(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    if (temp == arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];

console.log(unique(strings));
