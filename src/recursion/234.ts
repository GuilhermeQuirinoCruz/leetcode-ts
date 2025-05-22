// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function listToString(node: ListNode | null) {
  if (!node) {
    return "";
  }

  return node.val.toString() + listToString(node.next);
}

function isPalindrome(head: ListNode | null): boolean {
  const listStr: String = listToString(head);

  return listStr == listStr.split("").reverse().join("");
}
