/** @format */
(() => {
  //ip abc, op=> a_b_c, a_bc, ab_c, abc
  // i have choice for all excep a (e b ko as b lu ya _b), make tree
  let str = "abc";

  function pattern(ip, op) {
    if (ip.length === 0) {
      console.log(op);
      return;
    }
    let op1 = op + ip[0];
    let op2 = op + `_${ip[0]}`;
    ip = ip.slice(1, ip.length);
    pattern(ip, op2);
    pattern(ip, op1);
  }
  let ip = str.slice(1, str.length);
  let op = str[0];
  // pattern(ip, op);
})();

//-----------------------------pattern 2---------------------------------------

(() => {
  let str = "abc"; // op => abc abC aBc aBC Abc AbC ABc ABC
  // its tree will be like a ko as it is liya ako capital kar ke liya , nhi lene ka case hi nhi hai yani op har bar change and har baar 2 branch banegi hi
  function printPattern(str, op = "") {
    if (str.length == 0) {
      console.log(op);
      return;
    }
    let op1 = op + str[0].toUpperCase();
    let op2 = op + str[0];
    str = str.slice(1, str.length);
    printPattern(str, op2);
    printPattern(str, op1);
  }
  // printPattern(str); //abc abC aBc aBC Abc AbC ABc ABC
})();

//----------------now twisted version of above problem---------------------------------
//input also may be mixed of uppercase and lower case
(() => {
  let str = "aBC"; // op should be same as prev
  function printPattern(str, op = "") {
    if (str.length === 0) {
      console.log(op);
      return;
    }
    let op1 = op + str[0].toUpperCase();
    let op2 = op + str[0].toLowerCase();
    str = str.slice(1, str.length);
    printPattern(str, op1);
    printPattern(str, op2);
  }
  // printPattern(str);
})();

//third version their might be digit also like a1bc, so digit will not be changed
// in its tree we will get 2 types branch singlke branch , double branch , in case of nuber single in case of letter double
(() => {
  let str = "a1bc";
  function printPattern(str, op = "") {
    if (str.length === 0) {
      console.log(op);
      return;
    }
    let start = str[0];
    if (typeof start == "number") {
      let op1 = op + start;
      str = str.slice(1, str.length);
      printPattern(str, op1);
    } else {
      let op1 = op + str[0].toUpperCase();
      let op2 = op + str[0];
      str = str.slice(1, str.length);
      printPattern(str, op1);
      printPattern(str, op2);
    }
  }
  printPattern(str);
})();
