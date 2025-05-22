import "./tree-node"

function findTarget(node: TreeNode | null, target: number) {
  if (!node) {
    return null;
  }

  if (node.val == target) {
    return node;
  }

  const left: TreeNode | null = findTarget(node.left, target);
  if (left) {
    return left;
  }

  const right: TreeNode | null = findTarget(node.right, target);
  return right;
}

function getTargetCopy(
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null {
  if (!target || !cloned) {
    return null;
  }

  const targetInCloned = findTarget(cloned, target.val);
  cloned = original;

  return targetInCloned;
}
