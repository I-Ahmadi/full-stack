module.exports.add = function(a, b) {
    return a + b;
};

module.exports.multiply = function(a, b) {
    return a * b;
}

module.exports.divide = function(a, b) {
    return a / b;
}

// The modern way to export values
// exports.add      = (a, b) => a + b;
// exports.multiply = (a, b) => a * b;
// exports.divide   = (a, b) => a / b;

// ----------------

// function add(a, b) {
//     return a + b;
// };

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// module.exports = {
//     add: add,
//     multiply: multiply,
//     divide: divide
// }
