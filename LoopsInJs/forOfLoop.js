// except array it can be used for 
// 1)
for (const char of "hello") {
    console.log(char); // h e l l o
}

// 2)
const map = new Map([["a", 1], ["b", 2]]);
for (const [key, value] of map) {
    console.log(key, value); // a 1, b 2
}

// 3)
const set = new Set([1, 2, 3]);
for (const value of set) {
    console.log(value); // 1 2 3
}


// 4)
function demo() {
    for (const arg of Array.from(arguments)) {
        console.log(arg);
    }
}
demo(1, 2, 3);


// 5)
const divs = document.querySelectorAll("div"); // NodeList
for (const div of divs) {
    console.log(div); // each div element
}
