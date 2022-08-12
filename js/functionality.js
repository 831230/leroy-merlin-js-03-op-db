
const authorizedUser = [];

function addAuthorizedUser(name, surname) { 
  const personal =`${name} ${surname}`;
  authorizedUser.push(personal);
};
addAuthorizedUser("Tomasz", "Bielecki");
addAuthorizedUser("Adam", "Nowak");
console.log(authorizedUser);

class User { 
  constructor(name, surname, email, password) { 
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.password = password;
  }
};

