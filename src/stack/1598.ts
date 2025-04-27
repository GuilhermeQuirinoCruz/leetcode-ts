function minOperations(logs: string[]): number {
  let folderDepth: number = 0;

  for (const log of logs) {
    if (log == "../") {
      folderDepth = Math.max(0, folderDepth - 1);
    } else if (log != "./") {
      folderDepth += 1;
    }
  }

  return folderDepth;
}

// Example 1
console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));

// Example 2
console.log(minOperations(["d1/", "d2/", "./", "d3/", "../", "d31/"]));

// Example 3
console.log(minOperations(["d1/", "../", "../", "../"]));
