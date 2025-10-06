// remove an element from array [1,2,3,4], 3

/*
var number =1
function number(params) {
    console.log("function called")
}
console.log(number())
*/

let userData = [
    { id: 1, name: "a", isNew: true, email: "a@gmail.com" },
    { id: 2, name: "b", isNew: false, email: "b@gmail.com" },
    { id: 3, name: "c", isNew: true, email: "c@gmail.com" },
    { id: 4, name: "d", isNew: false, email: "d@gmail.com" },
    { id: 5, name: "e", isNew: true, email: "e@gmail.com" },
    { id: 6, name: "f", isNew: false, email: "f@gmail.com" }
];
// required op
[
    { userId: 1, name: "a", email: "a@gmail.com" },
    { userId: 2, name: "b", email: "b@gmail.com" },
    { userId: 3, name: "c", email: "c@gmail.com" },
    { userId: 4, name: "d", email: "d@gmail.com" },
    { userId: 5, name: "e", email: "e@gmail.com" },
    { userId: 6, name: "f", email: "f@gmail.com" }
]

//store created by a developer 
let verifyData = [
    { 1: { memberShip: [101, 102, 103] } },
    { 2: { memberShip: [101, 102, 103] } },
    { 3: { memberShip: [101, 102, 103] } },
    { 4: { memberShip: [101, 102, 103] } },
    { 5: { memberShip: [101, 102, 103] } },
    { 6: { memberShip: [101, 102, 103] } }
];
//can it be optimized
let userId = 1, postId = 104;
let isValidUserAndPost


//i have a function searchCountry that is taking some character and doing some heavy calculation and returning a country
function searchCountry(keyWord) {
    for (let i = 0; i < 20000; i++) {

    }
    return num
}

// the above function should trigger only on when user stopped typing at least for 400ms and keyword length is at least 3

let arr1 = ["x1", "x2", "x3"], arr2 = ['y1', 'y2', 'y3']
const ans = []
for (let i = 0, start = 1; i < arr2.length; i++, start++) {
    ans.push(arr1[i]);
    ans.push(arr2[i])
}
console.log(ans);

(() => {
    let arr1 = ["x1", "x2", "x3", 'y1', 'y2', 'y3']
    let ans = []
    let i = 0, j = Math.floor(arr1.length / 2)
    for (k = 0; k < arr1.length / 2; k++) {
        ans.push(arr1[i++])
        ans.push(arr1[j++])
    }
    console.log(ans, "im ans")
})()



const a = () => {
    b(); // ✅ This is fine because b() is called later
};

const b = () => {
    console.log("b called");
};

a(); // This works because b is defined by now
