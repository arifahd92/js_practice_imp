// function* generator1() {
//   let i = 0;
//   yield i++;
//   yield i++;
// }
// const gen = generator1();
// while(gen.next().value!==undefined ) {
//   console.log(gen.next().value);
// }

function* gen(a) {
  const x = yield a;
  console.log(x, "im x,,", a);
  console.log(x);
}

const g = gen(5);

console.log(g.next(1));
console.log(g.next(50));

let a = [1, 2, 3];
let iterator = a[Symbol.iterator]();
while(true){
    let next = iterator.next();
    if(next.done) break;
    console.log(next.value);

}

const arr = [1, 2, 3, 4, 5];

arr[Symbol.iterator] = function* () {
    for (const value of this) {
        if (value % 2 === 0) {
            yield value;
        }
    }
};

for (const value of arr) {
    console.log(value); // Output: 2, 4
}