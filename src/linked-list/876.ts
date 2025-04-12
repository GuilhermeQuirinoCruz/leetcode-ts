import "./list-node";

function getMiddleNode(
  node: ListNode | null,
  received: number
): [ListNode | null, number] {
  if (!node) {
    return [null, Math.ceil(received / 2)];
  }

  const [middleNode, middleIndex] = getMiddleNode(node.next, received + 1);
  if (received == middleIndex) {
    return [node, middleIndex];
  }

  return [middleNode, middleIndex];
}

function middleNode(head: ListNode | null): ListNode | null {
  return getMiddleNode(head, 1)[0];
}

// 1 2 3 4
// 1 2 3 4 5