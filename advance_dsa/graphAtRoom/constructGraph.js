let graph = {};

addEdge(graph, "A", "B");
addEdge(graph, "A", "C");
addEdge(graph, "B", "D");

console.log(graph);
/*
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"],
};
*/

function addEdge(graph, v1, v2) {
  graph[v1] = [...(graph[v1] ?? []), v2];
  graph[v2] = [...(graph[v2] ?? []), v1];
}
