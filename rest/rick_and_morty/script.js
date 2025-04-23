document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("character-grid");

    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(character => {
                const col = document.createElement("div");
                col.className = "col-sm-6 col-md-4 col-lg-3";

                col.innerHTML = `
                    <div class="card h-100 text-bg-secondary">
                    <img src="${character.image}" class="card-img-top" alt="${character.name}">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <p class="card-text">
                        <strong>Especie:</strong> ${character.species}<br>
                        <strong>Estado:</strong> ${character.status}
                        </p>
                    </div>
                    </div>
                `;

                container.appendChild(col);
            });
        })
        .catch(error => {
            container.innerHTML = `<div class="col"><p class="text-danger">Error al cargar los personajes.</p></div>`;
            console.error("Error al obtener los personajes:", error);
        });
});
