// ===================== GeoLocation API =====================

navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    error => console.error(error)
)

console.log('Getting position');

const getPosition = function() {
    return new Promise(function(resolve, reject) {
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position),
        //     error    => reject(error)
        // )
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}

getPosition.then(pos => console.log(pos));

const whereAmI = function() {
    getPosition
        .then(pos => {
            const { lat = latitude, lng = longitude } = pos.coords;
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(`You are ${data.city}, ${data.country}`);
            return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
        })
        .then(res => {
            if (!res.ok) throw new Error(`Country not found ${res.status}`);
            return res.json();
        })
        .then(data => console.log('Finally the respected country is fetched: ', data))
        .catch(error => console.error('An error occured: ', error.message));
}
const btn = document.getElementById('positionBtn')
    .addEventListener('click', function() {
        whereAmI();
})
