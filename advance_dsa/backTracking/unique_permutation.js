/** @format */

let s = "ABCA";

function swapIthWithJth(s, i, j) {
  let arr = s.split("");
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr.join("");
}

function permutation(s, ind = 0, set = new Set()) {
  if (ind == s.length - 1) {
    set.add(s);
    return;
  }
  for (let i = ind; i < s.length; i++) {
    const swapped = swapIthWithJth(s, i, ind);
    if (!set.has(swapped)) {
      permutation(swapped, ind + 1, set);
    }
  }
}

function getUniquePermutations(s) {
  let set = new Set();
  permutation(s, 0, set);
  return set;
}

const uniquePermutations = getUniquePermutations(s);
console.log(uniquePermutations);
