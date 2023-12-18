/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
    * Write a function that sequentially calls all 3 of these functions in order.
    * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/week-2/01-async-js/tests/4-promise-chain.test.js

function wait(t) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, t*1000);
    });
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    return wait(t1)
        .then(function() {
        return wait(t2)
            .then(function() {
            return wait(t3)
                .then(function() {
                const endTime = Date.now();
                const totalTime = endTime - startTime;
                return totalTime;
            });
        });
    });
}

module.exports = calculateTime;

// Testing the code:

// bash-3.2$ npx jest ../tests/4-promise-chain.test.js 
//  PASS  ../tests/4-promise-chain.test.js (18.464 s)
//   calculateTime function
//     ✓ calculates time 1 (6011 ms)
//     ✓ calculates time 2 (12006 ms)
//     ✓ calculates time for zero seconds (7 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        18.552 s
// Ran all test suites matching /..\/tests\/4-promise-chain.test.js/i.
// bash-3.2$ 
