const filterRange = (array, a, b) => {
  let res = array.filter((item) => item >= a && item < b);
  return res;
};

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);

console.log(arr);
