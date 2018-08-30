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

  getMinNode() {
    let minNode = this.root;
    if (minNode) {
      while (minNode && minNode.left) {
        minNode = minNode.left;
      }
      return minNode;
    }
    return null;
  }

  getMaxNode() {
    let maxNode = this.root;
    if (maxNode) {
      while (maxNode && maxNode.right) {
        maxNode = maxNode.right;
      }
      return maxNode;
    }
    return null;
  }

  remove(key) {
    return this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (!node) {
      return null;
    }

    if (node.key > key) {
      return node.left = this.removeNode(node.left, key);
    }
    if (node.key < key) {
      return node.right = this.removeNode(node.right, key);
    }
    if (node.left === null && node.right === null) {
      return node = null;
    }
    if (node.left === null && node.right) {
      return node = node.right;
    }
    if (node.right === null && node.left) {
      return node = node.left;
    }
    if (node.left && node.right) {
      const minNode = this.getMinNode(node);
      node.key = minNode.key;
      node.right = this.removeNode(node.right, minNode.key);
      return node;
    }
    return false;
  }
}

module.exports = BST;
