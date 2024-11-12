/** @format */

(() => {
  let n = 7; //output 1,2,3,4,5,6,7
  function print(n) {
    if (n == 1) {
      console.log(n);
      return;
    }
    print(n - 1); // it will print 1 to 6, remaining is 7
    console.log(n);
  }
  print(n);
  // how to think about its recursion solution
  //1) base condition, think about minimum possible valid input and put that in if condition and return op for that input
  //? :just see function and say it is doing its task magically, without code and then think what its just one lesser input  will result, and how can i complete lesser one to full and done
  //imp: like we assumed function print(n), will print from 1 to 7 (for n=7), so what print(n-1) will do , it will print 1 to 6, now how can i make it  1 to 7, so we decided clg(n) in last line of print(n-1) function call, coz that was printing 1to 6, now we r done
})();

() => {
  let n = 7; //output 7,6,5,4,3,2,1
  function printRev(n) {
    if (n == 1) {
      return console.log(n);
    }
    console.log(n);
    printRev(n - 1); //it will output 6,5,4,3,2,1, how we can make it 7,6,5,4,3,2,1, just add console before this
  }
  printRev(n);
};
