import "./list-node";

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  while (head.next && head.next.val == head.val) {
    head.next = head.next.next;
  }

  head.next = deleteDuplicates(head.next);

  return head;
}
