// 1)
const arr = [1, 2, 3];
arr.forEach(item => console.log(item)); // 1 2 3


// 2)
const map = new Map([['a', 1], ['b', 2]]);
map.forEach((value, key) => console.log(key, value)); // a 1  b 2


// 3)
const set = new Set([10, 20, 30]);
set.forEach(value => console.log(value)); // 10 20 30
