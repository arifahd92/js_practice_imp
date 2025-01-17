/**
 * jab ek function recursively call hota hai to ham aesa soch sakte hai
 * ki uske upar likha hua code us function ke call hone se pahle ka hai aur uske baad ka code us function ke execute ho jaane ke baad ka hai
 *
 * @format
 */

function printInRev(num) {
  if (num == 0) {
    return;
  }
  console.log(num);
  printInRev(num - 1);
  console.log(num); // we can assume it as backtracking
}
printInRev(3);

/*
backtrack code starts executing after return is acheived and it execute in reverse order
forward 3 call ek 3 ke liye then 2 ke liye then 1 ke liye 
to last wala one tha ab back track bhi 1 se execute hoga and back track me saare variable apne state(jipe call hue the) preserve karte hain like ham ek function ko 10 baar call karde 10 diffrent diffrebt args ke saath to wo use yaad rakhta ahi hai 
*/

//imp: back tracking me ham ek loop use kar rahe honge aur wo loop bhi apne variable ko yaad rakhega back track ke time pe
