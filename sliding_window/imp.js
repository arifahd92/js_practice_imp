/** @format */

// whenever subarray substring type question comes, with min max there is high chance of window sliding
//window is nothing just a sub array of size k
// whenever we move a window by one step  a new subarray/window is detected
// if i is start of window and j is end of window then we can say that sub array from i to j is detected whose size will be j-i+1, i and j are indexes of array and index start from 0
//suppuse i=0 is start of window and j=1 is end of window then size of window is 1-0+1=2
// now next window (subarray) will be from i+1 to j+1

//let k is window size
// let i is start of window, 0 initial
// let j is end of window
// how to find j (end of window)??

// remeber always
//imp: j=k+i-1
//imp: k=j-i+1
//imp: next window/subarray of same size will be from i++ to j++ not j-i to j+k
//imp: and its result will be res of prev window -ar[i-1] +arr[j], i j are updated here

//imp: steps to solve window problem.........
//?:1) alaways start from while(j<n)// j is end of any window and when j is equal to n-1 then it means we have traversed the whole array window
//?: 2a) do some calucation just after while loop
//?: 3) now check the condition taht window is covered or not, if not update j, else if window is detected find desirted result from store by doing some calcucation
//imp: 4) now it is time to calculate next window/subarray result using  current window
//imp: remember hamara window detect ho chuka hai,current window ke strart(jaha pe abhi i hai ) ke contribution ko agar result se  hata de aur current ke just next element ke contribution ko result me add kar de to we are done, result will be reslut of next window,
//imp: current window result se arr[i] ke contribution ko tabhi nikalenge jab uska contribution result me hoga
//imp: to hamne upar jo bhi calculation kiya tha while ke baad usame se start of previous ke contribution ko nikal denge, and next iteration me j++ wala khud se add ho jayega, we dont have to worry about j++ contribution in result

//question  max sum in sub array of size k

// given
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 3;
// solution
let i = 0;
let j = 0;
let n = arr.length;
let res = 0;
let max = 0;
while (j < n) {
  res += arr[j]; //do sone calutaion just after while loop to get desired result for first widwo, by keeping in mind also how result  can be used to calculate res of next window just by excluding first lements contribution of current window and adding next contribution of current window
  if (j - i + 1 < k) {
    j++; //if window is not covered then update j
  } else if (j - i + 1 === k) {
    max = Math.max(max, res); //if window is covered then find desired result from store
    //now think that does first element of curr window has contributed in result or not?? if yes then exclude it, else do nothing
    // res me current window ka first element add hua tha , to hamne use subtrack kar diya by doing res=res-arr[i]
    res -= arr[i]; //if window is covered then find next window result from current window result by doing some calucation on current window result
    i++;
    j++; //just next element ke contribution ko loop handle karega
  }
}
console.log(max);

//imp: remember one thig actual result of current window is not used to determine but worthy elements store is used

//find first negative element in sub array of size k in A given array of sze n
arr = [1, -2, -3, 4, 5, 6, -7, 8, -9]; //-2,-2,-3,0,-7,-7,-7
//-2 is result of first window, -2 is result of second window
k = 3;
//solution
i = 0;
j = 0;
n = arr.length;
res = [];
while (j < n) {
  //calculation part
  if (arr[j] < 0) {
    res.push(arr[j]);
  }
  if (j - i + 1 < k) {
    j++;
  } else if (j - i + 1 === k) {
    //window is covered
    console.log(res[0] ?? 0);
    // now check that first element of current window has contributed in result or not?? if yes then exclude it, else donothing
    if (arr[i] < 0) {
      // if this is true for first elemrnt of curren window then it has contributed in result else didnt contributed any thing
      res.shift();
    }
    i++;
    j++;
  }
}
