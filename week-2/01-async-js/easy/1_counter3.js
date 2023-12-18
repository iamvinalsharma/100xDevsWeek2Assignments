// Create a counter in JavaScript.
// It should go up as time goes by in intervals of 1 second.

let counter = 1;

function displayCounter() {
    console.log(counter);
    counter++;
}

function stopCounter() {
    clearInterval(intervalId);
    console.log("Counter stopped!");
}

const intervalId = setInterval(displayCounter, 1000);

setTimeout(stopCounter, 10000);

// Output: 

// bash-3.2$ node counter3.js 
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// Counter stopped!
// bash-3.2$ 

