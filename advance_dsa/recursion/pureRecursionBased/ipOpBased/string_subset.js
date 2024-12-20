/** @format */
//its concept will be different from IBH
//every thing will be thought in context of tree
let str = "abc"; // in case of abcb duplicate subset will also get generated
function printAllSubSet(str, op = "") {
  if (str.length === 0) {
    // answer at leaf node, at leaf node we have empty string
    console.log(`{'${op}'}`);
    return;
  }
  const op1 = op; // when not taking current character
  const op2 = op + str.slice(0, 1); //taking current character
  printAllSubSet(str.slice(1, str.length), op1); //decision was taken to not take current character, so op remain unchanged
  printAllSubSet(str.slice(1, str.length), op2); // decision was taken to take current character, so op was changed
}

printAllSubSet(str);

console.log(`----------------print all unique subset-----------------`);

function printUniqueSubSet(str, op = "", set = new Set()) {
  if (str.length === 0) {
    if (set.has(op)) {
      return;
    }
    set.add(op);
    console.log(`{'${op}'}`);
    return;
  }
  printUniqueSubSet(str.slice(1), op, set);
  printUniqueSubSet(str.slice(1), op + str[0], set);
}
printUniqueSubSet("abcb");

//imp: recursion always use brand new variable, dont use same variable in recursive call, it will lead to unexpected result
//reson for this is because of call stack, when we call function, it gets stored in call stack,
// ex
str = "abc"; // in case of abcb duplicate subset will also get generated
function printAllSubSetBug(str, op = "") {
  if (str.length === 0) {
    // answer at leaf node, at leaf node we have empty string
    console.log(`{'${op}'}`);
    return;
  }
  const op1 = op; // when not taking current character
  const op2 = op + str.slice(0, 1); //taking current character
  ip = str.slice(1); // declare ip as const, other wise it wll be stored in global and will be used in next recursive call
  printAllSubSet(ip, op1);
  printAllSubSet(ip, op2);
}

printAllSubSetBug(str);
