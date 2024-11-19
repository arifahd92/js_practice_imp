/** @format */

let wt = [1, 5, 3, 4, 7];
let value = [2, 6, 8, 9, 10];
let n = 5;
let W = 11;
/*
function findMax(wt, value, n, W) {
  if (n == 0 || W == 0) {
    return 0;
  }
  if (wt[n - 1] > W) {
    return findMax(wt, value, n - 1, W);
  } else {
    return Math.max(
      value[n - 1] + findMax(wt, value, n - 1, W - wt[n - 1]),
      findMax(wt, value, n - 1, W)
    );
  }
}
  */
/*
let t = [];
for (let i = 0; i < n + 1; i++) {
  let arr = [];
  for (let j = 0; j < W + 1; j++) {
    arr.push(-1);
  }
  t[i] = arr;
}
console.log(t);
function findMax(wt, value, n, W) {
  if (n == 0 || W == 0) {
    return 0;
  }
  if (t[n][W] != -1) {
    return t[n][W];
  }
  if (wt[n - 1] > W) {
    return (t[n][W] = findMax(wt, value, n - 1, W));
  } else {
    return (t[n][W] = Math.max(
      value[n - 1] + findMax(wt, value, n - 1, W - wt[n - 1]),
      findMax(wt, value, n - 1, W)
    ));
  }
}
console.log(findMax(wt, value, n, W));
// imp tips to convert above code in top down approach 
//first apply two loop (coz two variable are changing) n and W
// step 2) replace n with i,W with J every where and function call with t and only consider n and W ignore others 
//example  value[n - 1] + findMax(wt, value, n - 1, W - wt[n - 1])==> value[i - 1] + t[i - 1][J - wt[i - 1]
//value[n - 1] ==> value[i - 1]
//findMax(wt, value, n - 1, W - wt[n - 1])==> t[i-1][j-wt[i-1]],  here n was  n-1 so it will became i-1, and W was W-wt[n-1] so it will become j-wt[i-1]
*/
/*
let t = Array(n + 1)
  .fill(0)
  .map(() => Array(W + 1).fill(0));

function knapSack(wt, value, n, W) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= W; j++) {
      if (wt[i - 1] <= j) {
        t[i][j] = Math.max(value[i - 1] + t[i - 1][j - wt[i - 1]], t[i - 1][j]);
      } else {
        t[i][j] = t[i - 1][j];
      }
    }
  }
  return t[n][W];
}

console.log(knapSack(wt, value, n, W));
*/
