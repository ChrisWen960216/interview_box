function swapPairs(head) {
  if (!head || !head.next) return head;
  const nextHead = head.next.next;
  head.next.next = head;
  head = head.next;
  head.next.next = swapPairs(nextHead);
  return head;
}

module.exports = { swapPairs };
