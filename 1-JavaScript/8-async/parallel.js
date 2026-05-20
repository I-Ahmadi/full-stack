// ===================== parallel =====================

// Running Promises in parallel means starting multiple async tasks at the same time instead of waiting for one 
// to finish before starting the next.

// * Important Rule
// Promise.all fails fast
// If ONE fails:

await Promise.all([
  Promise.resolve(1),
  Promise.reject("Error"),
  Promise.resolve(3)
]);

// The whole thing throws ❌

// * The Problem (Sequential)
const getData1 = async () => {
  const res1 = await fetch("/api/users");
  const users = await res1.json();

  const res2 = await fetch("/api/posts");
  const posts = await res2.json();

  return { users, posts };
};

// This is slow because:
// - posts request waits for users to finish

// * Running in Parallel (Correct Way)

// Use Promise.all:
const getData2 = async () => {
  const [res1, res2] = await Promise.all([
    fetch("/api/users"),
    fetch("/api/posts")
  ]);

  const [users, posts] = await Promise.all([
    res1.json(),
    res2.json()
  ]);

  return { users, posts };
};

// * Even Cleaner Version
const getData3 = async () => {
  const [users, posts] = await Promise.all([
    fetch("/api/users").then(res => res.json()),
    fetch("/api/posts").then(res => res.json())
  ]);

  return { users, posts };
};

// * How It Works
// Promise.all([
//   promise1,
//   promise2
// ]);

// - Starts both promises at the same time
// - Waits until all are finished
// - Returns results as an array

// * Real Example
const whereAmI = async () => {
  try {
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    const geoPromise     = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const countryPromise = fetch(`https://restcountries.com/v3.1/all`);

    const [geoRes, countryRes] = await Promise.all([
      geoPromise,
      countryPromise
    ]);

    const [geoData, countryData] = await Promise.all([
      geoRes.json(),
      countryRes.json()
    ]);

    console.log(geoData, countryData);
    return { geoData, countryData };
  
} catch (err) {
    console.error(err);
  }
};
