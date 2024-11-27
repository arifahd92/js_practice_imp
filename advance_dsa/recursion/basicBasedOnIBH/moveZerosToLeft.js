/** @format */

//all zeros to left

let arr = [1, 3, 5, 0, 7, 8, 0, 8, 9, 0, 0];
let n = arr.length;
let nonZeroIndex = n - 1;

for (let i = n - 1; i > -1; i--) {
  if (arr[i] !== 0) {
    [arr[i], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[i]];
    nonZeroIndex--;
  }
}
console.log(arr, "cleaner");
arr = [1, 3, 5, 0, 7, 8, 0, 8, 9, 0, 0];
console.log(arr, "before recursion");

function moveNonZeroRecursion(arr) {
  if (arr.length == 0) {
    return;
  }
  let last = arr.pop();
  moveNonZeroRecursion(arr);
  if (last !== 0) {
    arr.push(last);
  } else {
    arr.unshift(last);
  }
}
moveNonZeroRecursion(arr);
console.log(arr);
