function MultiplyBy5(num) {
  return num * 5;
}

// MultiplyBy5.power = 2;
// console.log(MultiplyBy5(5));
// console.log(MultiplyBy5.power);
// console.log(MultiplyBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increamnet = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`Hello ${this.score}`);
};
const chai = new createUser('chai', 30);
const tea = new createUser('tea', 20);

chai.increamnet();
chai.printMe();
tea.printMe();
tea.increamnet();
