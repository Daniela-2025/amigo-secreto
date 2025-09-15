let amigos = [];

// Agregar amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const botonReiniciar = document.getElementById("reiniciar");

    if (nombre === "") {
        alert("Por favor escribe un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    input.value = "";
 
     // Llamar a la función que actualiza la lista
    actualizarLista();

    botonReiniciar.disabled = false; // activar botón reiniciar
 }

 // Actualizar lista en pantalla
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar lista antes de volver a pintarla

for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
}

// limpiar resultado si se cambia la lista
    document.getElementById("resultado").innerHTML = "";
}

// Sortear amigo
function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para sortear.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indice];

    resultado.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Reiniciar juego
function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("reiniciar").disabled = true;
}