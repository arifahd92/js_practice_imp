/** @format */
// match, exactly same substring should be present in string if not you will get null
//i case insensitive search  (by default case sensitive match is performed  )
//g, it is used to collect all matches if multiple time substring is present it will give all matched substring in array form it can be combined with i also

/*
/g	Perform a global match (find all)
/i	Perform case-insensitive matching
/m	Perform multiline matching
*/

/*
let text = "s w3schools,w3schools";
let pattern = /w3schools/i;
let result = text.match(pattern);
console.log( result);//[  'w3schools',  index: 2,  input: 's w3schools,w3schools',  groups: undefined]
*/

/*
let text = "s w3schools,w3schools";
let pattern = /w3schools/g;
let result = text.match(pattern);
console.log(result); //[ 'w3schools', 'w3schools' ]
*/

/*
let text = "s w3schools,W3schools";
let pattern = /w3schools/g;
let result = text.match(pattern);
console.log(result); //[ 'w3schools' ], due to case sensitive search capital W3schools discarded
*/

/*
let text = "s w3schools,W3Schools";
let pattern = /w3schools/gi;
let result = text.match(pattern);
console.log(result); //[ 'w3schools', 'W3Schools' ],
*/

/*
[abc]	Any of the characters a, b, or c
[A-Z]	Any character from uppercase A to uppercase Z
[a-z]	Any character from lowercase a to lowercase z
[A-z]	Any character from uppercase A to uppercase Z and lowercase a to  lowercase z
[A-H]   Any character from uppercase A to uppercase H
// imp******
[A-h]  Any character from uppercase A to uppercase Z and lowercase a to  lowercase h
*/
/*
let text = "Is this all there is?";
let pattern = /[h]/g;
let res = text.match(pattern);
console.log(res); //[ 'h', 'h' ];
*/

/*
let text = "Is this all there is?";
let pattern = /[h,s]/g;
let res = text.match(pattern);
console.log(res); //[ 's', 'h', 's', 'h', 's' ]
*/

/*
let text = "Do you know if this is all there is?";
let pattern = /[is]/gi; // for now both [is] and [i,s] doing same , i ya s jo bhi mile push in res
let res = text.match(pattern);
console.log(res);
*/

/*
let text = "I Scream For Ice Cream, is that OK?!";
let pattern = /[A-e]/g;// capital A to Z , small a to e
let res = text.match(pattern);
console.log(res);//['I', 'S', 'c', 'e','a', 'F', 'I', 'c','e', 'C', 'e', 'a','a', 'O', 'K']
*/

//*********************** search vs match   search returns index  or say position but match returns substring **********************
//*********************** test returns true or false ******************************************************************************

/*
let text = "Is this all there is?";
let pattern = /[^h]/g;
let result = text.match(pattern);
console.log(result); // except h all characters ['I', 's', ' ', 't', 'i', 's', ' ', 'a', 'l', 'l', ' ', 't', 'e', 'r', 'e', ' ', 'i', 's', '?']
*/
/*
[^abc]	Not any of the characters a, b, or c
[^A-Z]	Not any character from uppercase A to uppercase Z
[^a-z]	Not any character from lowercase a to lowercase z
[^A-z]	Not any character from uppercase A to lowercase z
*/

/*
let text = "Is this all there is * $ # % ? ";
let pattern = /[^A-z,' ']/g; // neither space nor a to z nor A TO Z
let result = text.match(pattern);
console.log(result); //[ '*', '$', '#', '%', '?' ]
console.log(text.match(/[*,#,$]/g)); //[ '*', '$', '#' ], this wi acting like or
*/

/*
let text = "re, green, red, green, gren, gr, blue, yellow";
let pattern = /(red|green)/g; // for strings ()
let result = text.match(pattern);
console.log(result); //[ 'green', 'red', 'green' ]
*/

/*
//*****************************************remember test is method of pattern not of text************************
let text = "The best things in life are free";
let pattern = /ests/;// faild due to extra s
let result = pattern.test(text);
console.log(result); //false
*/

/*
let text = "The best things in life are free";
let pattern = /[ests]/; //acting like or
let result = pattern.test(text);
console.log(result); //true
*/

// quantifiers ***************************************************************************************************

/*
// + at least one
let text = "Hellooo World! Hello W3Schools!";
let pattern = /o+/g;
let result = pattern.test(text);
console.log(result); //true
*/

// A global search for an "l", followed by zero or more "o" characters:
// let text = "Hellooo World! Hello W3Schools!";
// let pattern = /lo*/g;
// let res = text.match(pattern);
// console.log(res); //[ 'l', 'looo', 'l', 'l', 'lo', 'l' ]

/*
A global search for sequence of four digits:
let text = "100, 1000 or 10000?";
let pattern = /\d{4}/g;
let result = text.match(pattern);
console.log(result); //[ '1000', '1000' ]
*/

/*
// A global search for a substring that contains a sequence of three to four digits:,start from digit end oon digit
let text = "100, 17000 or 10y007?";
let pattern = /\d{3,4}/g;
let result = text.match(pattern);
console.log(result); //[ '100', '1700', '007' ]
*/

/*
// A global search for a sequence of at least three digits:
let text = "100, 1000 or 10000?";
let pattern = /\d{3,}/g;      
*/
let text = "2024-08-23T03:00:00Z";
let pattern =
  /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\dZ$/;
let result = pattern.test(text);
console.log(result); //true
