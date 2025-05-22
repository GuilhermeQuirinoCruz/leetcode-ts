import "./tree-node"

function checkTree(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  if (!root.left || !root.right) {
    return false;
  }

  return root.val == root.left.val + root.right.val;
};