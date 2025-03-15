//  Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function countChildren(node: TreeNode | null): number {
  if (!node) {
    return 0;
  }

  return countChildren(node.left) + countChildren(node.right) + 1;
}

function countNodes(root: TreeNode | null): number {
  return countChildren(root);
}

// Example 1
// console.log(countNodes([1, 2, 3, 4, 5, 6]));
