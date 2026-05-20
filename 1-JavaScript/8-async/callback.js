// ===================== Callback =====================

const countriesContainer = document.getElementById('result');

function renderCountryData(data, className = '') {
  const html = `
    <div class="card ${className}">
      <img src="${data.flags.png}" alt="flag" />
      <h2>${data.name.common}</h2>
      <p><strong>Capital:</strong> ${data.capital?.[0]}</p>
      <p><strong>Region:</strong> ${data.region}</p>
      <p><strong>Population:</strong> ${data.population.toLocaleString()}</p>
    </div>
  `;
  
  countriesContainer.insertAdjacentHTML('beforeend', html);
}

document.getElementById('btn').addEventListener('click', function () {
    const country = document.getElementById('countryInput').value;

    // Clear previous results
    countriesContainer.innerHTML = '';

    // AJAX call (country 1)
    const request = new XMLHttpRequest();

    request.open(
        'GET',
        `https://restcountries.com/v3.1/name/${encodeURIComponent(country)}`
    );

    request.send();

    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);

        if (!data || data.status === 404) {
            countriesContainer.innerHTML = '<p>Country not found</p>';
            return;
        }

        // Render main country
        renderCountryData(data);

        // Get neighbor
        const neighbor = data.borders?.[0];
        if (!neighbor) return;

        // AJAX call (neighbor)
        const request2 = new XMLHttpRequest();

        request2.open(
            'GET',
            `https://restcountries.com/v3.1/alpha/${neighbor}`
        );

        request2.send();

        request2.addEventListener('load', function () {
            const [data2] = JSON.parse(this.responseText);

            if (!data2 || data2.status === 404) {
                countriesContainer.innerHTML = '<p>Country not found</p>';
                return;
            }

            // Render neighbor (smaller)
            renderCountryData(data2, 'neighbor');
        });

        request2.addEventListener('error', function () {
            countriesContainer.innerHTML = '<p>Error fetching neighbor</p>';
        });
    });

    request.addEventListener('error', function () {
        countriesContainer.innerHTML = '<p>Error fetching data</p>';
    });
});
