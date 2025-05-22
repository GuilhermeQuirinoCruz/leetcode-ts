import "./tree-node";

function checkSymmetry(
  leftNode: TreeNode | null,
  rightNode: TreeNode | null
): boolean {
  if (leftNode && rightNode) {
    return (
      leftNode.val == rightNode.val &&
      checkSymmetry(leftNode.left, rightNode.right) &&
      checkSymmetry(leftNode.right, rightNode.left)
    );
  }

  if (leftNode || rightNode) {
    return false;
  }

  return true;
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  return checkSymmetry(root.left, root.right);
}
