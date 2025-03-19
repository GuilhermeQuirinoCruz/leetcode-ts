import "./tree-node";

function rearrange(
  node: TreeNode | null,
  previous: TreeNode | null
): TreeNode | null {
  if (!node) {
    return null;
  }

  let leftmost: TreeNode | null = node;
  if (node.left) {
    leftmost = rearrange(node.left, node);
  }

  if (node.right) {
    node.right = rearrange(node.right, previous);
  } else {
    node.right = previous;
  }

  return leftmost;
}

function treeToNodeArray(node: TreeNode | null): TreeNode[] {
  if (!node) {
    const empty: TreeNode[] = [];
    return empty;
  }

  return treeToNodeArray(node.left)
    .concat([node])
    .concat(treeToNodeArray(node.right));
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  const treeNodeArray: TreeNode[] = treeToNodeArray(root);
  for (let i = 0; i < treeNodeArray.length; i++) {
    if (i + 1 < treeNodeArray.length) {
      treeNodeArray[i].right = treeNodeArray[i + 1];
    }

    treeNodeArray[i].left = null;
  }

  return treeNodeArray[0];
}
