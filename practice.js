const loginBtn = document.getElementById("submit-btn");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-section");
  loginArea.style.backgroundColor = "green";
});
document.getElementsByTagName("h1").style.backgroundColor = "green";

// function greetings(a, b) {
//   return a + b;
// }
// var a = 2;
// function wish(x, y, cb) {
//   //   console.log(this.a);
//   return cb(x, y);
//}
// console.log(wish(2, 2, greetings));
// console.log(wish(greetings('evening')))
// let regan = {
//   sex: "Male",
//   hobby: "Gondami",
//   aim: "biya-gora",
// };
// let arpan = {
//   aim: "Amma-biya-gora",
// };
// arpan.__proto__ = regan;
// console.log(arpan.hobby);

// function outer() {
//   let a = 10;
//   function inner() {
//     // console.log(a);
//   }
//   return inner;
// }
// let aa=outer()
// console.dir(aa);
