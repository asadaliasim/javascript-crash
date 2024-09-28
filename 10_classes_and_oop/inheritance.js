class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Hello ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const register = new Teacher('Asad', 'asad@gmail.com', '123');
register.addCourse();
register.logMe();
const addUser = new User('Asad');
addUser.logMe();

// console.log(register instanceof User);
