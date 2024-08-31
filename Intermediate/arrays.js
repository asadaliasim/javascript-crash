// array

const myArr = [1, 2, 3, 4, 5];

// console.log(myArr[0]);

const myArr1 = new Array(1, 2, 3);
// console.log(myArr1);

// methods
// myArr.push(6);
// myArr.pop();

// myArr.unshift(1);
// myArr.shift();

// console.log(myArr.includes(2));
// indexOf

// console.log(myArr);

// const newArr = myArr.join();
// console.log(newArr);

// slice, splice

// console.log('A ', myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log('B ', myArr);
// const myn2 = myArr.splice(1, 3);

// console.log(myn2);
// console.log('C ', myArr);

const names = ['Asad', 'Ali', 'Asim'];
const newNames = ['Khan', 'Farhan'];

let concat = names.concat(newNames);

// newNames.push(names);
// let mergerd = [...names, ...newNames];
// console.log(concat);
const newArr = [1, 2, 3, [4, 5, 6], 7, [33, 21, [1, 12]]];

const newArr1 = newArr.flat(Infinity);
// console.log(newArr1);

// console.log(Array.isArray('Asad'));
// console.log(Array.from('Asad'));
// console.log(Array.from({ name: 'asad' }));

let score1 = 1;
let score2 = 2;
let score3 = 3;

console.log(Array.of(score1, score2, score3));
