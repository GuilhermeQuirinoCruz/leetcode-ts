import "./tree-node";

function pushToStack(
  stack: [TreeNode, boolean][],
  node: TreeNode | null,
  add: boolean
) {
  if (node) {
    stack.push([node, add]);
  }
}

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let traversal: number[] = [];
  let nodeStack: [TreeNode, boolean][] = [[root, false]];
  while (nodeStack.length > 0) {
    let [node, add]: [TreeNode, boolean] = nodeStack.pop() || [
      new TreeNode(),
      false,
    ];

    if (add) {
      traversal.push(node.val);
    } else {
      pushToStack(nodeStack, node, true);
      pushToStack(nodeStack, node.right, false);
      pushToStack(nodeStack, node.left, false);
    }
  }

  return traversal;
}
