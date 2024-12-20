/** @format */

let arr = [4, 5, 6, 1, 2, 3];

function findPivotIndex(arr) {
  const n = arr.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const next = (mid + 1) % n;
    const prev = (mid + n - 1) % n;

    if (arr[mid] < arr[prev] && arr[mid] < arr[next]) {
      return mid;
    }

    if (arr[mid] < arr[end]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(findPivotIndex(arr));
