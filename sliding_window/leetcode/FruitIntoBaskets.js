/** @format */

// https://leetcode.com/problems/fruit-into-baskets/description/
/*
Example 3:

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can pick from trees [2,3,2,2].
If we had started at the first tree, we would only pick from trees [1,2].

*/
let fruits = [1, 2, 3, 2, 2];
var totalFruit = function (fruits) {
  let i = 0,
    j = 0,
    n = fruits.length,
    max = 0,
    map = new Map(),
    k = 2;
  while (j < n) {
    map.set(fruits[j], map.get(fruits[j]) + 1 || 1);
    if (map.size <= k) {
      max = Math.max(max, j - i + 1);
      j++;
    } else {
      while (map.size > k) {
        map.set(fruits[i], map.get(fruits[i]) - 1);
        if (map.get(fruits[i]) === 0) {
          map.delete(fruits[i]);
        }
        i++;
      }
      j++;
    }
  }
  console.log({ max });
  return max;
};
totalFruit(fruits, 2);
