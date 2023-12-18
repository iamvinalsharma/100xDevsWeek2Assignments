// Create a clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

setInterval(function() {
    let currentTimeObject = new Date();
    if (currentTimeObject.getSeconds() < 10) {
        console.log(`${currentTimeObject.getHours()}:${currentTimeObject.getMinutes()}:0${currentTimeObject.getSeconds()}`);
    } else {
        console.log(`${currentTimeObject.getHours()}:${currentTimeObject.getMinutes()}:${currentTimeObject.getSeconds()}`);
    }
    console.log(`${currentTimeObject.toLocaleTimeString()}\n`);
}, 1000);

// Output:

// bash-3.2$ node demo.js 
// 22:33:23
// 10:33:23 PM

// 22:33:24
// 10:33:24 PM

// 22:33:25
// 10:33:25 PM

// 22:33:26
// 10:33:26 PM

// ^C
// bash-3.2$ 