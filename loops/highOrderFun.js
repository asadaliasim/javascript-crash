// for of  - loop
// can used to iterate strings
// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num);
// }

const greetings = 'Hello World!';

// for (const greet of greetings) {
//   console.log(greet);
// }

// Maps
const map = new Map();
map.set('IN', 'India');
map.set('US', 'United States');
map.set('pk', 'Pakistan');

// console.log(map);

// for (const key of map) {
// for (const [key, value] of map) {
//   console.log(value);
// }

const games = {
  game1: 'NFS',
  game2: 'gta',
};
// objects are not iterable
// for (const [key, value] of games) {
//   console.log(value);
// }

// to iterate objs
const myObj = {
  js: 'Javascript',
  cpp: 'C++',
  rb: 'ruby',
};

// for (const key in myObj) {
//   console.log(myObj[key]);
//   console.log(key);
// }

const programming = ['js', 'php', 'java'];

// for (const key in programming) {
//   console.log(key);
//   console.log(programming[key]);
// }

const coding = ['js', 'php', 'python', 'ruby'];

// coding.forEach((item) => {
//   console.log(item);
// });

// another way
// function printMe(item) {
//   console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

const myCoding = [
  {
    languageName: 'javascript',
    languageFile: 'js',
  },
  {
    languageName: 'java',
    languageFile: 'ja',
  },
  {
    languageName: 'python',
    languageFile: 'py',
  },
];

// myCoding.forEach((item) => {
//   console.log(item.languageName);
// });

// cant do like this
const values = coding.forEach((item) => {
  console.log(item);
  return item;
});

console.log(values);
