// Create a counter in JavaScript without using setInterval, it should go up as time goes by, in intervals of 1 second.

let counter = 1;
let counterStopAt = 10;

function runCounter() {
    console.log(counter);
    counter++;
    if(counter <= counterStopAt) {
        setTimeout(runCounter, 1000);
    } else {
        console.log("Counter stopped!");
    }
}

runCounter();

// Output:

// bash-3.2$ node counter6.js 
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


