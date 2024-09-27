// let myName = 'asad     ';

// console.log(myName.trueLength);

let myHeros = ['thore', 'spiderman'];

let heroPower = {
  thore: 'hammer',
  spiderman: 'sling',

  getSpiderPower: function () {
    console.log(`Spiderman power is ${this.spiderman}`);
  },
};

Object.prototype.asad = function () {
  console.log(`Asad is present in all objects`);
};

Array.prototype.heyAsad = function () {
  console.log(`Asad says Hello`);
};

// heroPower.asad();
// myHeros.asad();

// heroPower.heyAsad();
// myHeros.heyAsad();

// inheritance
const User = {
  name: 'chai',
  email: 'chai@gmail.com',
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: 'JS Assignment',
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = 'ChaiAurCode      ';

String.prototype.trueLength = function () {
  console.log(`${this}`);
  //   console.log(`${this.name}`);
  console.log(`True length is ${this.trim().length}`);
};

// anotherUsername.trueLength();

'asad   '.trueLength();
