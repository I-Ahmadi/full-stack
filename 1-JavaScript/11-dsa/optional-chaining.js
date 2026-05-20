// ===================== OPTIONAL CHAINING =====================

// Optional chaining allows us to safely access nested properties of an object without having to check if 
// each level of the object exists. It prevents errors that would occur if we try to access a property of an undefined or null value.

// The syntax for optional chaining is the question mark (?.) followed by the property name. 
// If the property exists, it will return its value. If it does not exist, it will return undefined instead of throwing an error.

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
    [weekdays[2]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [`day-${weekdays[6]}`]: {
        open: 0,
        close: 24,
    },
};

const startMenu = ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'];
const mainMenu  = ['Pizza', 'Pasta', 'Risotto'];

const restaurant = {
    name: 'Classic Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organiz'],

    // ES6 enhanced object literals
    openingHours, // same as openingHours: openingHours
    startMenu,    // same as startMenu: startMenu
    mainMenu,     // same as mainMenu: mainMenu

    // Method definition shorthand
    order(starterIndex, mainIndex) {
        return [
            this.startMenu[starterIndex], this.startMenu[mainIndex]
        ]
    },

    // Method definition shorthand
    orderPasta(ing1, ing2, ing3) {
        return console.log(`Here is your delicious past with ${ing1}, ${ing2}, ${ing3}`);
    },

    // Method definition shorthand
    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
}

const wednesday = restaurant.openingHours.wed; // { open: 12, close: 22 }
const monday = restaurant.openingHours.mon.open; // It will throw an error: cannot read properties of undefined

// We don't know whether this particular restaurant is open on monday, so the 
// safe way to access it is to use optional chaining.

// Checking through if statment
if (restaurant.openingHours.mon.open) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri.open) console.log(restaurant.openingHours.mon.fri); // 11

// Object with optional chaining

// Using optional chaining to avoid errors
// If the monday exists, it will return the value otherwise undefined
const optionalChainingCheck = restaurant.openingHours.mon?.open; 
const optionalChainingDoubleCheck = restaurant.openingHours?.mon?.open; 

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods with optional chaining
const isOrderExist = restaurant.order?.(0, 1) ?? 'Method does not exist'; // ["Focaccia", "Bruschetta"]
const isOrderRisottoExist = restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'; // Method does not exist
console.log(isOrderExist, isOrderRisottoExist); // ["Focaccia", "Bruschetta"] Method does not exist

// Arrays with optional chaining
const users = [
    { name: 'John', email: 'john@example.com' },
    { name: 'Jane', email: 'jane@example.com' },
];

console.log(users[0]?.name ?? 'User not found'); // John
console.log(users[1]?.name ?? 'User not found'); // Jane
console.log(users[2]?.name ?? 'User not found'); // User not found
