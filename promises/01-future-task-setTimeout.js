function fn() {
  console.log("hii call in future");
}
// setTimeOut schedules fn to be executed after the 3000ms (non blocking)
setTimeout(fn, 3000);
//Demonstrating asynchronous behaviour using setTimeout()
// SetTimeout schedules fn to be execute in the future after 3000ms done
// similar to how promises also represent future value
