const form = document.querySelector(".footer__form");

const emailInput = document.querySelector(".footer__input");
console.log(form);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  const data = {
    email: email,
  };
  console.log(data);
});

const registrationButton = document.querySelector(".registration-button");
const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

function openModal() {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
}

registrationButton.addEventListener("click", openModal);

const closeButton = document.querySelector(".modal__close");

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
}

closeButton.addEventListener("click", closeModal);

const registrationForm = document.querySelector(".registration-form");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const birthDateInput = document.querySelector("#birth-date");
const loginInput = document.querySelector("#login");
let user;

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = registrationForm.checkValidity();
  if (!isValid) {
    alert("Регистрация отклонена: проверьте правильность заполнения полей");
    return;
  }

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают");
    return;
  }

  const userData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    birthDate: birthDateInput.value,
    login: loginInput.value,
    password: passwordInput.value,
    createdOn: new Date(),
  };

  user = userData;

  const userForConsole = { ...user };
  delete userForConsole.password;

  console.log(userForConsole);

  closeModal();
});
