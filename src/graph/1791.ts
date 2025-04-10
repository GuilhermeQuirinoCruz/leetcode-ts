function addConnection(vertex: number, connections: Map<number, number>) {
  let numConnections = connections.get(vertex);
  connections.set(vertex, (numConnections ? numConnections : 0) + 1);
}

function findCenter(edges: number[][]): number {
  let connections: Map<number, number> = new Map<number, number>();

  for (let i = 0; i < edges.length; i++) {
    const edge = edges[i];
    addConnection(edge[0], connections);
    addConnection(edge[1], connections);
  }

  for (let [vertex, count] of connections) {
    if (count == connections.size - 1) {
      return vertex;
    }
  }

  return -1;
}

// Example 1
console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
);

// Example 2
console.log(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
);
