import { root } from "./tree.js";

/*
pre order , root left right

we use stack 
since stack is lifo we push first right then left and read from top then we get first left , and do same for that node 
*/

function preOrderItr(root) {
  if (!root) {
    return;
  }

  let st = [root];
  while (st.length > 0) {
    const top = st.pop();
    // console.log(top)
    console.log(top.value);
    if (top.right) st.push(top.right);
    if (top.left) st.push(top.left);
  }
}
preOrderItr(root);
