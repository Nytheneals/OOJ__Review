class User {
  constructor(email, name) {
    this.name = name;
    this.email = email;
  }
  login() {
    console.log(`${this.email} is Logged in`)
  }
  logout() {
    console.log(`${this.email} is Logged Out`)
  }
}

const userOne = new User("nythes@nate.com", "Nathaneals");
const userTwo = new User("andru@nate.com", "Andrew");

// the new keyword creates a new empty object sets the value of this to the new
// empty object calls the constructor method

console.log(userOne);
userOne.login();
userTwo.logout();
