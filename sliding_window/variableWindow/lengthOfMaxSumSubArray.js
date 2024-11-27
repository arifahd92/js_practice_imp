/** @format */
// https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1

// an array will be given you have to find max length of subarray whose sum is equal to k
/*
Input: arr[] = { 10, 5, 2, 7, 1, 9,4,5,7}, k = 15
Output: 4
Explanation: The sub-array is {5, 2, 7, 1}.


Input: arr[] = {-5, 8, -14, 2, 4, 12}, k = -5
Output: 5
*/
let arr = [2, 7, 1, 9, 4, 5, 7, 1, 1, 0, 0, 0, 10, 0, 5, 1, 1, 1, 3];
let k = 15;

function lenOfLongestSubarr(arr, k) {
  let n = arr.length,
    i = 0,
    j = 0,
    sum = 0,
    maxLen = 0;
  while (j < n) {
    sum += arr[j];
    if (sum < k) {
      //if (sum < k) increase subarray size
      j++;
    } else if (sum === k) {
      //else if(sum === k) you found perfect subarray,
      let len = j - i + 1; //from window size concept

      maxLen = Math.max(maxLen, len);
      // expand window by one in right
      // sum -= arr[i];
      // i++;
      j++;
    } else if (sum > k) {
      //else if(sum>k), shrink window  untill sum<k from i, and then shift by one
      //if controll came here, it means in the current window our ans do not lie, so shrinking from j side has no sense,we have to go forward by cutting left element so shrink window from  left (left means from i)

      while (sum > k) {
        sum -= arr[i];
        i++;
      }
      j++;
    }
  }

  return maxLen;
  // code here
}
console.log(lenOfLongestSubarr(arr, k)); //4

//------------------------------------------------------------------------------------------------------------------

// above code is for finding the length of the longest subarray with sum equal to k. It uses a sliding window approach
//but it was not most optemized

// most optemized way
//trick i will store running sum as key and index as value (ke is index tak ka ka running sum ye hai (iska key)) now suppose at any moment running sum is 25 so we will check that  (25-k) 10 is present or not if it is present it means from 10 till now wehave an sub array whose sum is k
// agar index 7 tak running sum 50 hai aur index 10 pe runniong sum 65 hai it means index 7 se index 10 tak ka running sum 15 hai
function maxLenSubarray(arr, k) {
  let n = arr.length,
    sum = 0,
    maxLen = 0;
  let j = 0;
  let obj = { 0: -1 };

  while (j < n) {
    sum += arr[j];
    let comp = sum - k;
    if (comp in obj) {
      maxLen = Math.max(maxLen, j - obj[comp]);
    }
    // console.log(obj, "ased");
    if (!(sum in obj)) {
      // this condition will tackle 0's, if zeros are present in array donot update index
      obj[sum] = j;
    }
    j++;
  }
  console.log(obj, "tyutt");
  return maxLen || -1;
}
console.log(maxLenSubarray(arr, k), "max length sub array");

//__________________________________________________________________________________________________________

function minLengthSubArray(arr, k) {
  let sum = 0;
  let n = arr.length;
  const obj = { 0: -1 };
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum - k in obj) {
      min = Math.min(min, i - obj[sum - k]);
      console.log(i, obj[sum - k]);
    }

    // if (!(sum in obj)) {// we want minimum so we will updste index for zeros too
    obj[sum] = i;
    // }
  }
  console.log(obj);
  return min === Infinity ? -1 : min;
}
