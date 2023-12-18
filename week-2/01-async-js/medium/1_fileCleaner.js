// File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


// FYKI, data.txt has these contents:
// hello     world    my    name   is       raman

const fs = require("fs");

let filePath = "data.txt";
let encodingUsed = "utf-8";

fs.readFile(filePath, encodingUsed, function(err1, data1) {
    if (err1) {
        console.log(`Failed to read the file: ${err1}`);
    } else {
        console.log("File read successfully");
        console.log(`File contents: ${data1}`);

        // Filter the contents as required 
        let updatedData = data1.replaceAll(/\s+/g, " ");
        console.log(`Updated data: ${updatedData}`);

        fs.writeFile(filePath, updatedData, function(err2) {
            if (err2) {
                console.log(`Issue while writing data to file: ${err2}`);
            } else {
                console.log("Data writing successful");

                fs.readFile(filePath, encodingUsed, function(err3, data3) {
                    if (err3) {
                        console.log(`Failed to read the file: ${err3}`);
                    } else {
                        console.log("File read successfully after writing");
                        console.log(`File contents: ${data3}`);

                        if (data3 == updatedData) {
                            console.log("Successfully removed extra spaces from file ");
                        } else {
                            console.group("Failed to remove extra space from file");
                        }
                    }
                });
            }
        });
    }
});

// Output:

// bash-3.2$ node demo.js 
// File read successfully
// File contents: hello     world    my    name   is       raman
// Updated data: hello world my name is raman
// Data writing successful
// File read successfully after writing
// File contents: hello world my name is raman
// Successfully removed extra spaces from file 
// bash-3.2$