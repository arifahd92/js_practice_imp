/** @format */
//imp  how to think about base case and recursive case
//imp : just ask yourself for what all  input you can tell output directly without calling function
() => {
  let arr = [1, 3, 5, 7, 6, 4, 2]; // output [7,6,5,4,3,2,1]
  let n = arr.length;

  function sortArr(arr) {
    let n = arr.length;
    if (n == 0 || n == 1) {
      return;
    }
    let temp = arr.pop();

    sortArr(arr); //it will result 7 6 5 4 3 1, as 2 is discarded and stored in temp so now my task is to insert 2 at correct position in 7 6 5 4 3 1, after this

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= temp) {
        arr.splice(i, 0, temp);
        break;
      }
    }
  }
  sortArr(arr);
  console.log(arr);
};

//imp: by using  pure recursion
(() => {
  let arr = [1, 3, 5, 7, 6, 4, 2];

  function insertTemp(arr, temp) {
    if (arr.length == 0 || arr[arr.length - 1] <= temp) {
      //imp base case is case where we are sure for output and we can determine output easily, without calling function
      arr.push(temp);
      return;
    }
    let val = arr.pop();
    insertTemp(arr, temp);
    insertTemp(arr, val);
  }

  function sortArr(arr) {
    if (arr.length <= 1) {
      return;
    }
    let temp = arr.pop();
    sortArr(arr); //imp: called for one lesser input (`lesser will be originals lesser not results` ) so it will result 7 6 5 4 3 1, as 2 is discarded and stored in temp now remaining task is inserting 2 at its appropriate position
    insertTemp(arr, temp);
  }
  sortArr(arr);
  console.log(arr, "i m  called");
})();

//? once more for practice
(() => {
  let arr = [1, 3, 5, 7, 6, 4, 2];
  function insert(arr, temp) {
    // base case , when we don't need to call function again, and we know answer
    if (arr.length == 0 || arr[arr.length - 1] <= temp) {
      arr.push(temp);
      return;
    }
    //case for one sorter input
    let val = arr.pop();
    insert(arr, temp);
    insert(arr, val);
  }
  function sortArr(arr) {
    //? : base case  if length of array is 1 or less than 1 then it is already sorted don't need to call function
    if (arr.length <= 1) {
      return;
    }
    let temp = arr.pop();
    sortArr(arr);
    insert(arr, temp);
  }

  sortArr(arr);
  console.log(arr, "see here ");
})();

(() => {
  let arr = [1, 3, 5, 7, 6];
  function deleteMiddleOfArray(arr) {
    let k = Math.floor(arr.length / 2) + 1;
    function helper(arr, k) {
      if (k == 1) {
        arr.pop();
        return;
      }
      let temp = arr.pop();
      helper(arr, k - 1);
      arr.push(temp);
    }
    helper(arr, k);
  }
  deleteMiddleOfArray(arr);
  console.log(arr);
})();

/*
                                    []  |  [1,2]

                                    [] , [2]  | [1],[2]
      
                                    [],[] | [2],[] | [1,2],[2]
      
      
      
      
                                    */
