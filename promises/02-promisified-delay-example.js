function setTimeoutPromisefed(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function callback() {
  console.log("3 sec have passed");
}
setTimeoutPromisefed(3000).then(callback);
