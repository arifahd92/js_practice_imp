/** @format */

() => {
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
  permuteFunc(s, 0);
};

function permute(str) {
  const results = [];
  // for pass by reference created array of char named chars by str
  const chars = str.split("");

  function permuteFunc(start) {
    if (start === chars.length - 1) {
      results.push(chars.join(""));
      return;
    }
    const set = new Set();
    for (let i = start; i < chars.length; i++) {
      if (!set.has(chars[i])) {
        set.add(chars[i]);
        //swapping part
        [chars[start], chars[i]] = [chars[i], chars[start]];
        permuteFunc(start + 1);

        //undo swap in original array
        [chars[start], chars[i]] = [chars[i], chars[start]];
      }
    }
  }

  permuteFunc(0);
  return results;
}

// Example usage:
const str = "abac";
const permutations = permute(str);
console.log(permutations);
