const val = (price) => {
  return Number(price.slice(1));
};

console.log(val('$120') === 120);
