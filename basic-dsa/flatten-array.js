let arr = [1, 2, 3, [4, 5, [6], [7, 8], 11, 12], 9, 10];
let ans = [];
function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      ans.push(arr[i]);
    }
  }
}
flattenArray(arr);
console.log(ans);
