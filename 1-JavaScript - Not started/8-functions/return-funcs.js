// ===================== Functions Returning Functions =====================

// A function that, when executed, returns another function instead of a normal value.

// In JavaScript, functions are treated like values. So they can:
// Be stored in variables
// Be passed as arguments
// Be returned from other functions

const greetingFun = function(greeting) {
    return function(name) {
        console.log(`Greeting: ${greeting} ${name}`)
    }
}

// greetingFun('Hey')('Ismail');

const greeterHey = greetingFun('Hey');
greeterHey('Jonas');
greeterHey('Steven')

const calculate = function(operation) {
    const operatior = operation;
    if (operatior === '+') {
        return function(a, b) {
            return a + b;
        }
    } else if (operatior === '-') {
        return function(a, b) {
            return a - b;
        }
    } else if (operatior === '*') {
        return function(a, b) {
            return a * b;
        }
    } else if (operatior === '/') {
        return function(a, b) {
            return a / b;
        }
    } else {
        return "Invalid operator";
    }
}

console.log("calculate: ", calculate('+')(5, 3)); // 8
console.log("calculate: ", calculate('-')(5, 3)); // 2
console.log("calculate: ", calculate('*')(5, 3)); // 15
