// es6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const register = new User('asad', 'asad@gmail.com', '123');

// console.log(register.encryptPassword());
// console.log(register.changeUsername());

// behind the scene

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

const test = new User('asad', 'asad@gmail.com', '1234');

console.log(test.encryptPassword());
