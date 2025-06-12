let ctl = 0;
function increment() {
  const el = document.querySelectorAll("h1")[1];
  el.innerHTML = ctl;
  ctl = ctl + 1;
}
setInterval(increment, 1000);
