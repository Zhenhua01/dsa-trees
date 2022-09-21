"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0;
    let countList = [];
    let count = 0;

    let toVisitStack = [node];

    while (toVisitStack.length) {
      count++;
      let current = toVisitStack.pop();

      const rightChild = current.right;
      if (rightChild) {
        toVisitStack.push(rightChild);
      } else {
        countList.push(count);
      }

      const leftChild = current.left;
      if (leftChild) {
        toVisitStack.push(leftChild);
      } else {
        countList.push(count);
      }

    }

    return Math.min(...countList);
  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;
    let countList = [];
    let count = 0;

    let toVisitStack = [node];

    while (toVisitStack.length) {
      count++;
      let current = toVisitStack.pop();

      const rightChild = current.right;
      if (rightChild) {
        toVisitStack.push(rightChild);
      } else {
        countList.push(count);
      }

      const leftChild = current.left;
      if (leftChild) {
        toVisitStack.push(leftChild);
      } else {
        countList.push(count);
      }

    }

    return Math.max(...countList);
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound, node = this.root) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
