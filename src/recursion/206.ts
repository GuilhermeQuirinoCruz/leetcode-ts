// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 1 2 3 4 5
function reverse(prev: ListNode | null, node: ListNode | null): ListNode | null {
  if (!node) {
    return null;
  }
  
  const nextNode = node.next;
  node.next = prev;

  if (!nextNode) {
    return node;
  }

  return reverse(node, nextNode);
}

function reverseList(head: ListNode | null): ListNode | null {
  if (head) {
    head = reverse(null, head);
  }

  return head;
}

// Exemplo 1
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]