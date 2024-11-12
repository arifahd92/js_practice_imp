/** @format */

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, .
//for n = 7 ans = 8
() => {
  function fib(n) {
    if (n < 1) return -1;
    if (n == 1 || n == 2) {
      return n - 1;
    }
    let a = 0,
      b = 1;
    let res;
    for (let i = 2; i < n; i++) {
      res = b + a;
      a = b;
      b = res;
    }
    return res;
  }
  console.log(fib(2));
};
//using recursion

(() => {
  function fib(n) {
    if (n <= 2) {
      return n - 1;
    }
    //return fib(n-1)// it was resulting 5 mujhe laana tha 8 to maine fib(n-2) ko call kar ke add kar diya isme
    return fib(n - 1) + fib(n - 2);
  }
  console.log(fib(7));
})();
