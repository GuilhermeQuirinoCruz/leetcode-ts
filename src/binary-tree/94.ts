import "./tree-node";

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  return inorderTraversal(root.left)
    .concat([root.val])
    .concat(inorderTraversal(root.right));
}
