/** @format */

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
var search = function (nums, target) {
  let res = -1;
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      res = mid;
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return res;
};
console.log(search(arr, 5));
