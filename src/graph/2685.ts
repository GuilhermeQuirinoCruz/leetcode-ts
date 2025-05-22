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

class Component {
  vertices: Set<number>;
  edges: Set<Set<number>>;

  constructor() {
    this.vertices = new Set<number>();
    this.edges = new Set<Set<number>>();
  }

  addEdges(vertex: number, connections: Set<number>) {
    for (let connectsTo of connections) {
      this.edges.add(new Set([vertex, connectsTo]));
    }
  }

  addVertices(vertices: Set<number>) {
    this.vertices = new Set([...this.vertices, ...vertices]);
  }
}

function edgesToVertexMap(
  n: number,
  edges: number[][]
): Map<number, Set<number>> {
  let vertices: Map<number, Set<number>> = new Map<number, Set<number>>();
  for (let i = 0; i < edges.length; i++) {
    const edge: number[] = edges[i];

    connectVertices(edge[0], edge[1], vertices);
    connectVertices(edge[1], edge[0], vertices);
  }

  for (let i = 0; i < n; i++) {
    if (!vertices.has(i)) {
      vertices.set(i, new Set<number>());
    }
  }

  return vertices;
}

function createComponents(vertices: Map<number, Set<number>>): Component[] {
  let components: Component[] = [];
  for (let [vertex, connections] of vertices) {
    let added: boolean = false;
    for (let i = 0; i < components.length; i++) {
      let component: Component = components[i];
      if (component.vertices.has(vertex)) {
        component.addEdges(vertex, connections);
        component.addVertices(connections);
        added = true;
      }
    }

    if (added) {
      continue;
    }

    let component: Component = new Component();
    component.addEdges(vertex, connections);
    component.addVertices(new Set([vertex, ...connections]));
    components.push(component);
  }

  return components;
}

function countCompleteComponents(n: number, edges: number[][]): number {
  const vertices: Map<number, Set<number>> = edgesToVertexMap(n, edges);
  const components: Component[] = createComponents(vertices);

  let completeComponents: number = 0;
  components.forEach((component) => {
    const numEdges: number = component.edges.size / 2;
    const numVertices: number = component.vertices.size;
    const edgesToBeComplete: number = ((numVertices - 1) * numVertices) / 2;

    completeComponents += numEdges == edgesToBeComplete ? 1 : 0;
  });

  return completeComponents;
}

// Example 1
console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ])
);

// Example 2
console.log(
  countCompleteComponents(6, [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ])
);
