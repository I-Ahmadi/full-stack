// ===================== For Loop =====================

// A for loop is used whenever you need to repeat something multiple times.
// for loop is commonly used for iterating over arrays.
// Instead of writing the same code again and again, loops automate repetition.

console.log('Lifting weights repetition 1 🏋️');
console.log('Lifting weights repetition 2 🏋️');
console.log('Lifting weights repetition 3 🏋️');
console.log('Lifting weights repetition 4 🏋️');
console.log('Lifting weights repetition 5 🏋️');
console.log('Lifting weights repetition 6 🏋️');
console.log('Lifting weights repetition 7 🏋️');
console.log('Lifting weights repetition 8 🏋️');
console.log('Lifting weights repetition 9 🏋️');

for (let rep = 1; rep <= 9; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}

// Real life example

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18]

// Searching through for loop

const users = ['Jonas', 'Martha', 'Adam', 'Sarah', 'Michael'];

for (let i = 0; i < users.length; i++) {
    if (users[i] === 'Adam') {
        console.log('Found Adam!');
    } else {
        console.log(`User ${users[i]} is not Adam.`);
    }
}

// -------------------- break & continue in JavaScript --------------------

// Both `break` and `continue` are used inside loops to control how the loop behaves.


// 1. `break` completely stops the loop.
// Once JavaScript encounters `break`, it exits the loop immediately.

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i); // 1, 2, 3, 4 and then stops when i is 5
}

// Loop stops immediately.
// Nothing after 5 runs.

// 2. `continue` skips the current iteration and moves to the next one.
// The loop continues running.

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Examples:

// Skip Invalid Data
const ages = [20, 25, "error", 30, 18];

for (let i = 0; i < ages.length; i++) {
    if (typeof ages[i] !== "number") {
        continue;
    }

    console.log(ages[i]);
}

// Stop When Found
const products = ["Laptop", "Phone", "Tablet", "Camera"];

for (let i = 0; i < products.length; i++) {
    if (products[i] === "Tablet") {
        console.log("Product Found");
        break;
    }

    console.log("Checking:", products[i]);
}
 