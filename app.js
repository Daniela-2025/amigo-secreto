// Array vacío donde se guardarán los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    // 1. Capturar el valor del input
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim(); // .trim() elimina espacios en blanco

    // 2. Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // salir de la función si está vacío
    }

    // 3. Agregar al array
    amigos.push(nombre);

    // 4. Limpiar el campo de entrada
    input.value = "";

    // 5. Actualizar la lista en pantalla
    actualizarLista();
}

// Función para mostrar los amigos en la lista HTML
function actualizarLista() {
    // 1. Obtener el elemento de la lista en el HTML
    let lista = document.getElementById("listaAmigos");

    // 2. Limpiar el contenido previo para evitar duplicados
    lista.innerHTML = "";

    // 3. Recorrer el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // 4. Crear un nuevo elemento <li>
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // 5. Agregar el <li> a la lista
        lista.appendChild(item);
    }
}
function sortearAmigo() {
    // 1. Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

