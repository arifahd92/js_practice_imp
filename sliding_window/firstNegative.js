/** @format */

// https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1
// Input: arr[] = [-8, 2, 3, -6, 10] , k = 2
// Output: [-8, 0, -6, -6]

let arr = [-8, 2, 3, -6, 10],
  k = 2;
function FirstNegativeInteger(arr, k) {
  // write code here

  let i = 0,
    j = 0,
    n = arr.length,
    stack = [];
  let res = [];
  while (j < n) {
    if (arr[j] < 0) {
      stack.push(arr[j]);
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // window is detected
      // remove the effect of the first element of the window, and slide window to the right
      if (stack.length > 0) {
        res.push(stack[0]);
      } else {
        res.push(0);
      }
      if (arr[i] < 0) {
        stack.shift();
      }
      i++;
      j++;
    }
  }
  return res;
}
console.log(FirstNegativeInteger(arr, k));
