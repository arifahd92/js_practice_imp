let objArr = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 4, name: "d" },
  { id: 5, name: "d" },
];
let ids = [1, 3, 4];
let newData = [];

const mapOfObjArr = new Map(objArr.map((item) => [item.id, item]));
console.log(mapOfObjArr);
console.log(mapOfObjArr.get(1));
