/** @format */

var pivotIndex = function (nums) {
  let totalSum = 0,
    leftSum = 0,
    n = nums.length;
  let i, j;
  for (i = 0, j = n - 1; i < j; i++, j--) {
    const item = nums[i] + nums[j];
    totalSum += item;
  }
  console.log({ i, j });
  if (i === j) {
    console.log(`inside if`);
    totalSum += nums[i];
  }

  for (let i = 0; i < n; i++) {
    const item = nums[i];
    leftSum += item;
    if (2 * leftSum - item === totalSum) {
      return i;
    }
  }
  return -1;
};
let nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums), "uhgh");
