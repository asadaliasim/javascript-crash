const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

setInterval(() => {
  let date = new Date();
  date = date.toLocaleTimeString();
  clock.innerHTML = date;
}, 1000);
