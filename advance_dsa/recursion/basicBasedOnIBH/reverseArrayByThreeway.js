/** @format */

() => {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  //mutate original array
  function reverseArr1(arr) {
    if (arr.length === 0) {
      return;
    }

    let temp = arr.pop();
    reverseArr1(arr); //assumption : reverseArr1 will reverse [1, 2, 3, 4, 5, 6] and now we have to place 7 at the beginning of reversed array
    //in mutation we call function by reference so we can modify the original array
    arr.unshift(temp);
  }
  reverseArr1(arr);
  console.log(arr);
};

//m2-----------------------
(() => {
  let arr = [1, 2, 3, 4, 5, 6, 7];
  //donot mutate original array, i will give you an other empty array mutate that and push all in reverse

  function reverseArr(arr, res) {
    if (arr.length === 0) {
      return;
    }
    const last = arr.at(-1);
    reverseArr(arr.slice(0, arr.length - 1), res); //for safe zone we are passing a copy of arr, if arr is used after this line it will result unexpected
    res.unshift(last);
  }
  let res = [];
  reverseArr(arr, res);
  console.log({ res, arr });
})();
