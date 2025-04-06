import "./tree-node";

function convertToGst(node: TreeNode | null, greater: number): number {
  if (!node) {
    return greater;
  }

  node.val += convertToGst(node.right, greater);
  
  return convertToGst(node.left, node.val);
}

function bstToGst(root: TreeNode | null): TreeNode | null {
  convertToGst(root, 0);
  return root;
}
