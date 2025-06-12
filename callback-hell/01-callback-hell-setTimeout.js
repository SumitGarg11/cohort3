setTimeout(function () {
  console.log("Hii");
  setTimeout(function () {
    console.log("Hello");
    setTimeout(function () {
      console.log("hello there");
    }, 5000);
  }, 3000);
}, 1000);
