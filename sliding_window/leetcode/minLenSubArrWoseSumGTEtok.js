/** @format */
// https://leetcode.com/problems/minimum-size-subarray-sum/description/
var minSubArrayLen = function (target, nums) {
  let min = Infinity;
  const n = nums.length;
  let sum = 0;

  let j = 0,
    i = 0;
  while (j < n) {
    sum += nums[j];
    if (sum < target) {
      j++;
    } else if (sum >= target) {
      min = Math.min(min, j - i + 1);
      while (sum > target) {
        sum -= nums[j--];
        // i shrinked window from right coz in left side answer is possible due to greater than or equal to cond
        //if the condition was only equal to k then we will be shrinking from left
      }
      //after this loop sum is smaller than target
      //now slide by one step to the right
      sum -= nums[i]; // IF YOU FORGET THIS LINE YOU WILL INFINITE LOOP WILL BE FORMED  while (sum > target)
      i++;
      j++;
    }
  }
  return min === Infinity ? 0 : min;
};
