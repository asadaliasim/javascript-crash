const des = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(des);

// console.log(Math.PI);
// Math.PI = 6;
// console.log(Math.PI);

const chai = {
  name: 'ginger chai',
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log('Error Making Chai');
  },
};
// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'price', {
  enumerable: false,
});
console.log(Object.getOwnPropertyDescriptor(chai, 'price'));

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== 'function') {
    console.log(key, value);
  }
}
