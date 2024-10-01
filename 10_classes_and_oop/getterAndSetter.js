// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }
//   get email() {
//     return this._email.toUpperCase();
//   }
//   set email(value) {
//     this._email = value;
//   }

//   get password() {
//     return `${this._password}asd`;
//   }
//   set password(value) {
//     this._password = value;
//   }
// }

// const asad = new User('asad@gmail.com', 'asad');
// console.log(asad.email);

// before---property baseed
// function User(email, password) {
//   this._email = email;
//   this._password = password;

//   Object.defineProperty(this, 'email', {
//     get: function () {
//       return this._email.toUpperCase();
//     },
//     set: function (value) {
//       this._email = value;
//     },
//   });
//   Object.defineProperty(this, 'password', {
//     get: function () {
//       return this._password.toUpperCase();
//     },
//     set: function (value) {
//       this._password = value;
//     },
//   });
// }

// const asad = new User('asad1@gmail.com', 'asad');
// console.log(asad.email);

// object based
const User = {
  _email: 'asad@gmail.com',
  _password: 'abcdef',

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

// console.log(User.email);

const tea = Object.create(User);
console.log(tea.email);
