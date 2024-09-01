function sayMyName() {
  console.log('A');
  console.log('S');
  console.log('A');
  console.log('D');
}

// sayMyName();
// parameters
const addTwoNumbers = function (num1, num2) {
  //   console.log(num1 + num2);

  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
};
// arguments
const result = addTwoNumbers(1, 2);

// console.log(result);

// default values
function loginMessage(username = 'Asad') {
  if (!username) {
    return `Enter username`;
  }
  return `${username} logged In`;
}

const res = loginMessage();
console.log(res);
