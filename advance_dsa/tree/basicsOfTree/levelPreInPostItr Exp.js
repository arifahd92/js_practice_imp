// function levelOrder(tree) {
//   let que = [tree];
//   let i = 0;
//   while (i < que.length) {
//     const current = que[i++];
//     if (current.left) {
//       que.push(current.left);
//     }
//     if (current.right) {
//       que.push(current.right);
//     }
//     console.log(current.value);
//     // que.shift();
//   }
// }
// levelOrder(root);
// preOrder(root);
// };

// function preOrder(tree) {
//   if (!tree) {
//     return;
//   }
//   console.log(tree.value);
//   preOrder(tree.left);
//   preOrder(tree.right);
// }
// TRICK (Preorder – Iterative)
// Preorder = Root → Left → Right
// Recursion internally uses a STACK (LIFO)
// In iterative, we use our own stack
// Rule:
// 1) Pop node
// 2) Visit it immediately (preorder)
// 3) Push RIGHT child first
// 4) Push LEFT child next
// Why?
// Stack is LIFO, so LEFT gets processed before RIGHT

// function preOrderIterative(tree) {
//   const stack = [tree];
//   while (stack.length) {
//     const current = stack.pop();

//     console.log(current.value);
//     current.right && stack.push(current.right);
//     current.left && stack.push(current.left);
//   }
// }
// preOrderIterative(root);
// console.log("preorder end,,,,,");

// function inOrderIterative(tree) {
//   let current = tree;
//   const stack = [];
//   while (current || stack.length) {
//     if (current == null) {
//       let item = stack.pop();

//       console.log(item.value);
//       current = item.right;
//     } else {
//       stack.push(current);
//       current = current.left;
//     }
//   }
// }
// inOrderIterative(root);

// function inOrderIterative(root) {
//   let current = root;
//   const stack = [];

//   while (current || stack.length) {
//     // 1️⃣ Go as left as possible
//     while (current) {
//       stack.push(current);
//       current = current.left;
//     }

//     // 2️⃣ Process node
//     current = stack.pop();
//     console.log(current.value);

//     // 3️⃣ Move to right subtree
//     current = current.right;
//   }
// }

// inOrderIterative(root);

// function postOrder(root) {
//   const stack = [];
//   let current = root;
//   let lastVisited = null;

//   while (current || stack.length) {
//     // 1️⃣ Go left
//     while (current) {
//       stack.push(current);
//       current = current.left;
//     }

//     // 2️⃣ Peek
//     const peek = stack[stack.length - 1];

//     // 3️⃣ Go right if not visited
//     if (peek.right && lastVisited !== peek.right) {
//       current = peek.right;
//     }
//     // 4️⃣ Process node
//     else {
//       console.log(peek.value);
//       lastVisited = peek; // right of peek was already visited  thats why control came here  now it is being printed  so mark it visited
//       stack.pop();
//     }
//   }
// }

// postOrder(root);

// function postOrder(tree) {
//   let stack = [];
//   let current = tree;
//   let lastVisited = null;
//   while (current || stack.length) {
//     while (current) {
//       stack.push(current);
//       current = current.left;
//     }
//     const peek = stack.at(-1);
//     if (peek.right && peek.right != lastVisited) {
//       current = peek.right;
//     } else {
//       const top = stack.pop();
//       console.log(top.value);
//       lastVisited = top;
//     }
//   }
// }

// let chaiArr = [1, 2, 3, 5, 10];
// let chained = function (arr) {
//   return {
//     value: arr,
//     reverse: function () {
//       this.value = this.value.reverse();
//       return this;
//     },
//     filter(num) {
//       this.value = this.value.filter((item) => item != num);
//       return this;
//     },
//     getValue() {
//       return this.value;
//     },
//   };
// };
// console.log(chained(chaiArr).reverse().filter(5).getValue());

