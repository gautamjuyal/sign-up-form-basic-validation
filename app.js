const signUpBtn = document.getElementById("sign-up-btn")


function throwError(field, element) {
    if (element.parentElement.querySelector('p') !== null)
        return;
    let defaultString = " cannot be empty";
    let newString;
    if (field === "email")
        newString = "Looks like this is not an email"
    else
        newString = field + defaultString;

    element.classList.add('error');
    const p = document.createElement('p');
    p.classList.add('error-text');
    p.textContent = newString
    element.parentElement.appendChild(p);
}

function removeError(element) {
    element.classList.remove('error');
    if (element.parentElement.querySelector('p') !== null)
        element.parentElement.removeChild(element.parentElement.querySelector('p'));
}

function checkForErrors() {
    const fName = document.getElementById('first-name');
    const lName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');


    if (fName.value.trim() === "")
        throwError("First Name", fName);
    else
        removeError(fName);
    if (lName.value.trim() === "")
        throwError("Last Name", lName);
    else
        removeError(lName);
    if (password.value.trim() === "")
        throwError("Password", password);
    else
        removeError(password);

    const emailRegEx = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    if (!emailRegEx.test(email.value))
        throwError("email", email);
    else
        removeError(email);


}

function submitBtnHandler(event) {
    event.preventDefault();
    checkForErrors();
}

signUpBtn.addEventListener('click', submitBtnHandler);