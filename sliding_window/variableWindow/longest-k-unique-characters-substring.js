/** @format */

// https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1

function longestKSubstr(s, k) {
  let i = 0;
  let j = 0;
  let maxLen = 0;
  let map = new Map();
  let n = s.length;
  while (j < n) {
    map.set(s[j], map.get(s[j]) + 1 || 1);
    if (map.size < k) {
      j++;
    } else if (map.size === k) {
      maxLen = Math.max(maxLen, j - i + 1);
      j++;
    } else if (map.size > k) {
      while (map.size > k) {
        map.set(s[i], map.get(s[i]) - 1);
        if (map.get(s[i]) <= 0) {
          map.delete(s[i]);
        }
        i++;
      }
      j++;
    }
  }
  console.log(maxLen);
  return maxLen;
}
longestKSubstr("aabbccccccee", 2);
