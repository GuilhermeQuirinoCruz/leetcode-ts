function connectVertices(
  from: number,
  to: number,
  paths: Map<number, Set<number>>
) {
  if (!paths.has(from)) {
    paths.set(from, new Set<number>());
  }

  paths.get(from)?.add(to);
}

// Using dfs
function dfs(
  current: number,
  destination: number,
  visited: Set<number>,
  paths: Map<number, Set<number>>
): boolean {
  if (current == destination) {
    return true;
  }

  visited.add(current);
  const vertices = paths.get(current)?.values();
  if (!vertices) {
    return false;
  }

  for (const vertex of vertices) {
    if (vertex == destination) {
      return true;
    }

    if (visited.has(vertex)) {
      continue;
    }

    if (dfs(vertex, destination, visited, paths)) {
      return true;
    }
  }

  return false;
}

function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source == destination) {
    return true;
  }

  let paths: Map<number, Set<number>> = new Map<number, Set<number>>();
  for (let i = 0; i < edges.length; i++) {
    const edge: number[] = edges[i];

    connectVertices(edge[0], edge[1], paths);
    connectVertices(edge[1], edge[0], paths);
  }

  return dfs(source, destination, new Set<number>(), paths);

  // Not very efficient
  // let next: number[] = [source];
  // let visited: Set<number> = new Set<number>();
  // while (next.length > 0) {
  //   const current: number = next[next.length - 1];
  //   next.pop();

  //   visited.add(current);

  //   const vertices = paths.get(current)?.values();
  //   if (!vertices) {
  //     continue;
  //   }

  //   for (const vertex of vertices) {
  //     if (vertex == destination) {
  //       return true;
  //     }

  //     if (visited.has(vertex)) {
  //       continue;
  //     }

  //     next.push(vertex);
  //   }
  // }

  // return false;
}

// Example 1
console.log(
  validPath(
    3,
    [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
    0,
    2
  )
);

// Example 2
console.log(
  validPath(
    6,
    [
      [0, 1],
      [0, 2],
      [3, 5],
      [5, 4],
      [4, 3],
    ],
    0,
    5
  )
);
