// ===================== Advanced Concepts =====================

// REST Parameters: Allows unlimited arguments as an array.
function restParameters(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(restParameters(1, 2, 3, 4, 5)); // 15

// Value vs Reference: 
// * Primitives are copied. * Objects are referenced.
const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 2342323423423
};

const checkIn = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
};

checkIn(flight, jonas);

console.log(flight); // LH234
console.log(jonas); // { name: "Mr. Jonas Schmedtmann", passport: 2342323423423 }

// Why?
// flight is a primitive → not changed inside function
// jonas is an object → changes affect original object

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(jonas);

console.log(jonas.passport); // 4827391823
