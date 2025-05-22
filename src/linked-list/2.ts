import "./list-node";

// Using for loops
// Doesn't work for very large numbers
// function listNodeToNumber(node: ListNode | null): number {
//   if (!node) {
//     return 0;
//   }

//   let digits: number[] = [];
//   while (node) {
//     digits.push(node.val);
//     node = node.next;
//   }

//   return Number.parseInt(digits.reverse().join());
// }

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   let n1: number = listNodeToNumber(l1);
//   let n2: number = listNodeToNumber(l2);

//   let sum: ListNode = new ListNode();
//   for (let digit of (n1 + n2).toString()) {
//     sum.val = Number.parseInt(digit);

//     let nextNode = new ListNode();
//     nextNode.next = sum;
//     sum = nextNode;
//   }

//   return sum.next;
// }

// Using recursion
// Scales better
function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) {
    return l2;
  }

  if (!l2) {
    l2 = new ListNode();
  }

  const addition: number = l1.val + l2.val;
  const carrier: number = Math.floor(addition / 10);
  l1.val = addition % 10;

  if (carrier > 0) {
    if (!l1.next) {
      if (l2.next) {
        l1.next = l2.next;
        l2.next = new ListNode();
      } else {
        l1.next = new ListNode();
      }
    }

    l1.next!.val += carrier;
  }

  l1.next = addTwoNumbers(l1.next, l2.next);

  return l1;
}
