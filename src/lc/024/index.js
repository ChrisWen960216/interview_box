function swapPairs(head) {
  if (!head || !head.next) return head;
  const nextHead = head.next.next;
  head.next.next = head;
  head = head.next;
  head.next.next = swapPairs(nextHead);
  return head;
}


const _list = {
  val: 1,
  next: {
    val: 2,
    next: null,
    // next: {
    //   val: 3,
    //   next: {
    //     val: 4,
    //     next: null,
    //   },
    // },
  },
};

swapPairs(_list);

module.exports = { swapPairs };
