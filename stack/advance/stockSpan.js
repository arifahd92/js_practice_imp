/** @format */

let arr = [20, 100, 80, 60, 70, 75, 75, 85, 60]; //count of all continuous previus smaller elements including itself, ex for 85, it is 1, for 75 it is 2, again 75 it is 3,for 70 it is 4, for 60 it is 5, for 80 it is 6, 20 will not be count as it is not in continuous chain
//trick, j is function of i, so think about stack, j loop is running again and again from right to left soo in stack solution loop will run from right to left, so we can use stack to solve this problem
const { Stack } = require("../ctackClass");
//its parent is previous greater element

//if you will observe closely you will find that differemce of current element index and indeX of previous greater element  is our answer so will will store index of previous greater element in stack
const stack = new Stack();
stack.push(-1);
let ansArr = [];
for (let i = 0; i < arr.length; i++) {
  //while loop is for popping unnecesory elements from stack, so , for its condition think kab tak pop karna hai element ko
  while (stack.peek() != -1 && arr[stack.peek()] <= arr[i]) {
    stack.pop();
  }
  const currentAns = i - stack.peek();
  ansArr.push(currentAns);
  stack.push(i);
}
console.log(ansArr);
