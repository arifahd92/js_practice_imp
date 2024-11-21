/** @format */

//next smaller
const { Stack } = require("../ctackClass");
let arr = [5, 8, 6, 7, 9, 3, 4, 1, 2]; //[3,6,3,3,3,1,1,-1,-1]
let n = arr.length;
let stack = new Stack();
let i = n - 1;
while (i >= 0) {
  while (!stack.isEmpty() && stack.peek() >= arr[i]) {
    stack.pop(); // pop all elements of stack greater than arr[i]
  }

  console.log(stack.peek() ?? -1);
  // now arr[i] may be answer for its prev element
  stack.push(arr[i]);
  i--;
}

//-----------------------------------

() => {
  let arr = [5, 8, 6, 7, 9, 3, 4, 1, 2]; //[3,6,3,3,3,1,1,-1,-1]

  function nextSmaller(arr) {
    // base case, agar array ka last element mil jaaye to mai output bata sakta hun
    if (arr.length === 1) {
      console.log(-1);
      return;
    }
    let start = arr.shift(); // discarded first element that is 5
    //assumed my function is capable to find smaller of  [8, 6, 7, 9, 3, 4, 1, 2] i just hahe to calculate smaller of 5
    let temp;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < start) {
        temp = arr[i];
        break;
      }
    }
    console.log(temp ?? -1);
    nextSmaller([...arr]);
  }
  nextSmaller(arr);
};

() => {
  let arr = [5, 8, 6, 7, 9, 3, 4, 1, 2]; //[3,6,3,3,3,1,1,-1,-1]
  //recursive solution using extra variable
  //without modifying the original array that was pased
  function nextSmaller(arr, ind = 0) {
    let n = arr.length;
    if (ind == n - 1) {
      console.log(-1);
      return;
    }
    let start = arr[ind];
    let temp;
    for (let i = ind + 1; i < n; i++) {
      if (arr[i] < start) {
        temp = arr[i];
        break;
      }
    }
    console.log(temp ?? -1);
    nextSmaller(arr, ind + 1);
  }
  nextSmaller(arr);
};

const maxElm = (arr, ind, max = 0) => {
  if (ind === arr.length) {
    console.log(max, "im maxf");
    return;
  }
  let first = arr[ind];
  max = Math.max(max, first);
  maxElm(arr, ind + 1, max);
};
// maxElm(arr, 0);//9
