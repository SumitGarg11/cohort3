function random(resolve) {
  setTimeout(resolve, 3000);
}
let p = new Promise(random);
function callback() {
  console.log("3 sec have to passes");
}
p.then(callback);
console.log("hii there"); // it prints first ,reason is promise full fill after the 3 sec 

