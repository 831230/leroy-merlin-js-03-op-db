import { User } from "./users-base";

const authorizedUser = [];

function addAuthorizedUser(name, surname) {
  const personal = `${name} ${surname}`;
  authorizedUser.push(personal);
}
addAuthorizedUser("Tomasz", "Bielecki");
addAuthorizedUser("Adam", "Nowak");
console.log(authorizedUser);

// class User {
//   constructor(id, name, surname, email, password) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.password = password;
//   }
// }

// let nextId=0;
// function createNextId() {
//   nextId += 1;
//   return nextId;
// };

// const $registerForm = document.querySelector(".register-form");
// const $registerName = document.querySelector(".register-form__name-input");
// const $registerSurame = document.querySelector(".register-form__surname-input");
// const $registerEmail = document.querySelector(".register-form__email-input");
// const $registerPassword = document.querySelector(
//   ".register-form__password-input"
// );

// $registerForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const userId = createNextId();
//   const name = $registerName.value;
//   const surname = $registerSurame.value;
//   const email = $registerEmail.value;
//   const password = $registerPassword.value;
//   usersObject.addUserToObject(userId, name, surname, email, password);
//   // const newUser = new User(userId, name, surname, email, password);
//   // console.log(registeredUsersArr, "inside");
//   // registeredUsersArr.push(newUser);
//   $registerForm.reset();
// });

// const usersObject = {
//   addUserToObject(userId, name, surname, email, password) {
//     const newUser = new User(userId, name, surname, email, password);
//     this.user=newUser;
//   },
// };

// const mySetTimeout = setTimeout(function () {
//   console.log(usersObject);
// },30000);

// const registeredUsersArr = [];
// function addUserToRegisteredArr(userId, name, surname, email, password) {
//   const newUser = new User(userId, name, surname, email, password);
//   registeredUsersArr.push(newUser);
//   console.log(registeredUsersArr);
//   return registeredUsersArr;
// };
// console.log(registeredUsersArr, "outside");
// let nextId = 0;
// function createNextId() {
//   nextId += 1;
//   return nextId;
// }

// const $registerForm = document.querySelector(".register-form");
// const $registerName = document.querySelector(".register-form__name-input");
// const $registerSurame = document.querySelector(".register-form__surname-input");
// const $registerEmail = document.querySelector(".register-form__email-input");
// const $registerPassword = document.querySelector(
//   ".register-form__password-input"
// );

// let some = "";console.log(some);
// $registerForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const userId = createNextId();
//   const name = $registerName.value;
//   const surname = $registerSurame.value;
//   const email = $registerEmail.value;
//   const password = $registerPassword.value;
//   addUserToRegisteredArr(userId, name, surname, email, password);
//   // const newUser = new User(userId, name, surname, email, password);
//   // console.log(registeredUsersArr, "inside");
//   // registeredUsersArr.push(newUser);
//   some = name;
//   $registerForm.reset();
// });

// const registeredUsersArr = [];

// class User {
//   constructor(id, name, surname, email, password) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.password = password;
//   }
// }

let nextId = 0;
function createNextId() {
  nextId += 1;
  return nextId;
}

const $registerForm = document.querySelector(".register-form");
const $registerName = document.querySelector(".register-form__name-input");
const $registerSurame = document.querySelector(".register-form__surname-input");
const $registerEmail = document.querySelector(".register-form__email-input");
const $registerPassword = document.querySelector(
  ".register-form__password-input"
);

const registeredUsersArr = [];
$registerForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const userId = createNextId();
  const name = $registerName.value;
  const surname = $registerSurame.value;
  const email = $registerEmail.value;
  const password = $registerPassword.value;
  const newUser = new User(userId, name, surname, email, password);
  console.log(registeredUsersArr, "inside");
  registeredUsersArr.push(newUser);
  $registerForm.reset();
});

const mySetTimeout = setTimeout(function () {
  console.log(registeredUsersArr, "outside");
}, 30000);
// console.log(registeredUsersArr, "outside");

// const usersObject = {}

// const newUser = new User(1, "tomasz", "bielecki", "biuro@ledview.pl", "asdf");
// console.log(newUser);

// let numberUser = 1;
// usersObject.numberUser = newUser;
// console.log(usersObject);

// function addUser(id, name, surname, email, password) {
//   const newUser = new User(id, name, surname, email, password);
//   return newUser;
// };
// const user=addUser(1, "tomasz", "bielecki", "biuro@ledview.pl", "asdf");

// console.log(user);

// usersObject = {
//   users:{ },
//   addUser(id, name, surname, email, password) {
//     const newUser = new User(id, name, surname, email, password);
//     this.users;
//     this.users.newUser;
//     return newUser
//   },
// };

// usersObject.addUser(1, "tomasz", "bielecki", "biuro@ledview.pl", "asdf");
// console.log(usersObject);

// console.log(addUser(1, "tomasz", "bielecki", "biuro@ledview.pl", "asdf"));

// const newUser = new User(1, "tomasz", "bielecki", "biuro@ledview.pl", "asdf");
// console.log(newUser);

// const newUser2 = new User(1, "michał", "kowalski", "biuro2@ledview.pl", "qwerty");
// console.log(newUser2);

// const registeredUsers = {};

// registeredUsers.registeredUser = newUser;
// registeredUsers.registeredUser2 = newUser2;

// console.log(registeredUsers);

// let nextId=0;
// function createNextId() {
//   nextId += 1;
//   return nextId;
// };
// // console.log(createNextId());
// // console.log(nextId);
// // console.log(createNextId());
// // console.log(nextId);

// const $registerForm = document.querySelector(".register-form");
// const $registerName = document.querySelector(".register-form__name-input");
// const $registerSurame = document.querySelector(".register-form__surname-input");
// const $registerEmail = document.querySelector(".register-form__email-input");
// const $registerPassword = document.querySelector(".register-form__password-input");

//  const registeredUsersArr = [];
// $registerForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const userId = createNextId();
//   const name = $registerName.value;
//   const surname = $registerSurame.value;
//   const email = $registerEmail.value;
//   const password = $registerPassword.value;
//   const newUser = new User(userId, name, surname, email, password);
//   console.log(registeredUsersArr, "inside");
//   $registerForm.reset();
//   return registeredUsersArr.push(newUser);

//   // return registeredUsers.newUser = new User(userId, name, surname, email, password);
// });

// console.log(registeredUsersArr,"outside");

// const registeredUsersArr2 = [registeredUsersArr];
// console.log(registeredUsersArr2);
