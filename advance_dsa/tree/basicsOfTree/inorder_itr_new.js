import { root } from "./tree.js";
/*
while (current || st.length)
"Continue as long as there is a node to visit (current) OR there are unfinished recursive calls stored in the stack (st)."

*/
function inorderItr(root) {
  const st = [];
  let current = root;

  while (current || st.length) {

    // Equivalent to: inorder(current.left)
    // Keep making recursive calls to the left child.
    while (current) {
      st.push(current);      // Save the current function call on the stack.
      current = current.left;
    }

    // We've returned from the left subtree.
    // Equivalent to the line after: inorder(node.left);
    current = st.pop();

    // Equivalent to: console.log(node.value);
    console.log(current.value);

    // Equivalent to: inorder(node.right);
    current = current.right;
  }
}
inorderItr(root);
