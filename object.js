class User {
  constructor(email, name) {
    this.name = name;
    this.email = email;
  }
}


const userOne = new User("nythes@nate.com", "Nathaneals");

// the new keyword creates a new empty object
// sets the value of this to the new empty object
// calls the constructor method

console.log(userOne);

