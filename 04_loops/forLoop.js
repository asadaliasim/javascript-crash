// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log(`this is 5`);
//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`Outer lopp value: ${i}`);

//   for (let j = 1; j <= 10; j++) {
//     // console.log(`Inner lopp value: ${j}`);
//     console.log(i + '*' + j + ' = ' + i * j);
//   }
// }

// let myArr = ['Asad', 'Ali', 'Asim'];

// for (i = 0; i < myArr.length; i++) {
//   const names = myArr[i];
//   console.log(names);
// }

// break and continue

// for (let i = 1; i <= 20; i++) {
//   if (i == 5) {
//     console.log(`Detected ${i}`);
//     break;
//   }
//   console.log(`Value of i is ${i}`);
// }

// will not print the number which is detected
for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected ${i}`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
