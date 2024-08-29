//strings representation '' or ""

const name = 'Asad';
const repoCount = 50;

// old syntax
// console.log('user ' + name + ' has ' + repoCount + ' repos');

// modern syntax
// console.log(`User ${name} has ${repoCount} repos`);

// another way to declare string
const gameName = new String('asad-asim');
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherStr = gameName.slice(-2, 8);
// console.log(anotherStr);

const newStr1 = '      asad        ';
// console.log(newStr1.trim());

let url = 'https://asad.com/asad%20asim';

// console.log(url.replace('%20', '-'));

// console.log(url.includes('asad'));

console.log(gameName.split('-'));

// console.log(name[0]);
// console.log(name.__proto__);
