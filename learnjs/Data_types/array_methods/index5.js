const copySorted = (array) => {
  return array.slice().sort();
};

let arr = ['HTML', 'JavaScript', 'CSS'];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);
