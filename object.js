const userOne = {
  email: "nythes@gmail.com",
  name: "Nathaneals",
  login() {
    console.log(this.name, "has logged in");
  },
  logout() {
    console.log(this.name, "has logged out");
  }
};


const { email } = userOne;
console.log(userOne.login());
console.log(userOne.name = "Paul");
console.log(email);
console.log(userOne.logout());
console.log(userOne);
