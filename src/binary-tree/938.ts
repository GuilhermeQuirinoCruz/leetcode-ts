import "./tree-node"

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root) {
    const sum: number = root.val >= low && root.val <= high ? root.val : 0;
    return (
      sum +
      rangeSumBST(root.left, low, high) +
      rangeSumBST(root.right, low, high)
    );
  }

  return 0;
}
