/** @format */

//imp: loop from the element for which you know answer
const { Stack } = require("../ctackClass");

let arr = [1, 2, 1, 5, 4, 6, 7, 9, 3];
let n = arr.length;
let stack = new Stack();
for (let i = n - 1; i >= 0; i--) {
  while (!stack.isEmpty() && arr[i] > stack.peek()) {
    stack.pop();
  }
  console.log(stack.isEmpty() ? -1 : stack.peek());
  stack.push(arr[i]); // arr[i] is smaller than peek of stack so it arr[i] may be answer for its left side element ( if its left side element is less than arr[i] arr[i] is going to be answer other wise it will be poped in loop)
}

/*
// console.log(`----------------------going to print using recursion ---------------------`

//imp : base case: think about smallest input for which we can tell answer without calling function, now reduce input in such way
//imp : here for last element we can tell answer without calling function
//imp : so make input smaller such way that in last only last element is left, not first
function nextgtelm(arr) {
  if (arr.length == 1) {
    console.log(-1);
    return;
  }
  const first = arr.shift(); //imp: input ko aese small karo ki last element hi bach jaye, last me, coz for last element im sure about answer
  nextgtelm([...arr]);//after this line if there arr is being used in calculation it means we have to preserve array, so used spread
  //if array is not being used as container for output, call function with brand new copy of array
  let index = [...arr].findIndex((item) => item > first);
  index === -1 ? console.log(-1) : console.log(arr[index]);
}
nextgtelm(arr);


*/
// when ever dealing with reference type variable , it is better to use an extra variable
// console.log(`----------------------going to print using recursion 3rd---------------------`
/*
function nextgtelm(arr, index = 0) {
  if (index === arr.length - 1) {
    console.log(-1);
    return;
  }
  nextgtelm(arr, index + 1);
  let first = arr[index];
  let found = false;
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] > first) {
      console.log(arr[i]);
      found = true;
      break;
    }
  }
  found || console.log(-1);
}
nextgtelm(arr);
*/

//
