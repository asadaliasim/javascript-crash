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
// console.log(res);

// to handle unkwown parameters

function calculateCartPrice(...args) {
  return args;
}

// console.log(calculateCartPrice(2, 3, 4, 2));

const user = {
  uName: 'asad',
  age: 22,
};

function handleObj(anyObj) {
  console.log(`username is ${anyObj.uName} and age is ${anyObj.age}`);
}

// handleObj(user);

const newArr = [200, 300, 500];

function handleArr(anyArr) {
  return anyArr[1];
}

console.log(handleArr(newArr));
