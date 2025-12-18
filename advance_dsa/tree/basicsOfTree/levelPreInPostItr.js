function levelOrder(root) {
  let que = [root];
  let i = 0;
  while (i < que.length) {
    const current = que[i++];
    console.log(current.value);
    current.left && que.push(current.left);
    current.right = que.push(current.right);
  }
}
// levelOrder(root);
function preOrder(root) {
  const stack = [root];
  while (stack.length) {
    const top = stack.pop();
    console.log(top.value);
    top.right && stack.push(top.right);
    top.left && stack.push(top.left);
  }
}
// preOrder(root);




function inOrder(root) {
  let current = root;
  let stack = [];
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const top = stack.pop();
    console.log(top.value);
    current = top.right;
  }
}
// inOrder(root);
function postOrder(root) {
  let stack = [];
  let current = root;
  let lsatVisited = null;

  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const peek = stack.at(-1);

    if (peek.right && lsatVisited != peek.right) {
      current = peek.right;
    } else {
      const top = stack.pop();
      console.log(top.value);
      lsatVisited = top;
    }
  }
}
postOrder(root);