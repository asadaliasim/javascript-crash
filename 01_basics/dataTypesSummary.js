// 2 types
// 1. Primitive
// 7 types : string, number, boolean, null, undefined,symbol, BigInt

// examples
const name = 'Asad';
const age = 22;
const isActive = true;
const temp = null;
let email;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const bigNumber = 5453453123123123453453n; // add n at the end to specifically declare bigNumber

// 2. Non Primitive =>(Reference)
// Array, Objects, Functions

const players = ['cr7', 'kb9', 'gb11'];

let data = {
  name: 'asad',
  age: 22,
};

const myFun = function () {
  console.log('Hello World');
};

// to check the type of any
console.log(typeof data);
