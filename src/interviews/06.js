function printListFromTailToHead(head) {
  const stack = [];
  let current = head;
  while (current) {
    stack.push(current);
    current = current.next;
  }
  const final = stack.pop();
  console.log(final, stack);
  while (stack.length > 0) {
    if (stack.length === 1) {
      const _head = stack.pop();
      _head.next = null;
      final.next = _head;
    } else {
      final.next = stack.pop();
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
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

console.log(printListFromTailToHead(link));
