import "./tree-node";

function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  }

  const next: TreeNode | null = root.left || root.right;
  if (next) {
    return 1 + minDepth(next);
  }

  return 1;
}
