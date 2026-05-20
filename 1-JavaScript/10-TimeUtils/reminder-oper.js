// ===================== REMINDER OPERATOR =====================

// The remainder operator (%) returns the remainder
// after division.

// Syntax:
// a % b

10 % 3;   // 1
// 10 / 3 = 3 remainder 1

8 % 2;    // 0
// 8 is perfectly divisible by 2

5 % 4;    // 1

2 % 5;    // 2
// 2 is smaller than 5, so remainder is 2

// Check if a number is even or odd:

let num = 7;

num % 2 === 0;   // false (odd)
num % 2 === 1;   // true  (odd)

let num2 = 8;

num2 % 2 === 0;  // true (even)

// Use case: Loop cycling
for (let i = 0; i < 10; i++) {
  console.log(i % 3);
}

// Output repeats: 0,1,2,0,1,2,0,1,2,0

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log('Even number: ', numbers[i]);
  } else {
    console.log('Odd number: ', numbers[i]);
  }
}
