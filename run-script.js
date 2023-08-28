const { exec } = require('child_process');

// Run register.js
exec('node register.js', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing register.js: ${error}`);
        return;
    }
    console.log(stdout);

    // Run index.js after register.js completes
    exec('node index.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing index.js: ${error}`);
            return;
        }
        console.log(stdout);
    });
});