let arr = ["ate", "eat", "nat", "tea", "tan", "bat"];
// op [['ate', 'ate', 'tea'],['tan','nat'],['bat']]

const map = new Map();
for (const item of arr) {
  const sortedStr = item.split("").sort().join("");
  map.set(sortedStr, [...(map.get(sortedStr) ?? []), item]);
}
const ans = [];
for (const [key, val] of map) {
  ans.push(val);
}
console.log(ans);
