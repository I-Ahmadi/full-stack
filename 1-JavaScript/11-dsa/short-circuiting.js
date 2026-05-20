// ===================== SHORT CIRCUITING =====================

// Short-circuiting is when JavaScript stops evaluating an expression as soon as the result is determined.

// || (OR) - The OR operator returns the first truthy value of all the operands and the last value if all of them are falsy.
// && (AND) - The AND operation returns the first falsy value or the last value if all of them are truthy.

// Use ANY data type, return ANY data type, short-circuiting

// OR operator
console.log('---- OR ----');
console.log(3 || 'Ismail'); // 3
console.log('' || 'Ismail'); // Ismail
console.log(true || 0); // true
console.log(undefined || null); // null

// The OR will always return the first truthy value or the last value if all are falsy
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello

const restaurant = {
    name: 'Classic Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organiz'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },

    order: function (starterIndex, mainIndex) {
        return [
            this.startMenu[starterIndex], this.startMenu[mainIndex]
        ]
    },
    
    orderPasta: function(ing1, ing2, ing3) {
        return console.log(`Here is your delicious past with ${ing1}, ${ing2}, ${ing3}`);
    },

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient); // Pepperoni
        console.log(otherIngredients); // ['Mushrooms', 'Onions', 'Olives']
    }
}

restaurant.numGuests = 23;

// Using Ternary operator
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log('Guests 1: ', guests1); // 10

// With short-circuiting
const guest2 = restaurant.numGuests || 10;
console.log('Guests 2: ', guest2);

// AND operator
console.log('---- AND ----');
console.log(0 && 'Ismail'); // 0
console.log(23 && 'Ismail') // 23

// Note:
// If the value is falsy, the AND returns the falsy value. 
// If the value is not falsy, it returns the last value

console.log('Hello' && 23 && null && 'Ismail'); // null

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

// Nullish: only checks for null and undefined (NOT 0 or '')
console.log('---- Nullish ----');
const guestCorrect = restaurant.numGuests ?? 10;

// Logical assignment operators
const rest1 = {
    name: 'Capri',
    // numGuests: 20,
    numGuests: 0,
}

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10; // If numGuests is 0 (10) will be assigned to rest1.numGuests
rest2.numGuests = rest2.numGuests || 10; // If numGuests is 0 (10) will be assigned to rest2.numGuests
console.log('OR assignment operator: ', rest1.numGuests, rest2.numGuests); // 10 10

// Logical nullish assignment operator
rest1.numGuests ||= 10; // If numGuests is null or undefined (0) will NOT be assigned to rest1.numGuests
rest2.numGuests ||= 10; // If numGuests is null or undefined (10) will be assigned to rest2.numGuests
console.log('Logical nullish assignment operator: ', rest1.numGuests, rest2.numGuests); // 0 10

// Nullish assignment operator
rest1.numGuests ??= 10; // If numGuests is null or undefined (0) will NOT be assigned to rest1.numGuests
rest2.numGuests ??= 10; // If numGuests is null or undefined (10) will be assigned to rest2.numGuests
console.log('Nullish assignment operator: ', rest1.numGuests, rest2.numGuests); // 0 10

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'; // If owner is falsy (undefined) will be assigned to rest1.owner
// rest2.owner = rest2.owner && '<ANONYMOUS>'; // If owner is falsy (Giovanni Rossi) will NOT be assigned to rest2.owner
rest1.owner &&= '<ANONYMOUS>'; // If owner is falsy (undefined) will be assigned to rest1.owner
rest2.owner &&= '<ANONYMOUS>'; // If owner is falsy (Giovanni Rossi) will NOT be assigned to rest2.owner
console.log('AND assignment operator: ', rest1.owner, rest2.owner); // undefined <ANONYMOUS>
