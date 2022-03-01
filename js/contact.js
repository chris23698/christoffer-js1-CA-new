const form = document.querySelector("#contact-form")

const fullName = document.querySelector("#full-name")
const fullNameError = document.querySelector("#full-name-error")

const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subject-error")

const email = document.querySelector("#email")
const emailError = document.querySelector("#email-error")

const address = document.querySelector("#address")
const addressError = document.querySelector("#address-error")

function validateForm() {
event.preventDefault();

if(checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
} else {
    fullNameError.style.display = "block";
}
if(checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
} else {
    subjectError.style.display = "block";
}
if(checkLength(address.value, 24) === true) {
    addressError.style.display = "none";
} else {
    addressError.style.display = "block";
}
if(validateEmail(email.value) === true) {
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}
}

form.addEventListener("submit", validateForm)

function checkLength(value, len) {

    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}