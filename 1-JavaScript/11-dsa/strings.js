// ===================== STRINGS =====================

// A string is a data type used to represent text.

const airline = 'TAP Air Portugal';
const plane   = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B337'.length);  // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8

console.log(airline.indexOf('portugal')); // -1 (not found because strings are case-sensitive)

// ===================== SLICES =====================

// slice() is a string (or array) method used to extract a portion of a string or array without changing the original.

// Syntax (for strings)
// string.slice(start, end)

// start → index where extraction begins (included)
// end → index where extraction ends (excluded)
// If end is omitted → extracts till the end of the string
// Negative numbers → count from the end of the string

// slice(start, end)
console.log(airline.slice(4)); // 'Air Portugal' (starts from index 4 to end)
console.log(airline.slice(4, 7)); // 'Air' (from index 4 up to 7, not including 7)

// Extract first word && // Extract last word
console.log(airline.slice(0, airline.indexOf(' '))); // 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // 'Portugal'

// Using negative indexes
console.log(airline.slice(-2)); // 'al' (last 2 characters)
console.log(airline.slice(1, -1)); // removes first and last character

// ---

// Lower, upper and trim methods
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log('Passenger correct name: ', passengerCorrect); // Jonas

// Comparing emails
const email = 'ismail.ahmadi.929@gmail.com';
const loginEmail = 'Ismail.Ahmadi.929@gmail.Com';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log('The correct email: ', trimmedEmail);

// All in one
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log('Normalized email: ', normalizedEmail);
console.log(`Checking email: ${email === normalizedEmail}`);

// Replacing
const priceGB = '288,97€';
const priceUS = priceGB.replace('€', '$').replace(',', '.');
console.log(priceGB, priceUS);

const annoucement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log('Replace: ', annoucement.replace('door', 'gate'));
console.log('Replace all: ', annoucement.replace('door', 'gate'));

// Includes, startsWith, an endsWith
const planeAir = 'Air A320neo';
// const planeInclude = 'A320neo';
console.log(planeAir.includes('A320')); // true
console.log(planeAir.includes('Boeing')); // false

console.log(planeAir.startsWith('Air')); // true

if (planeAir.startsWith('Airbus') && planeAir.endsWith('new')) {
    console.log('Part of the NEW Airbus family.');
} else {
    console.log('Not part of the NEW Airbus family.')
}

// ===================== SPLITE =====================

// The split() method splits a string into an array of smaller strings based on a separator you provide.

// Syntax:
// string.split(separator, limit)

// separator → where the string will be split (like space " ", comma ",", or any character/regex)
// limit → optional, maximum number of splits

// Split by space
const fullName = "Ismail Ahmadi";
const splittedBySpace = fullName.split(' ');
console.log('Split by space: ', splittedBySpace);

const [firstName, lastName] = splittedBySpace;
console.log(firstName, lastName);

// Split by character
console.log('Splite by character: ', fullName.split(''));

// Limit number of splits
const data = 'one,two,three,four';
console.log('Limitting: ', data.split(',', 2));

// Join
const newName = ['Mr.', 'Ismail', 'Ahamdi'];
console.log(newName.join(' ')) // Mr. Ismail Ahamdi

console.log('------------------------------------');

// const capitalizeName = function(name) {
//     const names = name.split(' ');
//     const namesUpper = [];
//     for (const n of names) {
//         namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     }

//     console.log(namesUpper.join(' '));
// }

// capitalizeName('jessica ann smith davis');
// capitalizeName('jonas schmedtmann');

// Function to check the middle seat
// const checkMiddleSeat = function(seat) {
//     // B and E are middle seats
//     const s = seat.slice(-1);
//     if (s === 'B' || s === 'E') {
//         console.log('You have the middle seat.');
//     } else {
//         console.log('You don\'t have the middle seat.' );
//     }
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// const checkBaggage = function(items) {
//     const baggage = items.toLowerCase();
//     if (baggage.includes('knif') || baggage.includes('gun')) {
//         console.log('You are NOT allowed on board.');
//     } else {
//         console.log('Welcome aboard!');
//     }
// }

// checkBaggage('I have a laptop, some food, and a pocket Knif');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
