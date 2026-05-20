// ===================== Data Types =====================

// 1. Numbers | Used for calculations.
let marks       = 95;
let temperature = 36.5;

// 2. Strings | Used for text.
let firstName = "Ismail";
let lastName  = 'Ahmadi';
console.log(firstName + " " + lastName); // This will print "Ismail Ahmadi"

// 3. Bigint | A number representing a large integer.
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)

// 4. Booleans | true or false
let isLoggedIn      = true;
let hasSubscription = false;
if (isLoggedIn) {
    console.log("User is logged in.");
    if (hasSubscription) {
        console.log("User has an active subscription.");
    }
} else {
    console.log("User is not logged in.");
}

// 5. Undefined | Variable declared but not assigned a value.
let score;
console.log(score); // This will print undefined
score = 97; // The value is assigned
console.log(score); // This will print 97

// 6. Null | Variable is intentionally empty
let selectedOption = null;
console.log(selectedOption); // This will print null
selectedOption = "Option 1";
console.log(selectedOption); // This will print "Option 1"

// 7. Objects | Group realted data
let person = {
    name: "Ismail",
    age: 22,
    address: {
        country: "United State",
        city: "Maryland",
        zipCode: "4003",
        location: {
            latitude: 34.5553,
            longitude: 69/2075
        }
    },
    education: {
        isStudent: true,
        school: {
            name: "Hight School",
            grade: 11
        }
    },
    skills: ["TypeScript", "Node JS", "APIs", "Database"]
};

// 8. Arrays | Group multiple values in order
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let fruits  = ["Apple", "Banana", "Orange", "Mango"];

// ---

// typeof | Returns the type of a variable or an expression:
let studentName = "Ismail";
let studentAge  = 22;
let isStudent   = true;

typeof studentName;
typeof studentAge;
typeof isStudent;
