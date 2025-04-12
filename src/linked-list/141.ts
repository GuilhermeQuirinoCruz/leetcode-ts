import "./list-node";

// Using a set
// function hasCycle(head: ListNode | null): boolean {
//   let visited: Set<ListNode> = new Set<ListNode>();
//   while(head) {
//     if (visited.has(head)) {
//       return true;
//     }

//     visited.add(head);
//     head = head.next;
//   }

//   return false;
// }

// Using Floyd’s Cycle-Finding Algorithm
function hasCycle(head: ListNode | null): boolean {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow?.next ? slow.next : null;
    fast = fast.next.next;

    if (slow == fast) {
      return true;
    }
  }

  return false;
}