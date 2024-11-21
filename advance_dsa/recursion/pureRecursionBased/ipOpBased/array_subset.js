/** @format */

let arr = [1, 2, 3]; // op [],[ 1 ],[ 2 ],[ 2, 1 ],[ 3 ],[ 3, 1 ],[ 3, 2 ],[ 3, 2, 1 ] in any sequence
function printAllSubSet(arr, op = []) {
  if (arr.length === 0) {
    console.log(op);
    return;
  }
  const last = arr.pop();
  printAllSubSet([...arr], op); // here  spreading arr is necessary think why, reason how recursion works when it will  returns to execute stacked left function it will not get array state where it was left if we dont spred ,
  printAllSubSet([...arr], [...op, last]);
}
printAllSubSet([...arr]);

console.log(`------------------all unique subset---------------------`);
arr = [1, 2, 3, 2];
function printAllSubSet(arr, op = [], set = new Set()) {
  if (arr.length === 0) {
    if (set.has(op + "")) {
      return;
    }
    set.add(op + "");
    console.log(op);
    return;
  }
  const last = arr.pop();

  printAllSubSet([...arr], op, set);
  printAllSubSet([...arr], [...op, last], set);
}
printAllSubSet([...arr]);
