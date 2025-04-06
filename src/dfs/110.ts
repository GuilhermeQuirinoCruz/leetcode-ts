import "./tree-node";

function isBalanced(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  if (!root.left && !root.right) {
    root.val = 1;
    return true;
  }

  if (root.left && !isBalanced(root.left)) {
    return false
  }

  if (root.right && !isBalanced(root.right)) {
    return false
  }

  let leftVal: number = root.right?.val || 0;
  let rightVal: number = root.left?.val || 0;

  root.val = Math.max(leftVal, rightVal) + 1;
  
  return Math.abs(leftVal - rightVal) <= 1;
}
