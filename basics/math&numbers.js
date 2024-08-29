// numbers
const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 23.5423;

// console.log(otherNum.toPrecision(2));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());

// console.log(Number.MIN_VALUE);

// **********MATHS*****************

// console.log(Math); --> do this in browser to get detail

// console.log(Math.abs(-4)); //converts neg num to +ve

// console.log(Math.round(4.2));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));

// min , max,

// console.log(Math.floor(Math.random() * 10 + 1));
const min = 10;
const max = 20;

function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return otp;
}

console.log(generateOTP());
