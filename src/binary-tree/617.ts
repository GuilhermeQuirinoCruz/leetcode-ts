import "./tree-node";

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1) {
    root1.val += root2?.val || 0;
    root1.left = mergeTrees(root1.left, root2?.left || null);
    root1.right = mergeTrees(root1.right, root2?.right || null);

    return root1;
  } else {
    return root2;
  }
}
