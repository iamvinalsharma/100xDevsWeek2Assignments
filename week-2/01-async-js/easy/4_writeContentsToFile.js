// Write to a file.

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

// FYKI data.txt has this content to start with:
// Hello! How are you doing?

// Here, I am reading a file, dumping its contents on console,
// Writing some content to the file, then reading it again
// to make sure it has the right contents written.

const fs = require("fs");

let file = "data.txt";
let encoding = "utf-8";

fs.readFile(file, encoding, function(err1, data1) {
    if (err1) {
        console.log(`Unable to read file: ${err1}`);
    } else {
        console.log(`File contents: ${data1}`);

        let dataToBeWritten = "I am doing well, Thank you!";
        fs.writeFile(file, dataToBeWritten, function(err2) {
            if (err2) {
                console.log(`Error writing to the file: ${err2}`);
            } else{
                console.log("Data written to file.");

                fs.readFile(file, encoding, function(err3, data3) {
                    if (err3) {
                        console.log(`Failed to read the contents of file after writing: ${err3}`);
                    } else {
                        console.log(`Final contents: ${data3}`)
                        if (data3 == dataToBeWritten) {
                            console.log("Data writing successful.");
                        } else {
                            console.log("Data writing is NOT successful.");
                        }
                    }
                });
            }
        });
    }
});

for (let i = 0; i <= 10000000000; i++) {}
console.log("Done with loop!");

// Output:

// bash-3.2$ node demo.js 
// File contents: Hello! How are you doing?
// Data written to file.
// Final contents: I am doing well, Thank you!
// Data writing successful.
// bash-3.2$ 
