// 1. 计算链表长度
// 2. 找到前一个点，移掉对应点
// 边界值： 如果是开头，直接去掉

function removeNthFromEnd(head, n) {
  let _head = head;
  let length = 1;
  while (_head.next !== null) {
    _head = _head.next;
    length += 1;
  }

  let count = length - n - 1;
  let current = head;

  if (count < 0) {
    current = current.next;
    return current;
  }

  while (count !== 0) {
    current = current.next;
    count -= 1;
  }
  current.next = current.next.next;
  return head;
}

module.exports = { removeNthFromEnd };
