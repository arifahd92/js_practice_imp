import fs from "fs";
setTimeout(() => console.log("from time out "), 0);
fs.readFile("ujuj", () => console.log("im file"));
setImmediate(()=>console.log("im immediate"))
