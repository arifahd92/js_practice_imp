/** @format */

const { Stack } = require("../ctackClass");
let s = "(()(()))";
let n = s.length;
const stack = new Stack();
let valid = true;
for (let i = 0; i < n; i++) {
  if (s[i] === "(") {
    //THIS IS CASE OF PUSHING ONLY IT CAN NOT POP OR DETERMINE VALIDITY
    stack.push(s[i]);
  } else {
    //closing brackets case
    if (stack.size() === 0 || stack.peek() === ")") {
      valid = false;
      break;
    } else {
      stack.pop();
    }
  }
}
console.log(valid && stack.size() === 0);
