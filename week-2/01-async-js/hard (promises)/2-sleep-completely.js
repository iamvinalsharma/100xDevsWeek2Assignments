/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * The function should return a promise.
 */

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/week-2/01-async-js/tests/2-sleep-completely.test.js

function sleep(milliseconds) {
    return new Promise(function(resolve) {
        let startTime = Date.now();
        let endTime = startTime + milliseconds;
        while (Date.now() < endTime) {
            // Busy wait
        }
        resolve();
    });
}

module.exports = sleep;

// Testing the code:

// bash-3.2$ npx jest ../tests/2-sleep-completely.test.js 
//  PASS  ../tests/2-sleep-completely.test.js (6.421 s)
//   sleep function
//     ✓ resolves after 1 second (1002 ms)
//     ✓ resolves after 2 seconds (2000 ms)
//     ✓ resolves after 3 seconds (3000 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        6.471 s, estimated 7 s
// Ran all test suites matching /..\/tests\/2-sleep-completely.test.js/i.
// bash-3.2$ 

