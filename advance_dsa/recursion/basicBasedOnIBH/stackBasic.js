/** @format */

// in stack, push pop and peek,isEmpty, length methods are available

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
    throw new Error("stack is empty");
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    return this.items[this.size() - 1] || false;
  }
  size() {
    return this.items.length;
  }
}
const stack = new Stack();
let arr = [6, 1, 3, 4, 2, 5];
let n = arr.length;
for (let i = 0; i < n; i++) {
  stack.push(arr[i]);
}
//------------------------------------------stack created-------------------------
/*

function insertAtCorrectPosition(stack, temp) {
  if (stack.isEmpty() || temp >= stack.peek()) {
    //imp: just think  all possible condition when we can insert temp in stack
    stack.push(temp);
    return;
  }
  //how was initial state ( [1,2,3,4,6], 5) now i popped top to make small input, now how i can get original state just insert temp them push back val
  let val = stack.pop();
  insertAtCorrectPosition(stack, temp);
  stack.push(val);
}

function sortStack(stack) {
  if (stack.isEmpty() || stack.size() <= 1) {
    return;
  }
  let temp = stack.pop();
  sortStack(stack);
  insertAtCorrectPosition(stack, temp);
}
console.log(`stack before sorting: ${JSON.stringify(stack.items)}`);
sortStack(stack);
console.log(`stack after sorting ${JSON.stringify(stack.items)}`);
*/

// practice of sort stack using recursion
console.log(stack.items); //[ 6, 1, 3, 4, 2, 5 ]

function insert(sortedStack, temp) {
  //1,2,3,4,6 and temp 5
  //think about base condition, for what all input of stack we can push temp directly in stack, in context of smallest
  if (sortedStack.size() == 0 || sortedStack.peek() < temp) {
    sortedStack.push(temp);
    return;
  }
  let val = sortedStack.pop(); // 6
  insert(sortedStack, temp);
  sortedStack.push(val);
}
function sortStack(stack) {
  if (stack.size() <= 1) {
    return;
  }
  let temp = stack.pop(); // discarded to lower input 5 , now sortStack(stack ) function will sort [ 6, 1, 3, 4, 2], now my task is inserting 5 at correct position in stack
  sortStack(stack);
  insert(stack, temp);
}
sortStack(stack);
console.log(`after sorting stack: ${JSON.stringify(stack.items)}`);

//------------------------------------------------------------------------------

// now reverse sorted stack  using recursion

function reverseStack(stack) {
  //initial stack [ 6, 1, 3, 4, 2, 5 ]
  if (stack.size() <= 1) {
    return;
  }
  let temp = stack.pop();
  reverseStack(stack); // except 5 everything is reversed now put 5 in last, we can do using two stack but we will do using recursion
  putTempInLast(stack, temp);
}

function putTempInLast(reversedStack, temp) {
  //base condition
  if (reversedStack.size() == 0) {
    reversedStack.push(temp);
    return;
  }
  let val = reversedStack.pop();
  putTempInLast(stack, temp);
  stack.push(val);
}
reverseStack(stack);
console.log("after reversing", stack.items);

//delete middle item of stack------------------------------------------------------------------------

console.log("current", stack.items);

function deleteMiddle(stack, k) {
  //first  i assumed deleteMiddle function will delete middle item of stack , how it will do i don't know but surely it will
  //base case,  when we can delete item without calling function directly, isn't it k==1? when we directly can delete item from stack, without calling function
  if (k == 1) {
    stack.pop();
    return;
  }
  let temp = stack.pop();
  deleteMiddle(stack, k - 1); // i supposed it will delete correctly without top element, now i will put temp in stack,
  stack.push(temp);
}
let k = Math.floor(stack.size() / 2) + 1;
deleteMiddle(stack, k);
console.log("after deleting", stack.items);
