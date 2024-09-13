// 2 types
// Stack -> primitive  (gives copy of data)
// Heap -> nom-primitive (reference/orignal data,any changes would change the orignal data)

// example
let myUserName = 'AsadAliAsim';

let anotherUserNmae = myUserName;
anotherUserNmae = 'asim';

// console.log(anotherUserNmae);
// console.log(myUserName);

// heap example
let userOne = {
  email: 'user@gmail.com',
  id: 1,
};

let userTwo = userOne;

userTwo.email = 'user2@gmail.com';

console.log(userOne);
console.log(userTwo);
