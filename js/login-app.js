(() => {
  const loginApp = {
    openLoginAppBtn: document.querySelector("[login-app-open]"),
    closeLoginAppBtn: document.querySelector("[login-app-close]"),
    modalLoginApp: document.querySelector("[login-app-section]"),
    chooseActionSection: document.querySelector("[choose-action]"),
    modalRegisterApp: document.querySelector("[register-section]"),
    openRegisterAppBtn: document.querySelector("[register-app-open]"),
    closeRegisterAppBtn: document.querySelector("[register-app-close]"),
  };

    loginApp.openLoginAppBtn.addEventListener("click", toggleModal);
    loginApp.closeLoginAppBtn.addEventListener("click", toggleModal);
    loginApp.openRegisterAppBtn.addEventListener("click", toggleModal);
    loginApp.closeRegisterAppBtn.addEventListener("click", toggleModal);

  function toggleModal() {
      loginApp.chooseActionSection.classList.toggle("is-hidden");
      loginApp.modalLoginApp.classList.toggle("is-hidden");
      loginApp.modalRegisterApp.classList.toggle("is-hidden");
      
  }
})();
