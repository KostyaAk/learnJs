const filterRangeInPlace = (array, a, b) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < a || array[i] > b) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
};

let arr = [5, 1, 2, 2, 9, 7, 8, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);
