// ===================== OBJECT DESTRUCTURING =====================

// Destructuring is a JavaScript feature that allows you to extract values from arrays or properties from 
// objects and assign them to variables in a simple way.

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

    orderDelivery: function({
        starterIndex = 1, 
        mainIndex = 0, 
        time = '20:00', 
        address
    }) {
        // console.log(
        //     `Order received! ${this.startMenu[starterIndex]} 
        //     and ${this.mainMenu[mainIndex]} will be delivered 
        //     to ${address} at ${time}`
        // );
    }
}

// Destructuing an Object
// const { name, openingHours, categories } = restaurant;
// console.log('Destructuing restaurant Object: ', name, openingHours, categories)

// Destructuring with new variable names
// const { name: restaurantName, openingHours: hours, categories: types } = restaurant; 
// console.log('Destructuring with new variable names: ', restaurantName, hours, types)

// Default values
const { 
    name: restaurantName = "KFC", 
    menu: foodMenu = [], 
    startMenu: starters = []
} = restaurant;
// console.log('Default values: ', restaurantName, foodMenu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log('Mutating variables: ', a, b);

// Nested objects
// const { open, close } = restaurant.openingHours.fri;
// console.log('Open:', open, 'Close:', close);

const {
    fri: {open: o = '0', close: c = '0'}
} = restaurant.openingHours;
// console.log('Open:', o, 'Close:', c);

// Best way to pass multiple paramters to a function
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2
});

restaurant.orderDelivery({ address: 'Via del Sole, 21', starterIndex: 1 });
