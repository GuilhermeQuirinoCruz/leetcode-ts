import "./tree-node";

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root) {
    const leftChild: TreeNode | null = invertTree(root.left);
    const rightChild: TreeNode | null = invertTree(root.right);

    root.left = rightChild;
    root.right = leftChild;
  }

  return root;
}
