/** @format */

let arr = [4, 5, 1, 2, 3, 6, 7, 5, 9];
const stack = [];
for (let i = 0; i < arr.length; i++) {
  const curr = arr[i];
  while (stack.length && stack.at(-1) > arr[i]) {
    stack.pop();
  }
  console.log(stack.at(-1) || -1);
  stack.push(curr);
}
