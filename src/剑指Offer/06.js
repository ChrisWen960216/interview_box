function printListFromTailToHead(head) {
  const stack = [];
  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  const final = stack.pop();
  let _current = final;
  while (stack.length > 0) {
    if (stack.length === 1) {
      _current.next = stack.pop();
      _current = _current.next;
      _current.next = null;
    } else {
      _current.next = stack.pop();
      _current = _current.next;
    }
  }
  return final;
}

const link = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null,
    },
  },
};

console.log(printListFromTailToHead(link));
