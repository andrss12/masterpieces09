document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Ocultar el menú al inicio
    navLinks.style.display = "none";

    // Cuando el usuario haga clic en ☰, mostrar/ocultar el menú
    menuToggle.addEventListener("change", function () {
        if (menuToggle.checked) {
            navLinks.style.display = "flex"; // Mostrar el menú
        } else {
            navLinks.style.display = "none"; // Ocultar el menú
        }
    });

    // Cerrar el menú cuando se hace clic en una opción
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.checked = false;
            navLinks.style.display = "none";
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    const aulasBtn = document.querySelector(".ver-aulas-btn");

    if (aulasBtn) {
        aulasBtn.addEventListener("click", function (event) {
            event.preventDefault(); // Evita la navegación inmediata

            document.body.classList.add("jump-transition");

            // Guardamos en sessionStorage que la animación ocurrió
            sessionStorage.setItem("jumpEffect", "true");

            setTimeout(() => {
                window.location.href = aulasBtn.href;
            }, 500); // Espera la animación antes de cambiar de página
        });
    }

    // Si regresamos a la página, eliminamos el efecto para que vuelva a ocurrir
    if (sessionStorage.getItem("jumpEffect") === "true") {
        document.body.classList.remove("jump-transition");
        sessionStorage.removeItem("jumpEffect");
    }
});