function generateOtp(len = 4) {
  let min = 1,
    max = 9;
  while (len-- > 1) {
    min *= 10;
    max *= 10;
  }
  const rand = Math.random();
  const otp = Math.floor(min + rand * max);
  console.log(otp);
}
generateOtp(9);

function dice(target, ans = "") {
  if (target == 0) {
    console.log(ans);
    return;
  }
  if (target < 0) {
    return;
  }

  for (let i = 1; i <= 6; i++) {
    dice(target - i, ans + i);
  }
}
dice(3);

let l1 = [2, 4, 3],
  l2 = [5, 6, 4];
let sum = 0;
for (let i = 0; i < l2.length; i++) {
  let m = 1;
  let j = i;
  while (j-- > 0) {
    m *= 10;
  }
  sum = sum + l2[i] * m;
}
console.log(first)