/**
 * Tree Defination
 *
 * A tree is a collection of entities called nodes.
 * Nodes are connected by edges.
 * Each node contains a value or data,
 * and it may or may not have a child node .
 *
 * https://medium.freecodecamp.org/all-you-need-to-know-about-tree-data-structures-bceacb85490c
 *
 * 核心概念：
 * 1. root: The first node of the tree is called the root.
 * 2. edges: All Tree nodes are connected by links called edges.
 *           It’s an important part of trees, because it’s manages the relationship between nodes.
 * 3. leaves: Leaves are the last nodes on a tree.
 * 4. height: The length of the longest path to a leaf
 * 5. depth: The depth of a node is the length of the path to its root.
 */

/**
 * Binary trees
 *
 * In computer science, a binary tree is a tree data structure
 * in which each node has at the most two children,
 * which are referred to as the left child and the right child
 *
 * https://khan4019.github.io/front-end-Interview-Questions/bst.html
 */

// a binary tree is that it is a collection of nodes.
// Each node has three attributes: value, left_child, and right_child.

// Node class
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(data) {
    this.root = null;
  }
}
