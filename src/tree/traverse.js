const colors = require('colors');
const BST = require('./bst.js');

function inOrderTraverse(node, tag = 'ROOT') {
  if (node) {
    inOrderTraverse(node.left, 'left');
    console.log(colors.yellow(node.key, tag));
    inOrderTraverse(node.right, 'right');
  }
}

function preOrderTraverse(node, tag = 'ROOT') {
  if (node) {
    console.log(colors.blue(node.key, tag));
    preOrderTraverse(node.left, 'left');
    preOrderTraverse(node.right, 'right');
  }
}

function postOrderTraverse(node, tag = 'ROOT') {
  if (node) {
    postOrderTraverse(node.left, 'left');
    postOrderTraverse(node.right, 'right');
    console.log(colors.red(node.key, tag));
  }
}

function insertNode(bst) {
  let i = 0;
  while (i < 20) {
    const randomNum = Math.floor(Math.random() * 100);
    bst.insert(randomNum);
    i += 1;
  }
  return bst;
}

const newBst = new BST(10);
const bst = insertNode(newBst);
const minNode = bst.getMinKey();
const maxNode = bst.getMaxKey();
inOrderTraverse(bst.root);
console.log(colors.green(minNode, maxNode));
// preOrderTraverse(bst.root);
// postOrderTraverse(bst.root);
