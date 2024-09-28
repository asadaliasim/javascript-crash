class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Welcome back ${this.username}`);
  }
  static createId() {
    return `123`;
  }
}

const asad = new User('asad');
// console.log(asad.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const newUser = new Teacher('Asad', 'asad@gmail.com');
// console.log(newUser);

// console.log(newUser.createId());
