class SingleLink {
  constructor(singleLinkNode) {
    this.head = singleLinkNode;
    this.head.next = null;
    this.length = 0;
  }

  insertNode(singleLinkNode) {
    const newNode = singleLinkNode;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length += 1;
  }

  removeNode(value) {
    if (this.head.value === null) { return false; }
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }
    if (!currentNode.next) { return false; }
    currentNode = currentNode.next.next;
    this.length -= 1;
    return true;
  }

  printLink() {
    const currentNode = this.head;
    while (currentNode.value !== null) {
      console.log(currentNode.value, '=>');
    }
  }
}

module.exports = SingleLink;
