const fs = require('fs');

// Read file synchronously, blocking further execution until file is fully read
const content = fs.readFileSync('a.txt', 'utf-8');

// Log the file content after reading is complete
console.log(content);
