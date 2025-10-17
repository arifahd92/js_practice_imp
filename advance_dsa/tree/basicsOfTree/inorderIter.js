
import { root } from "./tree.js";
/*

1. Initialize stack = []
2. current = root

3. while (current is not null OR stack is not empty):
    a. while (current is not null):
          push current to stack
          current = current.left
    b. pop node from stack → visit it
    c. current = node.right


*/
function inorderTraversalIterative(root) {
let stack = [];
let current = root;
while(current || stack.length){
    while(current){
        stack.push(current);
        current = current.left;
    }
    current = stack.pop();
    console.log(current.value);
    current = current.right;
}

}
clg
// Call the function
inorderTraversalIterative(root);