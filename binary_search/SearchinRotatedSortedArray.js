/** @format */

// https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/
//steps to solve this problem
//first find pivot index pivot index element is lesser than both of its let and right
//when you will found mid element there are 3 possiblity, either pivot will be at mid or in left of mid or in right side of mid
//imp: if pivot is in right of mid it means in array in right side of mid index will be unsorted
//imp: check if left side is sorted (arr[start]>arr[mid]), search pivot in right side other wise search pivot in left side

// once you find pivot element now guess wherere target may be present in context of pivot element then apply binery search in that part (array will be sorted in both side of pivot elementF)
//          0  1  2  3  4  5  6
let nums = [4, 3, 2, 1],
  target = 1;
var search = function (nums, target) {
  let pivotIndex = 0;
  let n = nums.length;
  let res = -1;
  function binarySearch(start, end) {
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      if (nums[mid] === target) {
        res = mid;
        return;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  function binarySearchPivot(start, end, pivot = true) {
    while (start <= end) {
      const mid = start + Math.floor((end - start) / 2);
      console.log(``, start, end, mid);
      if (nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1]) {
        console.log(`found pivot`);
        // found index of pivot
        pivotIndex = mid;
        return;
      } else {
        if (nums[0] < nums[mid]) {
          console.log(`in if of else`, mid);
          //checking is array sorted in left side of mid or not
          //pivot will be right of mid (as left side to mid array is sorted)
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  }
  binarySearchPivot(0, n - 1);
  const isTargetLesserThanLastElem = target < nums[n - 1]; //if it is true, serach in right side array of pivot else in left side
  let start, end;
  if (isTargetLesserThanLastElem) {
    start = pivotIndex;
    end = n - 1;
  } else {
    start = 0;
    end = pivotIndex;
  }
  if (!pivotIndex && nums[0] < nums[n - 1]) {
    start = 0;
    end = n - 1;
  } else if (!pivotIndex) {
    end = 0;
    end = n - 1;
  }
  binarySearch(start, end);
  console.log({ pivotIndex, res });
  return res;
};
search(nums, target);
