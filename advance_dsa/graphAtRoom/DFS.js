// Example Graph
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B","C"]
};
let ans = [];

function DFS(node, answer, set = new Set()) {
  set.add(node);
  ans.push(node);
  for (const item of graph[node]) {
    if (!set.has(item)) {
      DFS(item, answer, set);
    }
  }
}
DFS("A", ans);

console.log(ans);
