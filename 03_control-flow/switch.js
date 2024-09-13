// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3;
switch (month) {
  case 1:
    console.log('jan');
    break;

  case 2:
    console.log('feb');
    break;

  case 3:
    console.log('march');
    break;

  case 4:
    console.log('apr');
    break;
  default:
    console.log('default');
    break;
}

// if break is missed, execute all after next break, except default
