function emailValidate(event) {
    event.preventDefault();

    const emailInput = document.getElementById("email-input").value;
    var errorMessage = document.getElementById("error-message");
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.trim() === "") {
        errorMessage.textContent = "Oops! Please add your email.";
    } else if (!emailInput.match(emailRegex)) {
        errorMessage.textContent = "Oops! Please check your email";
    } else {
        errorMessage.textContent = ""
    }
}