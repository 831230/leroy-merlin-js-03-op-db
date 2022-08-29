import { User } from "./users-base.js";

// const sqlite3 = require("sqlite3").verbose();
// import { sqlite3 } from ""

// const dataBase = new sqlite3.Database("../base.db");

const authorizedUser = [];

function addAuthorizedUser(name, surname) {
  const personal = `${name} ${surname}`;
  authorizedUser.push(personal);
}
addAuthorizedUser("Tomasz", "Bielecki");
addAuthorizedUser("Adam", "Nowak");
console.log(authorizedUser);



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

