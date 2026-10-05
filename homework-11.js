const form = document.querySelector(".footer__form");

console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailInput = document.querySelector(".footer__input");
  const email = emailInput.value;

  const data = {
    email: email,
  };
  console.log(data);
});

const registrationButton = document.querySelector(".registration-button");
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

registrationButton.addEventListener("click", function () {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});

const closeButton = document.querySelector(".modal__close");

closeButton.addEventListener("click", function () {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});

const registrationForm = document.querySelector(".registration-form");

let user;

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = registrationForm.checkValidity();
  if (!isValid) {
    alert("Регистрация отклонена: проверьте правильность заполнения полей");
    return;
  }
  const passwordInput = document.querySelector("#password");
  const repeatPasswordInput = document.querySelector("#repeat-password");

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают");
    return;
  }

  const firstNameInput = document.querySelector("#first-name");
  const lastNameInput = document.querySelector("#last-name");
  const birthDateInput = document.querySelector("#birth-date");
  const loginInput = document.querySelector("#login");

  const userData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    birthDate: birthDateInput.value,
    login: loginInput.value,
    password: passwordInput.value,
    createdOn: new Date(),
  };

  user = userData;
  console.log(user);

  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});
