// if

// const isUserLoggedIn = true;
// const temperature = 41;

// if (temperature < 50) {
//   console.log('less than 50');
// } else {
//   console.log(temperature);
// }
// < , > , <=,  >=, ==, !=, ===, !==

// const score = 200;
// if (score > 1000) {
//   const power = 'fly';
//   console.log(`User power: ${power}`);
// }
// console.log(`User power is not: ${power}`);

// short hand
// const balance = 1000;

// if (balance > 500) console.log('test');

// if (balance < 500) {
//   console.log('less than 500');
// } else if (balance < 750) {
//   console.log('less than 750');
// } else if (balance < 900) {
//   console.log('less than 900');
// } else {
//   console.log('less than 1200');
// }

const isUserLoggedIn = true;
const deditCard = true;
const loggedInFromGoogle = true;
const loggedInFromEmail = true;
// if (isUserLoggedIn && deditCard) {
//   console.log('Allowed to buy course');
// }

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log('logged in');
}
