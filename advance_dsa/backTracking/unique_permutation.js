/** @format */

let s = "ABCA";
//all unique permutation
function swapIthWithJth(s, i, j) {
  let arr = s.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
}
function permutation(s, ind = 0) {
  if (ind == s.length - 1) {
    console.log(s);

    return;
  }
  set = new Set();
  for (let i = ind; i < s.length; i++) {
    if (set.has(s)) {
      s = swapIthWithJth(s, i, ind);
      continue;
    }
    set.add(s);
    s = swapIthWithJth(s, i, ind);
    permutation(s, ind + 1);
    s = swapIthWithJth(s, i, ind);
  }
}
permutation(s, 0);
