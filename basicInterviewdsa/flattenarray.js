let arr = [1, 2, 3, [4, 5, [6], [7, 8], 11, 12], 9, 10];
const res = flattenArray(arr);

function flattenArray(arr, i = 0, ans = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ans = [...ans, ...flattenArray(arr[i])];
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}

console.log(res);