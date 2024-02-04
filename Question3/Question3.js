const cp = require("child_process");

function executeCommand(command) {
    cp.exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${command}`);
            console.error(error.message);
            return;
        }
        else if (stderr) {
            console.error(stderr)
        }
        else{
            console.log(stdout);
        }
    });
}

executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
