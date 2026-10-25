import Modal from "./Modal.js";
import Form from "./Form.js";

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
const registrationModal = new Modal("registration-modal");

const overlay = document.querySelector(".overlay");

function openModal() {
  registrationModal.open();
}

registrationButton.addEventListener("click", openModal);

function closeModal() {
  registrationModal.close();
}

const registrationForm = document.querySelector(".registration-form");
const registrationFormManager = new Form("registration-form");
const passwordInput = document.querySelector("#password");
const repeatPasswordInput = document.querySelector("#repeat-password");
const firstNameInput = document.querySelector("#first-name");
const lastNameInput = document.querySelector("#last-name");
const birthDateInput = document.querySelector("#birth-date");
const loginInput = document.querySelector("#login");
let user;

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const isValid = registrationFormManager.validate();
  if (!isValid) {
    alert("Регистрация отклонена: проверьте правильность заполнения полей");
    return;
  }

  if (passwordInput.value !== repeatPasswordInput.value) {
    alert("Регистрация отклонена: пароли не совпадают");
    return;
  }

  const userData = registrationFormManager.getValues();
  userData.createdOn = new Date();
  delete userData.repeatPassword;

  user = userData;

  const userForConsole = { ...user };
  delete userForConsole.password;

  console.log(userForConsole);
  registrationFormManager.reset();
  closeModal();
});
