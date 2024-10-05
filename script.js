function handleSubmit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        alert("Login Successful");
    } else {
        alert("Please fill in both email and password.");
    }

    // Prevent form submission for demo purposes
    return false;
}