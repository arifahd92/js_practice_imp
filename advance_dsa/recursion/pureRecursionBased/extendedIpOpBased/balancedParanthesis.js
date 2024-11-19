/** @format */
// nunber of open and closed paranthesis will be given in n (both will be equal basically) i have fo form all the balanced paranthesis
let n = 2; // op => ()(), (())
n = 3; //=> ((())), (()()), (())(), ()(()), ()()()
// we solve it using extende ip op method ,
let open = n; // number of open parenthesis
let close = n; // number of close parenthesis
//HERE WE EXTENDED IP in open and close  , SO WE SAY IT extended ip op method
// how to identify extended ip op method, we have to make choice for each position and input data tye and op datatype will be different like here input was number an output is string
//in most of the cases in recursion tree will have diffrent no. of chilren at each level, two children means two call, one children means one call
//now find kab kab ham open ki branch ban rahi aur kab kab close ki
//seperate seperate
// then inside if call open for open condition and call close for close condition
// in our case jab jab open>0 tha tab tab open ki branch ban rahi thi
// aur jab jab close>open tha tabhi close ki ban rahi thi

//when we made recursion tree we found that if both open and

function generateBalancedParentheses(n) {
  function balancedParanthesis(open, close, output = "") {
    if (open === 0 && close === 0) {
      console.log(output);
      return;
    }
    //i can take open any time if open is not zero or say greater than 0
    if (open > 0) {
      balancedParanthesis(open - 1, close, output + "(");
    }
    if (close > open) {
      //can take close only if close is greater than open
      balancedParanthesis(open, close - 1, output + ")");
    }
  }
  balancedParanthesis(n, n);
}

generateBalancedParentheses(n);
