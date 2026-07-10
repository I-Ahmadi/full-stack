// ===================== Promise =====================

// What is Promise?
// An object that is used as placeholder for the future result of an asynchronous operation.
// - It can succeed → return a value
// - It can fail → return an error
// - It is asynchronous, so the code doesn’t block

// Note: We no longer need to rely on events and callbacks passed into asynchronous functions to handle 
// asynchronous results

// States of a Promise:
// A Promise can be in three states:
// - Pending – the async operation is still running
// - Fulfilled – operation completed successfully → we get a value
// - Rejected – operation failed → we get a reason (error)

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        if (success) {
            resolve('Operation is successfull!');
        } else {
            reject('Something went wrong!');
        }
    }, 1000)
});

// Explanation:
// - new Promise() takes a function with two parameters:
// - resolve(value) → called when operation succeeds
// - reject(error) → called when operation fails
// - Here, after 1 second, it either resolves or rejects

// Consuming a Promise
myPromise
    .then((result) => {
        console.log('Success: ', result);
    })
    .catch((error) => {
        console.log('Error: ', error)
    })

// .then() → handle success
// .catch() → handle error

// Chaining Promises
// One big advantage of Promises: you can chain multiple async operations without 
// nesting callbacks (avoiding callback hell):

myPromise
    .then((res1) => {
        console.log('Step 1: ', res1)
        return { success: true, data: "Step 1 completed!" };
    })
    .then((res2) => {
        console.log('Step 2: ', res2.data)
        return { success: true, data: "Step 2 completed!" };
    })
    .then((res3) => {
        console.log("Result: ", res3);
    })
    .catch(() => {
        console.error('Error: ', error);
    })

// Note: Your code won’t chain properly because each .then() needs to return a value or a promise 
// to pass it to the next .then(). Right now, your first .then() only logs, and doesn’t return anything, 
// so response2 becomes undefined.

// --------------------Building a simple promise---------------------

const lotteryPromise = new Promise(function(resolve, reject) {
    console.log('Lottery draw is happening.');
    setTimeout(() => {
        if (Math.random >= 0.5) {
            resolve('You WIN the Lottery!');
        } else {
            reject(new Error('You lsot your money.'));
        }
    }, 2000)
});

lotteryPromise
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

// ---

const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

wait
  .then(() => {
    console.log('1 second passes');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passes');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passes');
    return wait(1);
  })
  .then(() => console.log('4 second passes'))

// Creating fullfilled and rejected promise immetiately
Promise.resolve('abcdefg').then(res => console.log(res));
Promise.reject(new Error('Error occured!')).catch(err => console.error(err));
