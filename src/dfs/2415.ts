import "./tree-node";

// Using Traversal by level to build an array,
// then reversing the odd levels and
// reassigning the values
// function treeToArray(
//   node: TreeNode | null,
//   level: number,
//   values: number[][]
// ): number[][] {
//   if (!node) {
//     return [];
//   }

//   if (values.length <= level) {
//     values[level] = [];
//   }

//   values[level].push(node.val);

//   treeToArray(node.left, level + 1, values);
//   treeToArray(node.right, level + 1, values);

//   return values;
// }

// function getReversedArray(arr: number[]) {
//   const levels: number = Math.log2(arr.length + 1);
//   let reversedArr: number[] = [];

//   for (let level = 0; level < levels; level++) {
//     const nodesInLevel: number = 2 ** level;
//     const start: number = nodesInLevel - 1;
//     const end: number = start + nodesInLevel;

//     const values: number[] = arr.slice(start, end);

//     if (level % 2 != 0) {
//       values.reverse();
//     }

//     reversedArr = reversedArr.concat(values);
//   }

//   return reversedArr;
// }

// function reassignValues(
//   node: TreeNode | null,
//   values: number[],
//   position: number
// ) {
//   if (!node) {
//     return;
//   }

//   node.val = values[position];
//   reassignValues(node.left, values, position * 2 + 1);
//   reassignValues(node.right, values, (position + 1) * 2);
// }

// function reverseOddLevels(root: TreeNode | null): TreeNode | null {
//   let treeArray: number[] = treeToArray(root, 0, [[]]).flat();

//   treeArray = getReversedArray(treeArray);
//   reassignValues(root, treeArray, 0);

//   return root;
// }

// Using only DFS
function reverse(
  left: TreeNode | null,
  right: TreeNode | null,
  isNextLevelOdd: boolean
) {
  if (!left || !right) {
    return;
  }

  if (isNextLevelOdd) {
    const leftVal = left.val;
    left.val = right.val;
    right.val = leftVal;
  }

  reverse(left.left, right.right, !isNextLevelOdd);
  reverse(left.right, right.left, !isNextLevelOdd);
}

function reverseOddLevels(root: TreeNode | null): TreeNode | null {
  if (root) {
    reverse(root.left, root.right, true);
  }

  return root;
}
