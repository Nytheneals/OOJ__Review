// METHOD CHAINING
class User {
  constructor(email, name) {
    this.name = name;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.email} is Logged in`);
    return this;
  }
  logout() {
    console.log(`${this.email} is Logged Out`);
    return this;
  }
  updateScore() {
    this.score++;
    console.log(`${this.name}'s score is ${this.score}`);
    return this;
  }
}
const userOne = new User("nytheneals@insta.com", "Nytheneals");
const userTwo = new User("miguel@miguelmusic.com", "Miguel");

console.log(userOne);
console.log(userTwo);

userOne.login().updateScore().logout();
userTwo.login().updateScore().logout();

console.log(userOne);
console.log(userTwo);
