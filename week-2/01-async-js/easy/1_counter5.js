// Create a counter in JavaScript.
// It should go up as time goes by in intervals of 1 second.

let counter = 1;
let stopCounterAt = 10;
let counterInterval = 1000;

function displayCounter() {
    console.log(counter);
    counter++;
    if (counter > stopCounterAt) {
        stopCounter();
    }
}

function stopCounter() {
    clearInterval(intervalId);
    console.log("Counter stopped!");
}

const intervalId = setInterval(displayCounter, counterInterval);

// Output: 

// bash-3.2$ node counter5.js 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// Counter stopped!
// bash-3.2$ 

