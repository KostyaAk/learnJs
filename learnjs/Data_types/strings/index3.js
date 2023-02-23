const truncate = (str, len) => {
  if (str.length < len) return str;

  return str.slice(0, len - 1) + '...';
};

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('kostya', 10));
