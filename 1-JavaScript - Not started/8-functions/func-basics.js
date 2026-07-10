// ===================== Function Basics =====================

// Function: 
// A function is a reusable block of code designed to perform a specific task.
// It runs when it is "called".

function greetJohnAndJane(john, jane) {
    return `Hello ${john} and ${jane}!`;
}

const greetResult = greetJohnAndJane("John", "Jane");
console.log(greetResult);

function multiply(number1, number2) {
    return number1 * number2;
}

let multiplyResult = multiply(4, 5) * 2;
console.log("The total is:", multiplyResult);

function noReturn() { let x = 10; }
console.log(noReturn());

function checkAge(name, age) {
    if (age < 0) return "Invalid age";
    if (age <= 2) return `${name} is ${age} years old.`;
    if (age <= 12) return `${name} is a child.`;
    if (age <= 17) return `${name} is a teenager.`;
    if (age <= 25) return `${name} is a young adult.`;
    if (age <= 59) return `${name} is an adult.`;
    return `${name} is a senior citizen.`;
}
