const fs = require("fs");

// Asynchronously read file: Non-blocking, passes result to callback when done
fs.readFile("a.txt", "utf-8", function (err, data) {
  // Callback function is executed after file reading completes
  console.log(data);
});
