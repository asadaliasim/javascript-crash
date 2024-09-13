// how const , let , var works
const userId = 12434;
let userEmail = 'asad@gmail.com';
var userPassword = '12345';
userCity = 'Gilgit';
let userState;

// check wheather you can change const or not
// userId = 2;  // NOT allowed

userEmail = 'asad1@gmail.com';
userPassword = '43321';
userCity = 'Rwp';
console.log(userId);

/*
Prefer not to use var
because of issue in block scope and funcitonal scope
*/

console.table([userId, userEmail, userPassword, userCity, userState]);
