import "./tree-node";

function evaluateTree(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }

  if (!root.left || !root.right) {
    return root.val == 1;
  }

  const left: boolean = evaluateTree(root.left);
  const right: boolean = evaluateTree(root.right);

  switch (root.val) {
    case 2:
      return left || right;
    case 3:
      return left && right;
    default:
      return false;
  }
}
