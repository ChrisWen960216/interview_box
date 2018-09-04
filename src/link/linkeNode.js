class singleLinkNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class doubleLinkNode {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}


module.exports = {
  singleLinkNode, doubleLinkNode,
};
