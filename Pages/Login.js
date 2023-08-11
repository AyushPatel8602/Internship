function togglePassword() {
    var password = document.getElementById("password");
    var checkbox = document.getElementById("showPassword");

    if (checkbox.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
}