const date = new Date();
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());

// console.log(typeof date);

// 1-> yr, 2-> month -starts from zero, 3-> day 4-> hour
// let myNewDate = new Date(2020, 0, 23, 5);
// console.log(myNewDate.toString());

// let anotherDate = new Date('01-14-2024');
// console.log(anotherDate.toLocaleDateString());
let anotherDate = new Date('08-30-2024');

// to get the current date in ms
let timeStamp = Date.now();

// console.log(timeStamp);

// to convert the current time to milisecs
// console.log(anotherDate.getTime());

// console.log(date.getDay());

let testing = date.toLocaleString('default', { weekday: 'long' });

console.log(testing);
