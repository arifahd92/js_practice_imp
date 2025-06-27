// Character Set []
/*
 syntax
  [1234] 
  [123qwer]
  [1-5ab], same as [12345ab]
  [a-zAB]
  [a-zA-Z0-9]//any charcter in a string matchs from a number or small letter or capital

  ^[1-5]//first character should match means firstone should be from 1 to 5

  /^[1-5]$/ , till now i came to now $ says string should end with last match condition 
  //here last match said string must should start with a number from one to 5 

*/
// in a complete string it amtches that any character matches in range character or not

function fn(cb) {
  let num = 9;
  setTimeout(() => {
    num++;
    cb(num)
  }, 0);
  return num;
}
new Promise((res)=>{
fn(res)
}).then((data)=>console.log(data))