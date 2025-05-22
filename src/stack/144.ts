import "./tree-node";

function pushToStack(stack: TreeNode[], node: TreeNode | null) {
  if (node) {
    stack.push(node);
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  let nodeStack: TreeNode[] = [root];
  let traversal: number[] = [];
  while (nodeStack.length > 0) {
    let node: TreeNode = nodeStack.pop() || new TreeNode();

    traversal.push(node.val);
    pushToStack(nodeStack, node.right);
    pushToStack(nodeStack, node.left);
  }

  return traversal;
}
