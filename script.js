// Datos simulados basados en la base de datos
const libros = [
    { id: 1, titulo: "Encantamientos Avanzados", autor: "Miranda Goshawk", categoria: "Magia Avanzada" },
    { id: 2, titulo: "Pociones Peligrosas", autor: "Severus Snape", categoria: "Pociones" },
    { id: 3, titulo: "Criaturas Fantásticas", autor: "Newt Scamander", categoria: "Zoología Mágica" }
];

const categorias = ["Magia Avanzada", "Pociones", "Zoología Mágica", "Historia de la Magia"];

const autores = [
    { id: 1, nombre: "Miranda Goshawk" },
    { id: 2, nombre: "Severus Snape" },
    { id: 3, nombre: "Newt Scamander" }
];

// Renderizar libros
const librosContainer = document.getElementById("libros-container");
libros.forEach(libro => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Categoría:</strong> ${libro.categoria}</p>
    `;
    librosContainer.appendChild(card);
});

// Renderizar categorías
const categoriasContainer = document.getElementById("categorias-container");
categorias.forEach(categoria => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${categoria}</h3>`;
    categoriasContainer.appendChild(card);
});

// Renderizar autores
const autoresContainer = document.getElementById("autores-container");
autores.forEach(autor => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${autor.nombre}</h3>`;
    autoresContainer.appendChild(card);
});
