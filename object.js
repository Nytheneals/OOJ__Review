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

console.log(userOne);

const { email, name } = userOne;
console.log(userOne.login());
console.log(name);
console.log(email);
console.log(userOne.logout());
