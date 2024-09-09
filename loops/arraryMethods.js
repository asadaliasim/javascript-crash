const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNUms = nums.filter((num) => num > 4);
// const anotherWay = nums.filter((num) => {
//   return num > 4; //if we add {} we have to return
// });
// console.log(anotherWay);

// const newNums = [];

// nums.forEach((num) => {
//   if (num > 4) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const books = [
  {
    id: 1,
    name: 'To Kill a Mockingbird',
    edition: '1st',
    publishYear: 1960,
  },
  {
    id: 2,
    name: '1984',
    edition: '1st',
    publishYear: 1949,
  },
  {
    id: 3,
    name: 'The Great Gatsby',
    edition: '1st',
    publishYear: 1925,
  },
  {
    id: 4,
    name: 'Pride and Prejudice',
    edition: '3rd',
    publishYear: 1813,
  },
  {
    id: 5,
    name: 'Moby-Dick',
    edition: '1st',
    publishYear: 1851,
  },
];

// const userBooks = books.filter(
// if curly braces are added then add return
//   (book) => book.edition == '1st' && book.publishYear >= 1850
// );
// console.log(userBooks);

const myNum = [1, 2, 3, 4, 5, 6];

// const newNums = myNum.map((num) => {
//   return num * 2;
// });

// const newNums = myNum
//   .map((num) => num * 2)
//   .map((num) => num + 1)
//   .filter((num) => num >= 6);
// console.log(newNums);

const sumWithInital = myNum.reduce((acc, curVal) => {
  // for test
  console.log(`value of acc is ${acc} and current is ${curVal}`);

  return acc + curVal;
}, 0);
console.log(sumWithInital);
