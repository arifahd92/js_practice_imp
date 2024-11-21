/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 *
 * Example 1:
 *
 * Input: s = "()"
 *
 * Output: true
 *
 * Example 2:
 *
 * Input: s = "()[]{}"
 *
 * Output: true
 *
 * Example 3:
 *
 * Input: s = "(]"
 *
 * Output: false
 *
 * Example 4:
 *
 * Input: s = "([])"
 *
 * Output: true
 *
 *
 *
 * Constraints:
 *
 * 1 <= s.length <= 104
 * s consists of parentheses only '()[]{}'.
 *
 * @format
 */
// {[()]}

/*

var isValid = function(s) {
    const close = new Set([")", "}", "]"]);
     const open = new Set(["(", "{", "["]);
     const stack = [];
     let isValid = true;
     for (let i = 0; i < s.length; i++) {
       const curr = s[i];
       if (open.has(curr)) {
         stack.push(curr);
       } else {
         //either pop or make isValid false
         if (stack.length === 0 || close.has(stack.at(-1))) {
           //either stack is empty or stack's top is closing 
       return false;
           
         } else if (//top is open and making pair from current
           (curr === "]" && stack.at(-1) == "[") ||
           (curr === "}" && stack.at(-1) == "{") ||
           (curr == ")" && stack.at(-1) == "(")
         ) {
           stack.pop();
         } else {// top is open but not making pair with curr
           return false;
           break;
         }
       }
     }
   
     return stack.length===0;
   }
*/
// agar current closing hai to either pop or invalid decision
//imp:in stack push pop approach,  agar current  baracket closing hai to pop() tabhi hoga jab stack ka top usi closing ka opening ho other wise stack ka top kuchh bhi ho valid nhi hi sakta ye means return false
//imp:if current is open it will be pushed in stack as it cant complete the bracket or determine bracket validity
let s = "(]";
var isValid = function (s) {
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr in pairs) {
      // current is opening bracket
      stack.push(curr);
    } else {
      //curr is closing bracket
      if (
        stack.length === 0 ||
        !stack.at(-1) in pairs || //top is not from opening bracket, return false
        pairs[stack.at(-1)] !== curr
        //pairs[stack.at(-1)] it will return closing pair of top,ex- if top is "{" it will return "}"
      ) {
        //top ka open close ka pair nhi hai
        return false;
      } else {
        //top of stack is open and  and pair making pair from curr
        stack.pop();
      }
    }
  }

  //   return stack.length === 0;
  return !stack[0]; //rather than checking length 0 , we can check if first element of stack is not null, it will be true if stack is empty
};
console.log(isValid(s));
