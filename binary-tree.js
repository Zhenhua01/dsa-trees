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
  // can do recursively or use BFS below:
  minDepth(node = this.root) {
    if (!node) return 0;

    let count = 0;

    let toVisitQueue = [node];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (!current.left && !current.right) return count;

      if (current.left) {
        count++;
        toVisitQueue.push(current.left);
      }

      if (current.right) {
        count++;
        toVisitQueue.push(current.right);
      }
    }

    return count;
  }


  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */
  // can do recursively or use BFS below:
  maxDepth(node = this.root) {
    if (!node) return 0;

    let count = 0;

    let toVisitQueue = [node];

    while (toVisitQueue.length) {
      count++;

      for (let i = 0; i < toVisitQueue.length; i++) {
        let current = toVisitQueue.shift();

        if (current.left) {
          toVisitQueue.push(current.left);
        }

        if (current.right) {
          toVisitQueue.push(current.right);
        }
      }
    }

    return count;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */
  // can do recursively or use stack below:
  nextLarger(lowerBound, node = this.root) {
    if (!node) return null;

    let toVisitStack = [node];
    let larger = Infinity;

    while (toVisitStack.length){
      let current = toVisitStack.pop();

      if (current.val > lowerBound && current.val < larger) larger = current.val;

      if (current.left) toVisitStack.push(current.left);
      if (current.right) toVisitStack.push(current.right);
    }

    return larger === Infinity ? null : larger;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
  }

}

module.exports = { BinaryTree, BinaryTreeNode };
