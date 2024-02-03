const fs = require('fs')
const path = require('path')
function writeToFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if(err){
            console.log(`Error writing to file: ${err.message}`);
        }
        else{
            const fileName = path.basename(filePath);
            console.log(`Data written to ${fileName}`);
        }
    })
}

writeToFile('./test-files/output1.txt', 'Sample content.');
writeToFile('./test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');