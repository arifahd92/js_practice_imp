/** @format */
// saare sub array ka sum karo jo max hai dedo ans me
// find max sum of sub array of size k in arr
// brute force
let arr = [1, 3, 8, 6, 7, 4, 5];
let k = 3;
let n = arr.length;
() => {
  let max = 0;
  for (let i = 0; i < n - k; i++) {
    let sum = 0;

    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    max = Math.max(sum, max);
  }
  console.log(max);
};
// using sliding window
//imp: if once controll goes in else part, then it will never go in if part again in next iteration, basically for first window we use if part and when first window is calculated we get next window just by removiong previus and adding next element in  window result (we add next element in next iteration so that we can process its result too), and process window result
//imp k=j-i+1
//imp j=k+i-1
//imp next window/subarray of same size will be from i++ to j++
// let i = 0,
//   j = 0;
// let sum = 0;
// let max = -Infinity;
// while (j < n) {
//   if (j - i + 1 < k) {
//     sum += arr[j]; // it will be used to find first window sum, but it will result less than one element as hit  window condition is not included in this case
//     console.log(`inside if`);
//     j++;
//   } else if (j - i + 1 == k) {
//     // window will be hit  here , in this block j will be pointing to last element of each window
//     sum += arr[j]; //include last element of any window in result to get complete window result
//     max = Math.max(max, sum); // process window result, one window complete
//     // startof next window
//     sum -= arr[i];
//     i++; // new start of window
//     j++; // new end of window
//     console.log(`inside else`);
//   }
// }
// console.log(max);
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//sabhi sub array ka sum karo unme jo max ho usko return karo
var maximumSubarraySum = function (nums, k) {
  let n = nums.length;
  // if (n < k) {
  //   return null;
  // }
  let max = 0;
  let sum = 0;
  let j = 0;
  let i = 0;
  while (j < n) {
    if (j - i + 1 < k) {
      sum += nums[j];
    }
    if (j - i + 1 < k) {
      sum += nums[j];
      j++;
    } else {
      sum += nums[j];
      max = Math.max(max, sum);
      sum -= nums[i];
      i++;
      j++;
    }
  }
  return max;
};
console.log(maximumSubarraySum(arr, k));
