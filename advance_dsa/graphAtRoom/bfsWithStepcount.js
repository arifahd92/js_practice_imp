function bfs(graph, startNode) {
  let visited = new Set();
  let que = [{ node: startNode, level: 0 }];
  while (que.length) {
    let { node, level } = que.shift();
    // console.log({ node, level });
    visited.add(node);
    ans.push({ node, level });
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        // console.log(level, "level");
        que.push({ node: neighbour, level: level + 1 });
      }
    }
  }
}

// Example Graph
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"],
};
let ans = [];
bfs(graph, "B");
console.log(ans);
