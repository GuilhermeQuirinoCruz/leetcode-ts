function removeUnneeded(
  vertex: number,
  visited: Set<number>,
  graph: Set<number>[],
  needed: Set<number>
) {
  if (visited.has(vertex)) {
    return;
  }

  visited.add(vertex);

  graph[vertex].forEach((adjacent) => {
    needed.delete(adjacent);

    removeUnneeded(adjacent, visited, graph, needed);
  });
}

function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
  let graph: Set<number>[] = Array<Set<number>>(n);
  graph.fill(new Set<number>());

  edges.forEach((edge) => {
    const from: number = edge[0];
    const to: number = edge[1];

    graph[from].add(to);
  });

  let visited: Set<number> = new Set<number>();
  let verticesNeeded: Set<number> = new Set<number>(Array(n).keys());
  graph.forEach((_, vertex) => {
    removeUnneeded(vertex, visited, graph, verticesNeeded);
  })

  return Array.from(verticesNeeded);
}

// Example 1
console.log(
  findSmallestSetOfVertices(6, [
    [0, 1],
    [0, 2],
    [2, 5],
    [3, 4],
    [4, 2],
  ])
);

// Example 2
console.log(
  findSmallestSetOfVertices(5, [
    [0, 1],
    [2, 1],
    [3, 1],
    [1, 4],
    [2, 4],
  ])
);

// Example 3
console.log(
  findSmallestSetOfVertices(5, [
    [1, 3],
    [2, 0],
    [2, 3],
    [1, 0],
    [4, 1],
    [0, 3],
  ])
);

// Works
// class Vertex {
//   adjacenctVertices: Set<number>;
//   reachableVertices: Set<number>;

//   constructor(id: number) {
//     this.adjacenctVertices = new Set<number>();
//     this.reachableVertices = new Set<number>([id]);
//   }
// }

// function dfs(
//   index: number,
//   vertex: Vertex,
//   visited: Set<number>,
//   graph: Vertex[]
// ): Set<number> {
//   if (!vertex) {
//     return new Set();
//   }

//   visited.add(index);

//   vertex.adjacenctVertices.forEach((adjacent) => {
//     const adjacentVertex = graph[adjacent];
//     if (!adjacentVertex) {
//       return;
//     }

//     let reachable: Set<number> = new Set<number>();
//     if (visited.has(adjacent)) {
//       reachable = adjacentVertex.reachableVertices;
//     } else {
//       reachable = dfs(adjacent, adjacentVertex, visited, graph);
//     }

//     vertex.reachableVertices = new Set([
//       ...vertex.reachableVertices,
//       ...reachable,
//     ]);
//   });

//   return vertex.reachableVertices;
// }

// function findSmallestSetOfVertices(n: number, edges: number[][]): number[] {
//   let vertices: Vertex[] = [];
//   for (let i = 0; i < n; i++) {
//     vertices.push(new Vertex(i));
//   }

//   edges.forEach((edge) => {
//     const from: number = edge[0];
//     const to: number = edge[1];
//     vertices[from].adjacenctVertices.add(to);
//   });

//   let maxVerticesReached: number = 0;
//   let visited: Set<number> = new Set<number>();
//   vertices.forEach((vertex, index) => {
//     if (visited.has(index)) {
//       return;
//     }

//     dfs(index, vertex, visited, vertices);
//     maxVerticesReached = Math.max(
//       maxVerticesReached,
//       vertex.reachableVertices.size
//     );
//   });

//   let verticesNeeded: Set<number> = new Set<number>(Array(n).keys());
//   vertices.forEach((vertex, index) => {
//     if (!verticesNeeded.has(index)) {
//       return;
//     }

//     vertex.reachableVertices.forEach((reachable) => {
//       if (reachable == index) {
//         return;
//       }

//       verticesNeeded.delete(reachable);
//     });
//   });

//   return Array.from(verticesNeeded);
// }