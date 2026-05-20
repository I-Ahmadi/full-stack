// ===================== FOR OF LOOP =====================

// for...of is used to loop over values in something like:
// Arrays
// Strings
// Maps
// Sets

// It gives you the actual value, not the index.

const restaurant = {
    name: 'Classic Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',

    categories: [
        'Italian', 
        'Pizzeria', 
        'Vegetarian', 
        'Organiz'
    ],
    startMenu: [
        'Focaccia', 
        'Bruschetta', 
        'Garlic Bread', 
        'Caprese Salad'
    ],
    mainMenu: [
        'Pizza', 
        'Pasta', 
        'Risotto'
    ],
}

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(`item: ${item}`);

// What happens?

// It goes one by one:
// item = "Focaccia"
// item = "Bruschetta"
// item = "Garlic Bread"

// Output:
// item: Focaccia
// item: Bruschetta
// item: Garlic Bread

// It gives you the values directly.

// .entries()

// Because for...of gives only the value.
// If you also want the index, you use:
// for (const item of menu.entries())

// Now each item becomes:
// [index, value]

// Example:
// [0, "Pizza"]
// [1, "Burger"]

// That’s why you needed:

// item[0]  // index
// item[1]  // value

// Whithout destructuring, you would do:
for (const item of menu.entries()) {
    console.log(`${item[0] + 1}: ${item[1]}`);
}

console.log('-------------------------------------');

// With destructuring, you can do:
for (const [index, element] of menu.entries()) {
    console.log(`${index + 1}: ${element}`);
}
