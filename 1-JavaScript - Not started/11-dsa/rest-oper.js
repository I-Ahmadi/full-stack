// ===================== THE REST OPERATOR =====================

// The rest operator (...) is used to collect multiple values into a single array (or object).

// It works in TWO main places:

// 1. In Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4, 5, 6, 7, 8, 9]];
console.log('Spread operator: ', arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Rest operator: ', a, b, others); // 1 2 [3, 4, 5, 6, 7, 8, 9]

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

// REST pattern on arrays
const [ pizza, risota, ...otherFood ] = [
    ...restaurant.mainMenu, 
    ...restaurant.startMenu
];

console.log(pizza, risota, otherFood); // Pizza Risoto ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"]

// REST pattern on objects
const { 
    thu: { open, close }, 
    ...weekdays 
} = restaurant.openingHours;
console.log(open, close, weekdays); // 12 22 | { fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } }

// Note: 1. Rest must always be the LAST element.

// ✔ Correct: const [a, ...rest] = [1, 2, 3];
// ❌ Wrong:  const [...rest, b] = [1, 2, 3]; // Error

// Note: 2. Only ONE rest element allowed

// ✔ Correct: const [a, ...rest] = [1, 2, 3];
// ❌ Wrong: const [a, ...b, ...c] = [1, 2, 3]; // Error

// 2. In Function Parameters
const add = function(...numbers) {
    console.log('...numbers: ', numbers); // [2, 3] | [5, 3, 7, 2] | [8, 2, 5, 3, 2, 1, 4]

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

const result1 = add(2, 3); // 5
const result2 = add(5, 3, 7, 2); // 17
const result3 = add(8, 2, 5, 3, 2, 1, 4); // 25
console.log('Results: ', result1, result2, result3); // 5 17 25

// With REST operator we can have as many parameters as we want and they will be packed into an array called 'numbers' in the function body.
restaurant.orderPizza('Pepperoni', 'Mushrooms', 'Onions', 'Olives'); // Pepperoni | ['Mushrooms', 'Onions', 'Olives']
restaurant.orderPizza('Mushrooms'); // Mushrooms | []
