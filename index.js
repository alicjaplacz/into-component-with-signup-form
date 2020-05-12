const form = document.getElementsByTagName("form")[0];

const name = document.getElementById("firstName");
const nameError = document.querySelector("#firstName + span.error");

const surname = document.getElementById("lastName");
const surnameError = document.querySelector("#lastName + span.error");

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");

form.addEventListener("submit", function(event){
  if (!name.validity.valid) {
    showErrorName();
    event.preventDefault();
  }
});

form.addEventListener("submit", function (event) {
  if (!surname.validity.valid) {
    showErrorSurname();
    event.preventDefault();
  }
});

form.addEventListener("submit", function (event) {
  if(!email.validity.valid) {
    showErrorEmail();
    event.preventDefault();
  }
});

form.addEventListener("submit", function(event) {
  if(!password.validity.valid) {
    showErrorPassword();
    event.preventDefault();
  }
});

function showErrorName() {
  if (name.validity.valueMissing) {
    nameError.textContent = "Name cannot be empty";
    name.classList.add("invalid");
  }
  nameError.className = "error";
};

function showErrorSurname() {
  if (surname.validity.valueMissing) {
    surnameError.textContent = "Surname cannot be empty";
    surname.classList.add("invalid");
  }
  surnameError.className = "error";
};

function showErrorEmail() {
  if (email.validity.typeMismatch) {
    emailError.textContent = "Looks like this is not an email";
    email.classList.add("invalid");
  } else if (email.validity.valueMissing) {
    emailError.textContent = "Email cannot be empty";
    email.classList.add("invalid");
  }
  emailError.className = "error";
};

function showErrorPassword() {
  if (password.validity.valueMissing) {
    passwordError.textContent = "Password cannot be empty";
    password.classList.add("invalid");
  }
  passwordError.className = "error";
};
