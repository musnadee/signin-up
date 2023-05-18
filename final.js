function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordMatch = document.getElementById("passwordMatch");

    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (password !== confirmPassword) {
        passwordMatch.innerText = "Passwords do not match.";
        passwordMatch.style.display = "block";
    } else if (!passwordRegex.test(password)) {
        passwordMatch.innerText = "Password requirements: minimum 8 characters, at least 1 capital letter, 1 symbol, and 1 lowercase letter.";
        passwordMatch.style.display = "block";
    } else {
        passwordMatch.style.display = "none";
    }
}
