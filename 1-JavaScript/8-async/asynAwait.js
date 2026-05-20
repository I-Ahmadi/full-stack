// ===================== Async and Await =====================

// Async and Await are used in JavaScript to handle asynchronous operations (like API calls, database queries, timers) 
// in a clean, readable way—without messy .then() chains.

// Asyn and Await is all about consuming Promises in a more synchronous-looking way, making code easier to read and maintain.

// Async Function
// - An async function is a function declared with the async keyword.
// - It always returns a Promise. If the function returns a value, the Promise will be resolved with that value. 
// If the function throws an error, the Promise will be rejected with that error.

// Example:
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//     const position = await getPosition();
//     const { latitude: lat, longitude: lng } = position.coords;

//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error(`Geocoding error: ${resGeo.status}`);
//     const dataGeo = await resGeo.json();

//     console.log(`You are in ${dataGeo.city}, ${dataGeo.country}`);

//     const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
//     if (!res.ok) throw new Error(`Country not found: ${res.status}`);
//     const CountryData = await res.json();

//     console.log("Country data:", CountryData);

//     return CountryData;
// };

// How error handling works with Async/Await?
// - We can use try/catch blocks to handle errors in async functions.
// - If any of the awaited Promises reject, the control will jump to the catch block, where we can handle the error gracefully.

// const whereAmI = async function () {
//     try {
//         const position = await getPosition();
//         const { latitude: lat, longitude: lng } = position.coords;

//         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//         if (!resGeo.ok) throw new Error(`Geocoding error: ${resGeo.status}`);
//         const dataGeo = await resGeo.json();

//         console.log(`You are in ${dataGeo.city}, ${dataGeo.country}`);

//         const res = await fetch(
//         `https://restcountries.com/v3.1/name/${dataGeo.country}`
//         );
//         if (!res.ok) throw new Error(`Country not found: ${res.status}`);
//         const CountryData = await res.json();

//         console.log("Country data:", CountryData);

//         return CountryData;
//     } catch (error) {
//         console.error('An error occured: ', error.message);
//     }
// };

// Returning Values from Async Functions
// - An async function always returns a Promise. If you return a value, it will be wrapped in a resolved Promise. 
// If you throw an error, it will be wrapped in a rejected Promise.

const whereAmI = async function () {
    try {
        const position = await getPosition();
        const { latitude: lat, longitude: lng } = position.coords;

        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        if (!resGeo.ok) throw new Error(`Geocoding error: ${resGeo.status}`);
        const dataGeo = await resGeo.json();

        console.log(`You are in ${dataGeo.city}, ${dataGeo.country}`);

        const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
        if (!res.ok) throw new Error(`Country not found: ${res.status}`);
        const CountryData = await res.json();

        console.log("Country data:", CountryData);

        return `You are in ${dataGeo.city}, ${dataGeo.country}. Country data: ${JSON.stringify(CountryData)}`;

    } catch (error) {
        console.error('An error occured: ', error.message);

        // Reject the promise returned by the async function with the error message
        throw new Error(error.message);
    }
};

// Note: When you call an async function, it returns a Promise. You can use .then() and .catch() to handle 
// the resolved value or any errors that occur within the async function.
whereAmI
    .then(data => console.log('Data received from whereAmI: ', data))
    .catch(error => console.error('Error from whereAmI: ', error.message))
    .finally(() => console.log('Finished executing whereAmI!'));

// We can also use an IIFE (Immediately Invoked Function Expression) to call the async function and handle its result with try/catch.
(async function () {
    try {
        const res = whereAmI();
        console.log('Result from whereAmI: ', res);
    } catch (error) {
        console.error('An error occured: ', error.message);
    }

    console.log('Finished executing the whereAmI!');
})();

const btn = document.getElementById("positionBtn");

btn.addEventListener("click", async () => {
    await whereAmI();
});

// ------------------------------------------------------

// Straight forward async function
const asyncFunc = async function() {
    return 'Hello, World!';
}
asyncFunc().then(value => console.log(value)); // Logs: Hello, World!

// If we throw an error
const asyncFuncWithError = async function() {
    throw new Error('Something went wrong!');
}

asyncFuncWithError().catch(error => console.error(error.message)); // Logs: Something went wrong!
