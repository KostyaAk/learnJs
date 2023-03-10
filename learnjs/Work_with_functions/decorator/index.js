const spy = (foo) => {
  const dec = (...args) => {
    dec.calls.push(args);
    return foo.apply(this, args);
  };

  dec.calls = [];

  return dec;
};

let work = (a, b) => {
  console.log(a + b); // произвольная функция или метод
};

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
