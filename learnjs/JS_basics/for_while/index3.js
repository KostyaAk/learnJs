const count = 10;
loop: for (let i = 2; i < count; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue loop;
  }
  console.log(i);
}
