// ===================== LOOPING OBJECTS =====================

// Objects are not iterable, but we can loop over them using Object keys, values and entries methods

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
    }
}

// Looping over KEYS
const properties = Object.keys(restaurant.openingHours);
console.log('Properties: ', properties); // Properties:  [ 'thu', 'fri', 'sat' ]

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
    openStr += `${day}`;
}

console.log(`Open str: ${openStr}`); // Open str: We are open on 3 days: thusfri sat

// Looping over VALUES
const values = Object.values(restaurant.openingHours)
console.log('Values: ', values); // [ { open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 } ]

// [key, value]
for (const [day, { open, close }] of Object.entries(restaurant.openingHours)) {
    console.log(`On ${day} we open at ${open} and clsoe at ${close}`);
    // On thu we open at 12 and clsoe at 22
    // On fri we open at 11 and clsoe at 23
    // On sat we open at 0 and clsoe at 24
}
