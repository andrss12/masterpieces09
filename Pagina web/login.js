document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    // Obtener los usuarios registrados desde localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Verificar si el usuario existe y la contraseña es correcta
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        window.location.href = "dashboard.html"; // Redirigir a la página principal si es correcto
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos";
    }
});