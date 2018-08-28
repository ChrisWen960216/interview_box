const Node = require('./node');

class BST {
  constructor(key) {
    this.root = new Node(key);
  }

  insert(key) {
    const newNode = new Node(key);
    if (!this.root) {
      return this.root = newNode;
    }
    return this.insertNode(this.root, newNode);
  }

  insertNode(curNode, newNode) {
    const { key: curKey } = curNode;
    const { key: newKey } = newNode;
    if (curKey > newKey) {
      if (!curNode.left) {
        return curNode.left = newNode;
      }
      return this.insertNode(curNode.left, newNode);
    }
    if (!curNode.right) {
      return curNode.right = newNode;
    }
    return this.insertNode(curNode.right, newNode);
  }
}

module.exports = BST;
