let graph = { A: ["B", "C"], B: ["A", "D"], C: ["A"], D: ["B"] }; // this represents one way connection
function BFS(graph, sourceNode) {
  let set = new Set();
  let que = [sourceNode];
  while (que.length > 0) {
    let node = que.shift();
    set.add(node);
    ans.push(node);
    for (const neighbour of graph[node]) {
      if (!set.has(neighbour)) {
        que.push(neighbour);
      }
    }
  }
}
let ans = [];
BFS(graph, "A");
console.log(ans.join("=>"));
