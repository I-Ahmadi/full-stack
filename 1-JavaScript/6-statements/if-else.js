// ===================== If Else Statments =====================

// An if...else statement in JavaScript is a control structure used to make decisions in code.

// It checks a condition:
// If the condition is true, one block of code runs
// If the condition is false, another block runs

const age1 = 19;
// const isOldEnought = age1 >= 18;

// if (isOldEnought) {
if (age1 >= 18) {
    console.log('Sarah can start driving license!');
} else {
    const yearsLeft = 18 - age1;
    console.log(`Sara is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Multiple Conditions (else if)
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Short Version (Ternary Operator)
let age2 = 16;

let message = age2 >= 18 ? "Adult" : "Minor";
console.log(message);
