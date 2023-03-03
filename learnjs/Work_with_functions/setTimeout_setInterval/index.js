const printNum = (from, to) => {
  let cur = from;

  let timerId = setInterval(() => {
    console.log(cur);
    if (cur == to) {
      clearInterval(timerId);
    }
    cur++;
  }, 1000);
};

printNum(2, 5);

function printNumRec(from, to) {
  let cur = from;

  setTimeout(function go() {
    console.log(cur);
    if (cur < to) {
      setTimeout(go, 1000);
    }
    cur++;
  }, 1000);
}

// использование:
printNumRec(5, 10);
