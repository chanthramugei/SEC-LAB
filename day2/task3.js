// Use break: stop at the first prime number between 10 and 20
for (let num = 10; num <= 20; num++) {
  let isPrime = true;
  for (let div = 2; div < num; div++) {
    if (num % div === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log("First prime number found:", num);
    break;
  }
}

// Use continue: print only odd numbers between 1 and 20
for (let x = 1; x <= 20; x++) {
  if (x % 2 === 0) continue;
  console.log(x);
}