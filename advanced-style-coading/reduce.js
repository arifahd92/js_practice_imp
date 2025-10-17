let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const { odd, even } = numbers.reduce(
  (acc, curr) => {
    (curr % 2 ? acc.odd : acc.even).push(curr); //! imp step
    return acc;
  },
  { odd: [], even: [] }
);

console.log(odd, even);

let odd2 = [],
  even2 = [];
for (const item of numbers) {
  (item % 2 ? odd2 : even2).push(item);
}

console.log(odd2, even2);

let users = [
  { id: 1, name: "arif", active: true },
  { id: 2, name: "raheem", active: false },
  { id: 3, name: "kareem", active: true },
];
const requiredOutput = [
  { userid: 1, name: "arif" },
  { userid: 3, name: "kareem" },
];
let activeUsers = users
  .filter((user) => user.active)
  .map((user) => ({ userid: user.id, name: user.name }));
console.log(activeUsers, "first ");

activeUsers = Array.from(
  users.filter(({ active }) => active),
  (item) => ({ userId: item.id, name: item.name })
);
console.log(activeUsers, "second ");
// ! for loop is always efficient and more controllable in condition but codes are not compact
// ! and reduce serve similar efficiency and control so whenever you think i should use for loop rather than
// ! using separate map and filter two methods think about reduce
// above both are same in memory and tc (two iteration, filtering and mapping (filtering using a memory then mapping using a memory ))
activeUsers = users.reduce((acc, { active, id, name }) => {
  active && acc.push({ userId: id, name });
  return acc;
}, []);
console.log(activeUsers);
