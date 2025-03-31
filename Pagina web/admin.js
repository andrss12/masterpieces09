document.getElementById("adminForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value.trim();

    // Validar longitud máxima
    if (newUsername.length > 12 || newPassword.length > 12) {
    alert("El nombre de usuario y la contraseña no pueden tener más de 12 caracteres.");
    return;
}

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Evitar usuarios duplicados
    if (users.some(user => user.username === newUsername)) {
        alert("El usuario ya existe.");
        return;
    }

    users.push({ username: newUsername, password: newPassword });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Usuario creado exitosamente");
    document.getElementById("newUsername").value = "";
    document.getElementById("newPassword").value = "";
    loadUsers();
});

// Cargar y mostrar usuarios con opción de eliminar
function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user, index) => {
        let li = document.createElement("li");
        li.textContent = user.username;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.style.marginLeft = "10px";
        deleteBtn.onclick = function() {
            deleteUser(index);
        };

        li.appendChild(deleteBtn);
        userList.appendChild(li);
    });
}

// Eliminar un usuario por índice
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1); // Eliminar usuario de la lista
    localStorage.setItem("users", JSON.stringify(users));
    loadUsers(); // Volver a cargar la lista
}

function loadUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = document.getElementById("userList");
    userList.innerHTML = "";

    users.forEach((user, index) => {
        let li = document.createElement("li");

        let userInfo = document.createElement("div");
        userInfo.classList.add("user-info");
        userInfo.innerHTML = `<strong>Usuario:</strong> ${user.username} <br> <strong>Contraseña:</strong> ${user.password}`;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.onclick = function () {
            deleteUser(index);
        };

        li.appendChild(userInfo);
        li.appendChild(deleteBtn);
        userList.appendChild(li);
    });
}
document.addEventListener("DOMContentLoaded", loadUsers);