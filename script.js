function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (username === "hoteladmin" && password === "hotel@123") {
        message.style.color = "green";
        message.innerHTML = "Login successful!";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect to dashboard (create this file later)
        }, 1500);
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid Username or Password!";
    }
}

document.getElementById("showPassword").addEventListener("change", function() {
    var passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password";
});
