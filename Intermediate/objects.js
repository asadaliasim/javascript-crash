// singleton ->constructor
// Object.create
// object lieterals

// key : values

const mySym = Symbol('key1');
const user = {
  name: 'Asad',
  'full name': 'Asad Ali',
  age: 22,
  [mySym]: 'myKey',
  location: 'Gilgit',
  email: 'asad@gmail.com',
  isActive: true,
  lastActive: ['Monday', 'Friday'],
};

// console.log(user.name);
// console.log(user['full name']);

// console.log( user[mySym]);

// user.name = 'Asim';
// Object.freeze(user);
// user.name = 'khan';

user.greeting = function () {
  console.log('Hey');
};
user.greetingName = function () {
  console.log(`Hello ${this.name}`);
};
console.log(user.greetingName());
