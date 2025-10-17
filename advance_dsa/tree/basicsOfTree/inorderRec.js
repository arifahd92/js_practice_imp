import {root} from './tree.js';

console.log(root);


function inorderTraversalIterative(root) {
  // Your code here
  if(!root) return;
  inorderTraversalIterative(root.left);
  console.log(root.value);
  inorderTraversalIterative(root.right);

}

// Call the function
inorderTraversalIterative(root);