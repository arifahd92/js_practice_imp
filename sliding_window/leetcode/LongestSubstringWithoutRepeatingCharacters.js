/**
 * Example 1:
 *
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * Example 2:
 *
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * Example 3:
 *
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * @format
 */

//https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2133524/java-c-a-reall-detailed-explanation/?envType=problem-list-v2&envId=sliding-window&

//https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

//imp: its parent is https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
/*
isme k unique characters dekhte the har window me 
aur isme k nhi diya hai hame k dhoondhna hai, so k will be variable for each window , all unique character means k will be equal to size of window tabhi hame all unique character milega  
*/

var lengthOfLongestSubstring = function (s) {
  let n = s.length,
    i = 0,
    j = 0,
    max = 0,
    map = new Map();

  while (j < n) {
    map.set(s[j], map.get(s[j]) + 1 || 1);
    if (map.size === j - i + 1) {
      max = Math.max(max, j - i + 1);
      j++;
    } else {
      // map will never be greater than j-i+1 or with its window size it is handling map.size < j - i + 1 case
      while (map.size < j - i + 1) {
        // mapsize is smaller it means some duplicate element have encountered now remove that element from left side of window at one time only unique character will be in map of window size
        map.set(s[i], map.get(s[i]) - 1);
        if (map.get(s[i]) === 0) {
          map.delete(s[i]);
        }
        i++;
      }
      j++;
    }
  }
  // console.log(max);
  return max;
};
lengthOfLongestSubstring("aabcd");
//what is wron in this
