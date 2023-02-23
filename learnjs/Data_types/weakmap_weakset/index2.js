let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readed = new WeakMap();

readed.set(messages[0], new Date());

console.log(readed.has(messages[0]));
