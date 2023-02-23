const ask = (question, yes, no) => {
  if (question) yes();
  else no();
};

ask(
  'Do you agree?',
  () => console.log('You agree'),
  () => console.log('You disagree with task')
);
