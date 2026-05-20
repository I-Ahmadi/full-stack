// ===================== THE SPREAD OPERATOR =====================

// The spread operator (...) is used to expand (unpack) elements of an array or object 
// into individual values.

// Whithout spread operator
const arr = [44, 55, 66, 77];
const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2], arr[3]];
console.log('Not using spread operator: ', badNewArr);

// With spread operator
const newArr = [1, 2, 3, 4, ...arr];
console.log('Using spread operator: ', newArr);

const restaurant = {
    name: 'Classic Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organiz'],
    startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [
            this.startMenu[starterIndex], this.startMenu[mainIndex]
        ]
    },
    
    orderPasta: function(ing1, ing2, ing3) {
        return console.log(`Here is your delicious past with ${ing1}, ${ing2}, ${ing3}`);
    }
}

// Creating a new brand array
const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Chicken'];
console.log('New menu: ', newMenu);

// Shallow copy of an array using spread operator
const mainMenuCopy = [...restaurant.mainMenu];
console.log('Main menu copy: ', mainMenuCopy);

// Join 2 or more arrays
const recentlyAddedMenu = ['Rice', 'Bean', 'Meat'];
const brandNewMenu = [...restaurant.startMenu, ...restaurant.mainMenu, ...recentlyAddedMenu];
console.log('Newly arrived menu: ', brandNewMenu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Ismail';
const letters = [...str, ' ', 'A', 'h', 'm', 'd', 'i'];
console.log(letters);
console.log(...letters);

// This will not work because this is not the place that expects multiple values seperated by commas
// console.log(`${...str} Ahmadi`);

// Real-world example
// const ingredients = [
//     prompt('let\'s make pasta! Ingredient 1?' ),
//     prompt('Ingredient 2?'),
//     prompt('Ingredient 3?')
// ];

// The old way to pass parameters to a function
// const oldWay = restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// const newWay = restaurant.orderPasta(...ingredients);
// console.log('Passing parameters the old and new way: ', oldWay, newWay);

// Spread with objects
const newRestaurant = { 
    foundedIn: 1998, 
    ...restaurant, 
    founder: 'Guiseppe' 
};

// // Shallow copy of an object using spread operator
const restaurantCopy = { ...restaurant, action: 'object coppied' };
restaurantCopy.name = 'Ristorante Roma';

console.log('Restaurant object copy: ', restaurantCopy);
console.log('New name: ',          restaurantCopy.name);
console.log('Old name: ',              restaurant.name);
