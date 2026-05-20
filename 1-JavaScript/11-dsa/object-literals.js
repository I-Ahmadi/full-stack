// ===================== OBJECT LITERALS =====================

// Object literals are a way to create objects in JavaScript using a simple and concise syntax. 
// They allow you to define properties and methods directly within the object definition.

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

console.log('Restaurant object: ', restaurant);

console.log('---------------- OBJECT LITERALS ----------------');

// 1. The normal way to create an object
const openingHours1 = {
  mon: { open: 9, close: 17 },
  tue: { open: 10, close: 18 }
};
// "mon" and "tue" are fixed property names (keys)

// 2. Using a variable as a key (wrong way)
const day = 'wed';
const openingHours2 = {
  day: { open: 12, close: 22 }  // ❌ This creates a key literally called "day", not "wed"
};
console.log(openingHours2); // { day: { open: 12, close: 22 } }

// 3. Computed property names (correct way)
const openingHours3 = {
  [day]: { open: 12, close: 22 }  // ✅ key becomes "wed"
};
console.log(openingHours3); // { wed: { open: 12, close: 22 } }

// 4. Your example with weekdays array
const weekdays1 = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours4 = {
  [weekdays[2]]: { open: 12, close: 22 }, // weekdays[2] is 'wed'
  [weekdays[4]]: { open: 11, close: 23 }, // weekdays[4] is 'fri'
  [weekdays[6]]: { open: 0, close: 24 }   // weekdays[6] is 'sun'
};

// Accessing the values
console.log(openingHours.wed);    // { open: 12, close: 22 }
console.log(openingHours['fri']); // { open: 11, close: 23 }
