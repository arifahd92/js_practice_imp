let regex = /[1-5]/;

console.log(regex.test("15")); // true → matches the character '5'
console.log(regex.test("1")); // true → matches the character '1'
console.log(regex.test("3")); // true → matches the character '3'
console.log(regex.test("0")); // false → doesn't match '0'
console.log(regex.test("a")); // false → doesn't match 'a'

regex = /^[1-5]$/;
console.log(regex.test("1")); // true → entire string is exactly one digit from 1 to 5
console.log(regex.test("12")); // false → entire string is exactly one digit from 1 to 5
