/** @format */

let s = "ABC";
//how many combination can be formed of same length, abc, bac,cba, acb,bca, cab

function swapIthWithJth(s, i, j) {
  let arr = s.split("");
  [arr[j], arr[i]] = [arr[i], arr[j]];
  s = arr.join("");
  return s;
}
function permuteFunc(s, ind) {
  if (ind == s.length - 1) {
    console.log(`'${s}'`);
    return;
  }
  for (let i = ind; i < s.length; i++) {
    s = swapIthWithJth(s, i, ind);
    permuteFunc(s, ind + 1);
    s = swapIthWithJth(s, i, ind);
  }
}
// permuteFunc(s, 0);
