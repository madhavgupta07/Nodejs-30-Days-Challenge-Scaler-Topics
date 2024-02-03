const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
            console.error(`Error reading file: ${err.message}`);
        }
        else {
            (data === "") ? console.log("empty string") : console.log(`File Content: \n${data}`);
        }

    })
}

readFileContent("./test-files/file1.txt")
readFileContent("./test-files/empty-file.txt")
readFileContent("./test-files/nonexistent-file.txt")