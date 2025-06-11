const fs = require("fs");
function readFilePromisfied() {
  return new Promise(function (resolve, reject) {
    fs.readFile("smarty.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
function Onsuccess(data) {
  console.log(data);
}
readFilePromisfied().then(Onsuccess);
