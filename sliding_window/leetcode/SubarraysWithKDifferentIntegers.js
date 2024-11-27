/** @format */

// https://leetcode.com/problems/subarrays-with-k-different-integers/description/

let nums = [1, 2, 1, 2, 3],
  k = 2;
// Output: 7
// Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

// it is similar as k unique character in a string
// this was hard level could not sublit it
var subarraysWithKDistinct = function (nums, k) {
  let count = 0;

  const n = nums.length;
  for (let x = k; x < n; x++) {
    let i = 0,
      j = 0;
    const map = new Map();
    while (j < n) {
      map.set(nums[j], map.get(nums[j]) + 1 || 1);
      if (map.size < k) {
        j++;
      } else if (map.size === k) {
        count++;
        j++;
      } else {
        while (map.size > k) {
          map.set(nums[i], map.get(nums[i]) - 1);
          if (map.get(nums[i]) === 0) {
            map.delete(nums[i]);
          }
          i++;
        }
        j++;
      }
    }
    x > k && k++;
  }
  console.log(count);
  return count;
};
subarraysWithKDistinct(nums, k);

() => {
  //map preserves the order of insertion and donot stringify to keys
  const map1 = new Map();
  map1.set(2, 2);
  map1.set(1, 1);
  map1.set(3, 3);

  map1.set("1", 10);
  console.log(map1); //{ 2 => 2, 1 => 1, 3 => 3, '1' => 10 }
  console.log(map1.get("1"));
};
