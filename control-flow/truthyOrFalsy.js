const userEmail = 'asad@gmail.com'; //truthy
// const userEmail = ''; flasy

// 1===1 true
// 1!=1 false

//falsy values===> false, 0, -0 , bigInt =on,"", null, undefined, NaN
// truthy ===> "0","false", " ",[],{}, function(){}=empty function
// if (userEmail) {
//   console.log('valid email');
// } else {
//   console.log('Invalid');
// }

const empObj = {};
// to check obj is empty or not convert it to array using Object.key method
// if (Object.keys(empObj).length === 0) {
//   console.log('empty');
// }

// Nullish coalescing operator (??):
// safety check on  null, undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 8;

val1 = undefined ?? 9;

console.log(val1);
