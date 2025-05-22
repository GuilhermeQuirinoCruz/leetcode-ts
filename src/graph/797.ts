function getPaths(
  graph: number[][],
  vertex: number,
  target: number,
  currentPath: number[]
): number[][] {
  let paths: number[][] = [];

  for (let i = 0; i < graph[vertex].length; i++) {
    const next = graph[vertex][i];
    let path: number[] = [...currentPath];
    path.push(next);

    if (next == target) {
      paths.push(path);
      continue;
    }

    const nextPaths: number[][] = getPaths(graph, next, target, path);
    if (nextPaths.length > 0) {
      paths = paths.concat(nextPaths);
    }
  }

  return paths;
}

function allPathsSourceTarget(graph: number[][]): number[][] {
  return getPaths(graph, 0, graph.length - 1, [0]);
}

// Example 1
console.log(allPathsSourceTarget([[1, 2], [3], [3], []]));

// Example 2
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]));
