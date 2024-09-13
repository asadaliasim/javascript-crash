// let a = 10;
// const b = 20;
// var c = 30;

// scope {}

// var c = 33;

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
  // console.log('inner', a);
}

// console.log(a);
// console.log(b);
// console.log(a);

// inner functions can access values from outer functions
function One() {
  const username = 'Asad';
  function two() {
    const web = 'youtube';
    console.log(username);
  }
  // console.log(web);
  two();
}

// One();

if (true) {
  const username = 'asad';
  if (username === 'asad') {
    const web = ' youtube';
    console.log(username + web);
  }
  // console.log(web);
}

// console.log(username);

// example

// console.log(addOne(78)); can access

function addOne(value) {
  return value + 1;
}

// addOne(5);
// console.log(addOne(6));

// console.log(addTwo(33));  ---> can not access before initialize

const addTwo = function (value) {
  return value + 2;
};

// addTwo(5);
