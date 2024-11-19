/** @format */
//traverse once from 0 to k sabse max waale ko 0 pe store karo
let arr = [3, 4, -1, 6, 5, 3, 2, 7];
let k = 3;
let i = 0,
  j = 0,
  n = arr.length,
  max = [-Infinity];
while (j < n) {
  if (arr[j] > max[0]) {
    max.unshift(arr[j]);
  }
  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    console.log(max[0]);
    if (arr[i] === max[0]) {
      max.shift();
    }
    i++;
    j++;
  }
}
