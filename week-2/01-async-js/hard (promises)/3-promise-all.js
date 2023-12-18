/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/week-2/01-async-js/tests/3-promise-all.test.js

function wait(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, t);
    });
}

function calculateTime(t1, t2, t3) {
    let startTime = Date.now();
    const promise1 = wait(t1*1000);
    const promise2 = wait(t2*1000);
    const promise3 = wait(t3*1000);
    const allPromises = Promise.all([promise1, promise2, promise3]);
    return allPromises.then(function() {
        let endTime = Date.now();
        return (endTime - startTime);
    });  
}

module.exports = calculateTime;

// Testing the code:

// bash-3.2$ npx jest ../tests/3-promise-all.test.js 
//  PASS  ../tests/3-promise-all.test.js (20.278 s)
//   calculateTime function
//     ✓ calculates time 1 (3008 ms)
//     ✓ calculates time 2 (7003 ms)
//     ✓ calculates time 3 (10003 ms)
//     ✓ calculates time for zero seconds (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total
// Snapshots:   0 total
// Time:        20.332 s, estimated 21 s
// Ran all test suites matching /..\/tests\/3-promise-all.test.js/i.
// bash-3.2$ 
