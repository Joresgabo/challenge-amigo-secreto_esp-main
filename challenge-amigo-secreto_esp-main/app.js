// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = [];
const listaElement = document.getElementById("listaAmigos");
const resultadoElement = document.getElementById("resultado");

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue añadido.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}

// Mostrar la lista en el HTML
function mostrarLista() {
    listaElement.innerHTML = "";
    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 5) {
        alert("Debes ingresar exactamente 5 amigos para hacer el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    resultadoElement.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultadoElement.appendChild(li);
}

// Mostrar resultados en el HTML
function mostrarResultado(asignaciones) {
    resultadoElement.innerHTML = "";
    for (const [amigo, secreto] of Object.entries(asignaciones)) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${secreto}`;
        resultadoElement.appendChild(li);
    }
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya fue añadido.");
        return;
    }

    if (listaAmigos.length >= 5) {
        alert("Solo puedes añadir hasta 5 amigos.");
        return;
    }

    listaAmigos.push(nombre);
    mostrarLista();
    input.value = "";
}