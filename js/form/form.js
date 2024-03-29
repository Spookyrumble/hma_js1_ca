import { checkLenght } from "./functions.js";
import { validateEmail } from "./functions.js";
import { preventDefault } from "./functions.js";
import { createsuccessHtml } from "./functions.js";
import { createErrorHtml } from "./functions.js";
import { clearInputs } from "./functions.js";

const contactForm = document.querySelector("#form_container");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#surname");
const address = document.querySelector("#address");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const submitBtn = document.querySelector("#form_btn");
const results = document.querySelector("#results");

const firstNameError = document.querySelector("#name_error");
const lastNameError = document.querySelector("#surname_error");
const addressError = document.querySelector("#address_error");
const subjectError = document.querySelector("#subject_error");
const emailError = document.querySelector("#email_error");
// const inputDivs = document.querySelectorAll(".form_error");

// Prevents page refresh on submit //
contactForm.addEventListener("submit", preventDefault);

// Checks form boolean and displays message accordingly //
submitBtn.addEventListener("click", checkFormBoolean);

// Listens to the form inputs as you write and removes red criteria text when fulfilled //
function validateForm() {
  try {
    firstName.addEventListener("input", function (event) {
      console.log(event.target.value);
      if (checkLenght(firstName.value, 0)) {
        firstNameError.style.display = "none";
      } else {
        firstNameError.style.display = "block";
      }
    });
    lastName.addEventListener("input", function (event) {
      console.log(event.target.value);
      if (checkLenght(lastName.value, 0)) {
        lastNameError.style.display = "none";
      } else {
        lastNameError.style.display = "block";
      }
    });
    address.addEventListener("input", function (event) {
      console.log(event.target.value);
      if (checkLenght(address.value, 24)) {
        addressError.style.display = "none";
      } else {
        addressError.style.display = "block";
      }
    });
    subject.addEventListener("input", function (event) {
      console.log(event.target.value);
      if (checkLenght(subject.value, 9)) {
        subjectError.style.display = "none";
      } else {
        subjectError.style.display = "block";
      }
    });
    email.addEventListener("input", function (event) {
      console.log(event.target.value);
      if (validateEmail(email.value)) {
        emailError.style.display = "none";
      } else {
        emailError.style.display = "block";
      }
    });
  } catch (error) {
    results.innerHTML = error;
  }
}

// Runs validateForm input check on page load. //
validateForm();

// Checks if all form booleans are true and creates the appropriate message. It will also give a green glow on the send button when clicked if all are "true". the else switch will check which returns false and name it in the error message //
function checkFormBoolean() {
  let check = true;
  if (
    checkLenght(firstName.value, 0) &&
    checkLenght(lastName.value, 0) &&
    checkLenght(address.value, 24) &&
    checkLenght(subject.value, 9) &&
    validateEmail(email.value)
  ) {
    submitBtn.style.boxShadow = "1px 1px 15px #008000";
    createsuccessHtml();
    clearInputs(contactForm);
    console.log("Thank you for your message!");
  } else {
    switch (check) {
      case !checkLenght(firstName.value, 0):
        createErrorHtml("First Name");
        break;
      case !checkLenght(lastName.value, 0):
        createErrorHtml("Last Name");
        break;
      case !checkLenght(address.value, 24):
        createErrorHtml("Address");
        break;
      case !checkLenght(subject.value, 9):
        createErrorHtml("Subject");
        break;
      case !validateEmail(email.value):
        createErrorHtml("Email");
        break;
      default:
        console.log("Form check invalid!");
    }
  }
}
