/** @format */

// https://leetcode.com/problems/trapping-rain-water/description/
/*
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/
let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; //10
/**
 * //steps to solve this problem
 * 1)find  trapped water /area above each building
 *
 * 2)do their sum
 *
 * how to calculate trapped area (given width of building is 1)
 * 1) find heighest left lost building for a bulding (for which you want calculate water)
 * 2)find highest right building of current building
 * now take minimum of both height for that building
 * now subtract height from min(leftMax,rightMax), why subtract? coz we want water trapped above that building
 * multiply by 1(width of building)
 *
 */

var trap = function (height) {
  const n = height.length;
  const leftMax = [height[0]];
  const rightMax = [];
  rightMax[n - 1] = height[n - 1];

  for (let i = 1; i < n; i++) {
    if (height[i] > leftMax[i - 1]) {
      leftMax.push(height[i]);
    } else {
      leftMax.push(leftMax[i - 1]);
    }
  }
  //   let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
  //going to create two array left max and right max
  //left max will store heighest building for its corresponding height
  //right max will store heighest right building for each building building
  for (let i = n - 2; i >= 0; i--) {
    if (height[i] > rightMax[i + 1]) {
      rightMax[i] = height[i];
    } else {
      rightMax[i] = rightMax[i + 1];
    }
  }

  //   console.log(leftMax); // [0, 1, 1, 2, 2,2, 2, 3, 3, 3,3, 3]
  //   console.log(rightMax); //[3, 3, 3, 3, 3,  3, 3, 3, 2, 2, 2, 1]
  let totalTrappedArea = 0;
  for (let i = 0; i < n; i++) {
    totalTrappedArea =
      totalTrappedArea + (Math.min(leftMax[i], rightMax[i]) - height[i]) * 1;
  }
  console.log({ totalTrappedArea });
  return totalTrappedArea;
};

trap(height);

//similar question based on two pointer
// https://leetcode.com/problems/container-with-most-water/description/
//        0  1  2  3  4  5  6  7  8
height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function containerWater(arr) {
  let l = 0;
  let r = arr.length - 1;
  let max = 0;

  while (l < r) {
    let length = r - l;
    let height = Math.min(arr[l], arr[r]);

    let area = length * height;

    max = Math.max(area, max);

    if (height == arr[l]) {
      l++;
    } else {
      r--;
    }
  }
  console.log({ container_with_most_water: max });
  return max;
}
containerWater(height);
