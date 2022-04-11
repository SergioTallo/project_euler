// Factorial digit sum
//
// Problem 20
// n! means n × (n − 1) × ... × 3 × 2 × 1
//
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!

const start = process.hrtime();

const n = 1000

let fact = BigInt(1);

for (let i = BigInt(1); i <= n; i++) {
    fact *= i;
}

console.log(fact);

fact = BigInt(fact);
let sum = BigInt(0);

while (fact) {
    sum += fact % BigInt(10);
    fact = fact / BigInt(10);
}

console.log(sum);

const stop = process.hrtime(start);
const miliseconds = (stop[0] * 1000000000 + stop[1]) / 1000000;
console.info(`${miliseconds} miliseconds`);