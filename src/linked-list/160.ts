import "./list-node";

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let nodesInA: Set<ListNode> = new Set<ListNode>();
  while (headA) {
    nodesInA.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (nodesInA.has(headB)) {
      return headB;
    }

    headB = headB.next;
  }

  return null;
}
