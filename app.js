// Array para almacenar los nombres de los amigos
let amigos = [];

// Referencias a los elementos
const input = document.getElementById("amigo");
const botonAdd = document.querySelector(".button-add");

// Escuchar cambios en el input para cambiar color del botón
input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
        botonAdd.style.backgroundColor = "#4B69FD";
        botonAdd.style.color = "white";
    } else {
        botonAdd.style.backgroundColor = "#C4C4C4";
        botonAdd.style.color = "#444444";
    }
});

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();

    botonAdd.style.backgroundColor = "#C4C4C4";
    botonAdd.style.color = "#444444";
}

// Función para actualizar la lista en la pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("listaAmigos");
    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);

    lista.innerHTML = "";
}
