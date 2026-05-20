// ===================== this-keyword.js =====================

// 'this' Keyword:
// Refers to the object that is calling the function.
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked on ${this.airline}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    }
};

const eurowings = { airline: 'Eurowings', iataCode: 'EW', bookings: [] };

const book = lufthansa.book;

// Call Method:
// Sets 'this' manually and calls function.
book.call(eurowings, 23, 'Sarah');

// Bind Method:
// Returns a new function with fixed 'this'.
const bookEw = book.bind(eurowings);
bookEw(45, 'John');
