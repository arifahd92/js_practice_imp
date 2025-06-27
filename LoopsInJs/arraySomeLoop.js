let arr = [1, 3, 5, 7];

let result = arr.some((num) => num % 2 === 0);
console.log(result); // false

arr = [1, 3, 5, 7];
result = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result = true;
        break;
    }
}
console.log(result); // true
