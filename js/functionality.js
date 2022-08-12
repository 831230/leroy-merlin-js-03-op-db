
const authorizedUser = [];

function addAuthorizedUser(name, surname) { 
  const personal =`${name} ${surname}`;
  authorizedUser.push(personal);
};
addAuthorizedUser("Tomasz", "Bielecki");
addAuthorizedUser("Adam", "Nowak");
console.log(authorizedUser);

class User { 
  constructor(id, name, surname, email, password) { 
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }
};

const registeredUsers = {};

let nextId=0;
function createNextId() { 
  nextId += 1;
  return nextId;
};
console.log(createNextId());
console.log(createNextId());
console.log(nextId);

const $registerForm = document.querySelector(".register-form");
const $registerName = document.querySelector(".register-form__name-input");
const $registerSurame = document.querySelector(".register-form__surname-input");
const $registerEmail = document.querySelector(".register-form__email-input");
const $registerPassword = document.querySelector(".register-form__password-input");
  
$registerForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const userId = createNextId();
  const name = $registerName.value;
  const surname = $registerSurame.value;
  const email = $registerEmail.value;
  const password = $registerPassword.value;
  registeredUsers.newUser= new User(userId, name, surname, email, password);
  return registeredUsers;
  
});
console.log(registeredUsers);