// object literal

const user = {
  username: 'Asad',
  age: 22,
  loginCount: 10,
  signedIn: false,

  getUserDetails: function () {
    // console.log('Got User from DB');
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.age);
// console.log(user.getUserDetails());
// console.log(this); //retruns globle context

const date = new Date();
// new - keyword is contructor here

function User(username, isLoggedIn) {
  this.username = username;
  this.isLoggedIn = isLoggedIn;

  // return this;
}

// if we dont use new keyword userTwo will override the first one
// const userOne = User('Asad', true);
// const userTwo = User('Ali', false);

const userOne = new User('Asad', true);
const userTwo = new User('Ali', false);

console.log(userOne);
