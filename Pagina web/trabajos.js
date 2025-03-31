document.addEventListener("DOMContentLoaded", function () {
    let trabajos = JSON.parse(localStorage.getItem("trabajos")) || {};

    let aulasContainer = document.getElementById("aulasContainer");
    aulasContainer.innerHTML = "";

    Object.keys(trabajos).forEach(aula => {
        let aulaDiv = document.createElement("div");
        aulaDiv.classList.add("aula");

        let aulaTitle = document.createElement("h3");
        aulaTitle.textContent = `Aula: ${aula}`;
        aulaDiv.appendChild(aulaTitle);

        let ul = document.createElement("ul");
        trabajos[aula].forEach(trabajo => {
            let li = document.createElement("li");
            li.textContent = trabajo;
            ul.appendChild(li);
        });

        aulaDiv.appendChild(ul);
        aulasContainer.appendChild(aulaDiv);
    });
});
