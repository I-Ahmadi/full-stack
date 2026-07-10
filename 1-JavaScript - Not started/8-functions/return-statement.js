// ===================== Return Statement =====================

// Sends a value back to caller
// Stops function execution immediately
// No return → undefined

// Example:
function multiply(number1, number2) { 
    return number1 * number2; 
}

// Using return value:
let multiplyResult = multiply(4, 5) * 2; // 40
console.log("The total is:", multiplyResult);

// No return statement:
function noReturn() { let x = 10; }

let noReturnResult = noReturn();
console.log("The result of no return function is:", noReturnResult); // undefined

// Early return:
function checkAge(name, age) {
    if (age < 0) return "Invalid age";

    if (age <= 2) {
        return `${name} is ${age} years old.`
    } else if (age >= 3 && age <= 12) {
        return `${name} is a child.`
    } else if (age >= 13 && age <= 17) {
        return `${name} is a teenager.`
    } else if (age >= 18 && age <= 25) {
        return `${name} is a young adult.`
    } else if (age >= 26 && age <= 59) {
        return `${name} is an adult.`
    } else if (age >= 60) {
        return `${name} is a senior citizen.`
    }
}

let ageResult = checkAge("John", 16); // "John is a teenager."
console.log("Age check result:", ageResult);
