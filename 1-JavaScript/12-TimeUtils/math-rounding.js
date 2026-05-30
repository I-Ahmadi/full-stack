// ===================== MATH AND ROUNDING =====================

Math.pow(2, 3);      // 8
2 ** 3;              // 8 (modern way)

Math.sqrt(16);       // 4

Math.max(5, 10, 2);  // 10
Math.min(5, 10, 2);  // 2

Math.random();       // random number between 0 and 1

// Rounding Methods

// 1) Math.round() → round to nearest integer
Math.round(4.4);   // 4
Math.round(4.5);   // 5
Math.round(4.6);   // 5

// 2) Math.floor() → always round thDOWN
Math.floor(4.9);   // 4
Math.floor(4.1);   // 4
Math.floor(-4.1);  // -5

// 3) Math.ceil() → always round UP
Math.ceil(4.1);    // 5
Math.ceil(4.9);    // 5
Math.ceil(-4.9);   // -4

// 4) Math.trunc() → remove decimals (no rounding)
Math.trunc(4.9);   // 4
Math.trunc(-4.9);  // -4

// Round to decimal places
// Round to 2 decimal places:

let num1 = 4.5678;
Math.round(num1 * 100) / 100;  // 4.57

// Using toFixed():
let num2 = 4.5678;
num2.toFixed(2);              // "4.57" (STRING)
Number(num2.toFixed(2));      // 4.57 (NUMBER)

// Random Numbers

// Random number between 0 and 10:
Math.random() * 10; // Generat 0 to 10 number

// Random integer between 1 and 10:
Math.floor(Math.random() * 10) + 1;

// Exmaple: 

function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

const result = generateRandomNumber();

if (result % 2 === 0) {
    console.log('Even number: ', result)
} else {
    console.log('Odd number: ', result);
}
