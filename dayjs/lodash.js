import lodash from "lodash";
console.log(lodash.isEqual);
const {isEqual}=lodash
let obj1={q:3, b:undefined},
obj2={q:3, b:undefined}
console.log(isEqual(obj1, obj2))