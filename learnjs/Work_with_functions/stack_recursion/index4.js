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

const printList1 = (list) => {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
};
printList1(list);

const printList2 = (list) => {
  console.log(list.value);

  if (list.next) {
    printList2(list.next);
  }
};

printList2(list);
