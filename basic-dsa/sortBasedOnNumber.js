let arr = ["Love3", "coading1", "is2"];
let res = arr.sort((a, b) => a.slice(-1).localeCompare(b.slice(-1))).map(item=>item.slice(0,-1));
console.log(res);
