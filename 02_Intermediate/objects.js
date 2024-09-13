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
// console.log(user.greetingName());

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = '123a';
tinderUser.name = 'Asad';
// console.log(tinderUser);

const regularUser = {
  email: 'asad@gmail.com',
  fullName: {
    userFullName: {
      firstName: 'asad',
      lastName: 'ali',
    },
  },
};

// console.log(regularUser.fullName?.userFullName.firstName);

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 4: 'e' };
// const obj3 = Object.assign({}, obj1, obj2);

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// object destrcutring

const course = {
  cousrName: 'JS',
  price: 1000,
  courseInstructor: 'Asad',
};

const { cousrName, price, courseInstructor: instuctor } = course;

console.log(instuctor);

// JSON js object notation
// data from api
// {
//   "name":"asad",
//   "courseName":"js in hind",
//   "price": "free"
// }
