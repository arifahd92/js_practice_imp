/** @format */
const dict = ["cat", "cats", "and", "sand", "dog"];
let ans = new Set();

function wordBreak(s, start, n, temp) {
  if (start === n) {
    ans.add(temp.join(" "));
    return;
  }
  for (let i = start; i < n; i++) {
    const word = s.slice(start, i + 1).join("");
    if (dict.includes(word)) {
      wordBreak(s, i + 1, n, [...temp, word]);
    }
  }
}

const s = "catsanddog";
wordBreak(s.split(""), 0, s.length, []);
console.log([...ans]);
