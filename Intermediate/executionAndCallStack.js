// e-c = execution context
// global e-c  ----> this ==== 1
// functional e-c
// eval - e-c

// runs in 2 phases
// memory creation phase
// execution phase

let val1 = 5;
let val2 = 10;

function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 1);

// 2
// memory allocation
// val1 = undefinded
// val2 = undefinded
// addNum = defination
// result1 = undefined
// result2 = undefined

// 3
// execution phase
// val1 = 5
// val2 = 10
// addNum = defination
// result1 = undefined   --> new variable env + thread execution thread --- again
//------> memory phase
//------> val1 = undefined
//------> val2 = undefined
//------> total undefined
//------> Execution phase
//------> num1 = 5
//------> num2 = 10
//------> total = 15 ---> return to global executional context
//------> delete after working
// result1 = 15

// result2 = undefined  --> new variable env + thread execution thread --- again
//------> memory phase
//------> val1 = undefined
//------> val2 = undefined
//------> total undefined
//------> Execution phase
//------> num1 = 10
//------> num2 = 1
//------> total = 11 ---> return to global executional context
//------> delete after working
// result2 = 11

// call stack

// ''
// 'three()'
// 'two()'
// 'One()' -->execution and left
// 'globle exe'

// do this directly in browser
// function one() {
//     console.log('one')
//       two()
//   }
//   function two() {
//     console.log('two')
//       three()
//   }
//   function three() {
//     console.log('three')
//   }
//   one();
//   two();
//   three();
