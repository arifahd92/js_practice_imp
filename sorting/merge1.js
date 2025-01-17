/** @format */

let arr = [1, 2, 3, 4, 5, 0, 9, 8, 7, 6, 5];
divide(0, arr.length - 1, arr);
function divide(start, end, arr) {
  if (start >= end) {
    return;
  }
  const mid = Math.floor((start + end) / 2);
  divide(start, mid, arr);
  divide(mid + 1, end, arr);
  conquer(start, mid, end, arr);
}
function conquer(start, mid, end, arr) {
  let i = start,
    j = mid + 1;
  let temp = [];
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
  }

  while (i <= mid) {
    temp.push(arr[i++]);
  }
  while (j <= end) {
    temp.push(arr[j++]);
  }

  for (const item of temp) {
    arr[start++] = item;
  }
}
console.log(arr);
