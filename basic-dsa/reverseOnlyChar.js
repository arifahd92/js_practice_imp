let str = "a1b!c";
str='abcd1'
// ans => c1b!a
const set = new Set();
for (let i = 97; i <= 122; i++) {
  set.add(String.fromCharCode(i));
}
// console.log(set);
str = str.split("");
let start = 0,
  end = str.length - 1;
while (start < end) {
  while (!set.has(str[start]) && start <= str.length) start++;
  while (!set.has(str[end]) && end >= 0) end--;
  if (start < end) {
    [str[start], str[end]] = [str[end], str[start]];
    start++, end--;
  }
}
console.log(str.join(""));
