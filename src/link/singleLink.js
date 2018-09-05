class SingleLink {
  constructor(singleLinkeNode) {
    this.head = singleLinkeNode;
    this.head.next = null;
  }

  insertNode(singleLinkeNode) {
    const newNode = singleLinkeNode;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  printLink() {
    const currentNode = this.head;
    while (currentNode.value !== null) {
      console.log(currentNode.value, '=>');
    }
  }
}

module.exports = SingleLink;
