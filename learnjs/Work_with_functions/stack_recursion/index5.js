const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const printRev1 = (list) => {
  let arr = [];
  let temp = list;

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
};

printRev1(list);

const printRev2 = (list) => {
  if (list.next) {
    printRev2(list.next);
  }

  console.log(list.value);
};

printRev2(list);
