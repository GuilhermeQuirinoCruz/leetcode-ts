import "./list-node";

function convert(node: ListNode | null): [number, number] {
  if (!node) {
    return [0, 0];
  }

  const [sum, placeValue] = convert(node.next);
  const decimalValue: number = node.val * Math.pow(2, placeValue);

  return [decimalValue + sum, placeValue + 1];
}

function getDecimalValue(head: ListNode | null): number {
  return convert(head)[0];
}

// 0

// 1 0