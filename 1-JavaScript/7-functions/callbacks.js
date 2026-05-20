// ===================== Callbacks =====================

// Callback Function: A function passed as an argument to another function.
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order Function: A function that takes another function as argument.
const transformer = function(str, fn) {
    console.log(`Original: ${str}`);
    console.log(`Transformed: ${fn(str)}`);
};
