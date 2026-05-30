// ===================== Fetch API =====================

// What is fetch()?
// fetch() is a built-in JavaScript function used to make HTTP requests (like GET, POST) to servers.

// It is used for:

// - Calling APIs
// - Getting data
// - Sending data

// Simple Definition: fetch() = a modern way to make AJAX requests using Promises

// Syntax
fetch(url)
    .then((res) => res.json())
    .then((res) => res.json())
    .catch((err) => console.log(err));

// Making a GET Request using Fetch()
fetch('https://restcountries.com/v3.1/name/france')
    .then((response) => response.json())
    .then((data) => {
        const neighbour = data[0].borders[0];
        if (!neighbour) return;
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));

// What Happens Step-by-Step:
// - fetch() sends request → returns a Promise
// - .then(response) → gets raw response
// - response.json() → converts to JavaScript object
// - Next .then(data) → use actual data
// - .catch() → handles errors

// Important Concept
// - fetch(url) - returns a Promise<Response>, not the data directly
// - So you must do - response.json()

// Making a POST Request using Fetch()
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify({
        title: 'Hello',
        body: 'This is fetch',
        userId: 1
    })
})
    .then(response => response.json())
    .then((res) => {

    }, err(() => {

    }))
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Handling Rejected Promises
function getCountryData(country="Portugal") {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(
            response => response.json(),
            // error => alert('An error occured: ', error) // The error is handled if the promise is not fullfilled
        ) 
        .then((data) => {
            const country   = data[0];
            const neighbour = data[0].borders[0];
            console.log(`Country: ${country}, Neighbour: ${neighbour}`);

            if (!neighbour) return console.log('Neighbour not found!');

            // Country 2
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
        })
        .then(
            response => response.json(),
            // error => alert('An error occured: ', error) // The error is handled if the promise is not fullfilled
        )
        .then((data) => {
            console.log(`Neighbour ${data} returned for ${country}`)
        })
        .catch(error => alert('An error occured: ', error)) // Handling errors globally. This will handle the error in any place occured in the above chain
        .finally(() => console.log('The loading state has stopped!') ); // No matter if the promise is fullfilled or rejected the finally menthod will be called.
}

// Promise Recap
// The ".then()" method is only called when the promise is fullfilled.
// The ".catch()" method is only called when the promise is rejected.
// The ".finally()" method is called regardless of the promise result.

// Throwing Errors Manually
function getCountryData(country="Portugal") {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            response.json()
        }) 
        .then((data) => {
            const country   = data[0];
            const neighbour = data[0].borders[0];
            console.log(`Country: ${country}, Neighbour: ${neighbour}`);
            if (!neighbour) throw new Error('No neighbour found!');
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbor}`);
        })
        .then(response => {
            if (!response.ok) throw new Error(`Country not found (${response.status})`);
            response.json()
        })
        .then((data) => {
            console.log(`Neighbour ${data} returned for ${country}`)
        })
        .catch(error => alert('An error occured: ', error))
        .finally(() => console.log('The loading state has stopped!') );
}
