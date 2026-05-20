// ===================== AJAX =====================

// What is AJAX?
// AJAX (Asynchronous JavaScript and XML) is a way to send and receive data from a server without reloading the page.
// AJAX (Asynchronous JavaScript And XML): Allows us to communicate with remote web servers in a asynchronous way.
// With AJAX calls, we can request data from web server dynamically.

// What is XMLHttpRequest?
// XMLHttpRequest (often called XHR) is a built-in JavaScript object used to make AJAX calls.

// It lets you:

// Send requests to a server (GET, POST, etc.)
// Receive data (JSON, text, XML)
// Update the page dynamically

// Simple Flow
// Create an XHR object
// Open a request (GET/POST + URL)
// Send the request
// Receive response
// Update UI

document.getElementById('btn').addEventListener('click', function () {
  const country = document.getElementById('countryInput').value;

  if (!country) {
    alert('Please enter a country name');
    return;
  }

  const request = new XMLHttpRequest();

  // request.open('GET', 'https://restcountries.com/v3.1/name/' + country);

  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`
  );

  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);

    if (!data || data.status === 404) {
      document.getElementById('result').innerHTML =
        '<p>Country not found</p>';
      return;
    }

    const country = data[0];

    const html = `
      <div class="card">
        <img src="${country.flags.png}" alt="flag" />
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital?.[0]}</p>
        <p><strong>Region:</strong> ${country.region}</p>
        <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      </div>
    `;

    document.getElementById('result').innerHTML = html;
  });

  request.addEventListener('error', function () {
    document.getElementById('result').innerHTML =
      '<p>Error fetching data</p>';
  });
});

// What encodeURIComponent Does
// encodeURIComponent() is a built-in JavaScript function that encodes special characters in a string so it can safely be used in a URL.

// Converts spaces, symbols, and other non-URL-friendly characters into a format the browser and server can understand.
// Example
// const country = "United States";
// const encoded = encodeURIComponent(country);

// console.log(encoded); // Output: United%20States
// Space → %20
// & → %26
// ? → %3F
