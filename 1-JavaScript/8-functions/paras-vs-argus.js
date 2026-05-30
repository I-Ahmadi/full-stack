// ===================== Parameters vs Arguments =====================

// Parameters are placeholders in function definition.
// Arguments are actual values passed.

function addTwoNumbers(number1, number2) {
    return number1 + number2;
}

// Default Parameters: Used when no argument is passed.
function defaultParameter(name = "Guest", isVerified = false) {
    return isVerified ? `Hello ${name} Verified User` : `Hello ${name} User`;
}

// Real World Example
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers, 
    departureDate
) {
    // ES5 way to set default values
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
        departureDate
    };

    bookings.push(booking);
    return booking;
}

createBooking('LH123', '2025-12-24');
createBooking('LH125', 2, undefined, '2025-12-24'); // price will be calculated as 199 * numPassengers
createBooking('LH128', 3, 500, '2025-12-24'); // price will be set to 500

console.log('All bookings:', bookings);
