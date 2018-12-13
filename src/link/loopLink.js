class LoopLink {
  constructor(value) {
    this.head = {};
    this.head.value = value || null;
    this.head.next = this.head;
  }

  getLinkLength() {
    let length = 0;
    if (this.head.value === null) { return length; }
    length += 1;
    let currentNode = this.head;
    while (currentNode.next !== this.head) {
      length += 1;
      currentNode = currentNode.next;
    }
    return length;
  }

  insert(singleLinkNode) {
    if (this.head.value === null) {
      this.head = singleLinkNode;
      this.head.next = this.head;
    }
    let currentNode = this.head;
    while (currentNode.next !== this.head) {
      currentNode = currentNode.next;
    }
    singleLinkNode.next = this.head;
    currentNode.next = singleLinkNode;
    return this.head;
  }

  find(index) {
    const length = this.getLinkLength();
    if (index === 0) { return this.head; }
    if (length < index - 1) { return false; }
    let currentNode = this.head;
    let count = 0;
    while (count < index - 1) {
      currentNode = currentNode.next;
      count += 1;
    }
    return currentNode;
  }
}

module.exports = LoopLink;
