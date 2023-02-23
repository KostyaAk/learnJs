let messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
];

let readed = new WeakSet();

readed.add(messages[0]);
readed.add(messages[1]);
readed.add(messages[0]);

console.log(readed.has(messages[0]));
