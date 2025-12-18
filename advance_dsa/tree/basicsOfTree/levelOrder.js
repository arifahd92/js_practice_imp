import { root } from "./tree.js";

function levelOrder(root) {
  if (!root) return;

  let queue = [root];
  let i = 0;

  while (i < queue.length) {
      let current = queue[i++];
      
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      console.log(current.value);
  }
}

levelOrder(root);
