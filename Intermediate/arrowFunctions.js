const user = {
  username: 'asad',
  price: 999,
  welcomeMessage: function () {
    // this keyword to refer the current context
    console.log(`${this.username}, welcome to website`);
    // console.log(this);
  },
};

// user.welcomeMessage();
// user.username = 'sam';
// user.welcomeMessage();

// console.log(this);

function tea() {
  // cant do this, bcz it refers to the context of current obj
  //   let name = 'asad';
  //   console.log(this.name);
  console.log(this);
}

// tea();

const tea1 = () => {
  let name = 'asad';
  console.log(this);
};

// tea1();

// basic arrow function
// const add = (num1, num2) => {
//   return num1 + num2;
// };

// with curly braces we have implicitly add return word not in below cases
// const add = (num1, num2) => num1 + num2;

const add = () => ({ username: 'asad' });

// console.log(add());

const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(() => {});
