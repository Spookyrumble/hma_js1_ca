// Checks the length property of form inputs. I did not include the trim() because it does not make sense to trim, names and addresses.
export function checkLenght(value, len) {
  if (value.length > len) {
    return true;
  } else {
    return false;
  }
}
// Validates email syntax (xxxx@xxxx.xx)
export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

export const createResultHtml = document.querySelector("#results");

// Checks the validateForm Boolean inside checkFormBoolean and creates the "Success" message and runs the timeout function if = true.
export function createsuccessHtml() {
  createResultHtml.innerHTML = `<div class="result_container">
          <h3 class="result_success">Success!</h3>
          <p class="result_success">We will get back to you shortly!</p>
        </div>`;
  removeMessage(5000);
}

// // Checks the validateForm Boolean inside checkFormBoolean and creates the "Error" message and runs the timeout function if = false.
export function createErrorHtml() {
  createResultHtml.innerHTML = `<div class="result_container">
      <h3 class="result_error">Error!</h3>
      <p class="result_error">Please fill out the missing information.<br>Check word length!</p>
    </div>`;
  removeMessage(5000);
}

// Removes the Success/Error messages after given milliseconds.
export function removeMessage(ms) {
  setTimeout(function () {
    createResultHtml.innerHTML = "";
  }, ms);
}

// Listens to the form and prevents page refresh.
export function preventDefault(event) {
  event.preventDefault();
}

// Clears the form inputs on "success". Form stays filled if "error" for practical reasons.
export function clearInputs(form) {
  const input = form.querySelectorAll("input");
  for (let i = 0; i < input.length; i++) {
    input[i].value = "";
    console.log(input[i]);
  }
}

export function resetCriteraText(divs) {
  divs.style.display = null;
}
