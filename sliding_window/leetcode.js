/**
 * Count Occurences of Anagrams
 * Difficulty: MediumAccuracy: 48.09%Submissions: 82K+Points: 4
 * Given a word pat and a text txt. Return the count of the occurrences of anagrams of the word in the text.
 *
 * Example 1:
 *
 * Input:
 * txt = forxxorfxdofr
 * pat = for
 * Output: 3
 * Explanation: for, orf and ofr appears
 * in the txt, hence answer is 3.
 * Example 2:
 *
 * Input:
 * txt = aabaabaa
 * pat = aaba
 * Output: 4
 * Explanation: aaba is present 4 times
 * in txt.
 * Your Task:
 * Complete the function search() which takes two strings pat, txt, as input parameters and returns an integer denoting the answer.
 * You don't need to print answer or take inputs.
 *
 * Expected Time Complexity: O(N)
 * Expected Auxiliary Space: O(26) or O(256)
 *
 * Constraints:
 * 1 <= |pat| <= |txt| <= 105
 * Both strings contain lowercase English letters.
 *
 * @format
 */
/*
function search(pat, str) {
  let n = str.length,
    i = 0,
    j = 0,
    k = pat.length;
  let count = 0,
    actCount = 0;
  let patobj = {};
  pat.split("").forEach((elm) => {
    patobj[elm] = patobj[elm] + 1 || 1;
  });
  while (j < n) {
    if (patobj[str[j]]) {
      patobj[str[j]]--;
    }
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      if (Object.values(patobj).every((elm) => elm === 0)) {
        actCount++;
      }
      if (patobj[str[i]] >= 0) {
        patobj[str[i]]++;
      }
      i++;
      j++;
    }
  }
  console.log(actCount);
  return actCount;
  //code here
}
  */
str = "forxxorfxdofr";
pat = "for";

//---------------------------------------------
// https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5839/1
function search(pat, str) {
  let n = str.length,
    i = 0,
    j = 0,
    k = pat.length;
  let count = 0,
    actCount = 0;
  let patobj = {};

  // Create a frequency map for the pattern
  pat.split("").forEach((elm) => {
    patobj[elm] = patobj[elm] + 1 || 1;
  });

  // Initialize count to the size of the pattern
  count = Object.keys(patobj).length;

  while (j < n) {
    // Decrement the frequency of the character at the right of the window
    if (str[j] in patobj) {
      patobj[str[j]]--;
      if (patobj[str[j]] === 0) {
        count--; // A complete match for this character
      }
    }

    // Expand the window if its size is less than k
    if (j - i + 1 < k) {
      j++;
    }
    // When the window size matches k
    else if (j - i + 1 === k) {
      // If count is 0, we found an anagram
      if (count === 0) {
        actCount++;
      }

      // Slide the window by removing the effect of the left character
      if (str[i] in patobj) {
        if (patobj[str[i]] === 0) {
          count++; // A character went out of the window
        }
        patobj[str[i]]++;
      }

      i++;
      j++;
    }
  }
  return actCount;
}

console.log(search(pat, str));
