import "./tree-node";

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) {
    return false;
  }

  if (root.left && root.right) {
    return (
      hasPathSum(root.left, targetSum - root.val) ||
      hasPathSum(root.right, targetSum - root.val)
    );
  }

  if (root.left) {
    return hasPathSum(root.left, targetSum - root.val);
  }

  if (root.right) {
    return hasPathSum(root.right, targetSum - root.val);
  }

  return root.val == targetSum;
}
