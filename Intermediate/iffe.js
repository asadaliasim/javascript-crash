// immediately invoked function expression

// function db() {
//   console.log('DB connected');
// }
// db();

(function db() {
  console.log('DB connected');
})();

((name) => {
  console.log(`DB connection failed ${name}`);
})('ASAD');
