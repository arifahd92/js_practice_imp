/** @format */

//https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/

let nums = [1, 5, 4, 2, 9, 9, 9],
  k = 3;

var maximumSubarraySum = function (nums, k) {
  let numsObj = {};
  let i = 0,
    j = 0,
    n = nums.length,
    max = 0,
    sum = 0;
  let dupCount = 0;
  while (j < n) {
    sum += nums[j]; // directly adding nums[i] without any check, so it will be subtracted without any check while removing effect of i
    numsObj[nums[j]] = numsObj[nums[j]] + 1 || 1; //same for this, while removing effect of i, it will be subtracted without any check

    if (numsObj[nums[j]] > 1) {
      // dupcount is being incremented on check, check will also come in effect while removing effect of i
      dupCount++;
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (dupCount === 0) {
        max = Math.max(max, sum);
      }

      if (numsObj[nums[i]] > 1) {
        // for sure dupCount is greater than 1
        dupCount--;
      }
      numsObj[nums[i]]--; //. without any check
      sum = sum - nums[i]; // without any check
      i++;
      j++;
    }
  }
  return max;
};
maximumSubarraySum(nums, k);
