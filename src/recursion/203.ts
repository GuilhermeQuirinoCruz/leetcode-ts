// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) {
    return null;
  }

  if (head.val == val) {
    return removeElements(head.next, val);
  }

  head.next = removeElements(head.next, val);
  return head;
}

// 1 2 2 3
// 2

// [1,2,6,3,4,5,6]
// 6