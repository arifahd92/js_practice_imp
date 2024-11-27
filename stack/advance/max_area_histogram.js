/** @format */
// https://leetcode.com/problems/largest-rectangle-in-histogram/description/

// Input: heights = [2,1,5,6,2,3]
// Output: 10
// Explanation: The above is a histogram where width of each bar is 1.
// The largest rectangle is shown in the red area, which has an area = 10 units.

/*
see till where a bar can expand in left and in right direction
till a smaller bar is found 
it can expend till one step before the smaller bar

ITS BASE IS DISTANCE OF PREVIVIOU SMALLER NUMBER FROM THE CURRENT NUMBER

*/
const { Stack } = require("../ctackClass");
let stack = new Stack();
const heights = [2, 1, 5, 6, 2, 3];
var largestRectangleArea = function (heights) {
  let max = 0;
  const n = heights.length;
  let previosSmallerArr = [];
  stack.push(-1);
  for (let i = 0; i < n; i++) {
    while ((stack.peek() > -1, heights[stack.peek()] >= heights[i])) {
      stack.pop();
    }
    previosSmallerArr.push(i - stack.peek());
    stack.push(i);
  }
  //   console.log(previosSmallerArr);
  while (stack.size()) {
    stack.pop();
  }
  let nextSmallere = [];
  stack.push(n);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.peek() < n && heights[stack.peek()] >= heights[i]) {
      stack.pop();
    }
    nextSmallere[i] = stack.peek() - i; //avoid unshift as its tc is o(n) itself,  i started storing from last of arr
    stack.push(i);
  }
  console.log(nextSmallere);
  let combinedArr = [];
  for (let i = 0; i < n; i++) {
    combinedArr.push(nextSmallere[i] + previosSmallerArr[i] - 1);
    //left expand +right expand -itself width, itself width is in both left and right soone extra was being added so i did -1
  }
  console.log(combinedArr);
  for (let i = 0; i < n; i++) {
    max = Math.max(max, combinedArr[i] * heights[i]);
  }
  return max;
};
console.log(largestRectangleArea(heights));

/*
//practice, and tried to make more optemized

largestRectangleArea = (heights) => {
  let max = 0;
  let n = heights.length;
  stack.push(-1);
  let prevSmaller = [];
  for (let i = 0; i < n; i++) {
    while (stack.peek() > -1 && heights[stack.peek()] >= heights[i]) {
      stack.pop();
    }
    prevSmaller.push(i - stack.peek());
    stack.push(i);
  }
  // console.log(prevSmaller); //prev smaller is producing res, including self till where an element can extend in left
  let nextSmaller = [];
  stack = new Stack();
  stack.push(n);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.peek() < n && heights[stack.peek()] >= heights[i]) {
      stack.pop();
    }
    nextSmaller[i] = stack.peek() - i;
    stack.push(i);
    nextSmaller[i] = nextSmaller[i] + prevSmaller[i] - 1;

    max = Math.max(max, nextSmaller[i] * heights[i]);
  }
  return max;
};
// console.log(largestRectangleArea(heights));
*/
