import "./tree-node";

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) {
    return null;
  }

  if (root.val == val) {
    return root;
  }

  // Check the left child
  let child: TreeNode | null = searchBST(root.left, val);
  if (child) {
    return child;
  }

  // Check the right child
  child = searchBST(root.right, val);
  if (child) {
    return child;
  }

  return null;
}
