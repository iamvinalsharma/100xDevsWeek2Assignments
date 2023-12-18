/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// TESTS: https://github.com/100xdevs-cohort-2/assignments/blob/master/week-2/01-async-js/tests/1-promisify-setTimeout.test.js

function wait(n) {
    let promiseObject = new Promise(function(resolve) {
        setTimeout(resolve, n*1000);
    });
    return promiseObject;
}

module.exports = wait;

// Testing the code:

// bash-3.2$ npx jest ../tests/1-promisify-setTimeout.test.js 
//  PASS  ../tests/1-promisify-setTimeout.test.js (6.304 s)
//   wait function
//     ✓ resolves after 1 second (1006 ms)
//     ✓ resolves after 2 seconds (2004 ms)
//     ✓ resolves after 3 seconds (3004 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        6.342 s, estimated 7 s
// Ran all test suites matching /..\/tests\/1-promisify-setTimeout.test.js/i.
// bash-3.2$ 
