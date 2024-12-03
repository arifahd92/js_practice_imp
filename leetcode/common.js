/** @format */

// https://leetcode.com/problems/intersection-of-two-arrays-ii/?envType=problem-list-v2&envId=binary-search

/*
Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
*/
let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

var intersect = function (nums1, nums2) {
  let res = [];
  let n1 = nums1.length;
  let obj1 = {};
  for (let i = 0; i < n1; i++) {
    obj1[nums1[i]] = obj1[nums1[i]] + 1 || 1; // frequeny object/map of nums1
  }
  for (const item of nums2) {
    if (obj1[item]) {
      // if frequeny is zero or undefined it will not execute
      res.push(item);
      obj1[item]--; // reduce frequency as once it is taken common from nums 2
    }
  }
  console.log(res);
  return res;
};
intersect(nums1, nums2);
