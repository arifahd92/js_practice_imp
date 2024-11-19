/** @format */
//  it is standard question of stack
// but included in this file for better understanding of recursion
//find next greater

let arr = [1, 2, 1, 5, 4, 6, 7, 9, 3]; //op [2,5,5,6,6,7,9,-1,-1]
//-----------------------------------------------------------------------------------------
/*
//imp : base case: think about smallest input from given input for which we can tell answer without calling function, now reduce input in such way that you can reach to that input
//imp : here for last element (that is 3) for which we can tell answer without calling function
//imp : so make input smaller such way that in last only last element is left
function nextgtelm(arr) {
  if (arr.length == 1) {
    console.log(-1);
    return;
  }
  const first = arr.shift(); //imp: input ko aese small karo ki last element hi bach jaye, last me, coz for last element im sure about answer
  let index = [...arr].findIndex((item) => item > first);
  index === -1 ? console.log(-1) : console.log(arr[index]);
  nextgtelm([...arr]); //after this line if there arr is being used in calculation it means we have to preserve array, so used spread
}
nextgtelm(arr);
*/
//-------------------------------------------------------------------------------------------

//while calling function itself, it is called recursion
//imp: when pass original and when brand new at the time of calling itself
//if ans is being stored in same array then pass original other wise copy of array is passed
//while printing or storing result in other array use brand new array for calling function
//example in reverse array , original array was being modified so passed original array after discarding last

// when ever dealing with reference type variable , it is better to use an extra variable
// console.log(`----------------------going to print using recursion 2ndrd---------------------`
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

/*
console.log(`---------------prevGreater------------------`);
arr = [3, 9, 7, 6, 4, 5, 1, 2, 1];
function prevGreater(arr) {
  if (arr.length === 1) {
    //first element ke liye im sure about answer so i will reduce array in such a way that when its length become one i will be at first element
    console.log(-1);
    return;
  }
  //discard from last
  const last = arr.pop();

  prevGreater([...arr]); //imp brand new arr for call
  let found = false;
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > last) {
      console.log(arr[i]);
      found = true;
      break;
    }
  }
  !found && console.log(-1);
}
prevGreater(arr);

*/
// console.log(
//   `---------------prevGreater Using  third variable------------------`
// );

//arr ko independent samjho
//i selected third variable by using it i will decide length of input array
arr = [3, 9, 7, 6, 4, 5, 1, 2, 1];
/*
function prevGreater2(arr, ind = arr.length - 1) {
  if (ind === 0) {
    //first element ke liye im sure about answer so i will reduce array in such a way that when its length become one i will be at first element
    console.log(-1);
    return;
  }
  //discard from last
  const last = arr[ind];

  prevGreater2(arr, ind - 1);
  let found = false;
  for (let i = ind - 1; i >= 0; i--) {
    if (arr[i] > last) {
      console.log(arr[i]);
      found = true;
      break;
    }
  }
  !found && console.log(-1);
}
prevGreater2(arr);
*/
//print an array in reverse order using recursion and third variable
arr = [3, 9, 7, 6, 4, 5, 1, 2, 1];
function reverseArr(arr, rev = [], ind = arr.length - 1) {
  if (ind == 0) {
    return rev.push(arr[0]);
  }
  let last = arr[ind];
  //   let last = arr.at(-1);//wrong
  reverseArr(arr, rev, ind - 1);
  rev.unshift(last);
}
let rev = [];
reverseArr(arr, rev);
console.log(rev);
