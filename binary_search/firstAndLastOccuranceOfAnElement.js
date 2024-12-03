/** @format */

// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

let nums = [5, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10],
  target = 8;

var searchRange = function (nums, target) {
  let res = [-1, -1];
  let n = nums.length;
  // passed a position that will act as flag either we want first occurance or last occurance
  function search(start, end, position = 0) {
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      if (nums[mid] < target) {
        start = mid + 1;
      } else if (nums[mid] > target) {
        end = mid - 1;
      } else {
        if (position === 0) {
          res[0] = mid;
          end = mid - 1; //continue search in left side (coz we want first occurance), if again target will be hit res[0] will get updated
        } else {
          res[1] = mid;
          start = mid + 1; //continue search in right side (as we want first occurance), if again target will be hit res[1] will get updated from right target
        }
      }
    }
  }
  search(0, n - 1, 0);
  search(0, n - 1, 1);
  console.log(res);
  return res;
};
searchRange(nums, target);
