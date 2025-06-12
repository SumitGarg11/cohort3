const fs = require("fs");
function readFilePromisfied() {
  return new Promise(function (resolve, reject) {
    fs.readFile("03-promise-constructor.js", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
function Onsuccess(data) {
  console.log(data);
}
readFilePromisfied().then(Onsuccess);
console.log(readFilePromisfied);
console.log("hiii");
console.log(readFilePromisfied);
