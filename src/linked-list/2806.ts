import "./list-node";

function getGcd(a: number, b: number): number {
  if (b == 0) {
    return a;
  }

  return getGcd(b, a % b);
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;
  let gcdCache: Map<[number, number], number> = new Map<
    [number, number],
    number
  >();

  while (current) {
    const next: ListNode | null = current.next;
    if (!next) {
      break;
    }

    const smallerVal: number = Math.min(current.val, next.val);
    const greaterVal: number = Math.max(current.val, next.val);

    let gcd: number = 0;
    if (gcdCache.has([smallerVal, greaterVal])) {
      gcd = gcdCache.get([smallerVal, greaterVal]) || 0;
    } else {
      gcd = getGcd(smallerVal, greaterVal);
      gcdCache.set([smallerVal, greaterVal], gcd);
    }

    const gcdNode = new ListNode(gcd, next);

    current.next = gcdNode;
    current = next;
  }

  return head;
}
