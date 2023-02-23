const aclean = (arr) => {
  let map = new Map();

  for (let item of arr) {
    let format_word = item.toLowerCase().split('').sort().join('');
    map.set(format_word, item);
  }
  return Array.from(map.values());
};

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

console.log(aclean(arr));
