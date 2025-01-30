// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreAmigo = input.value.trim();  // Eliminar espacios en blanco extra

    // Verificar si el nombre no está vacío y si no se repite
    if (nombreAmigo && !amigos.includes(nombreAmigo)) {
        amigos.push(nombreAmigo);  // Agregar el amigo al arreglo
        actualizarLista();         // Actualizar la lista en el HTML
        input.value = '';          // Limpiar el campo de texto
    } else if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido añadido.');
    } else {
        alert('Por favor, ingrese un nombre válido.');
    }
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpiar la lista antes de actualizarla

    // Crear un elemento de lista por cada amigo
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;  // El texto del elemento será el nombre del amigo
        listaAmigos.appendChild(li); // Añadir el elemento a la lista
    });
}

// Función para sortear un solo amigo secreto aleatorio
function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Debe haber al menos 1 amigo para realizar el sorteo');
        return;
    }

    // Seleccionar un amigo aleatorio
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado en el área correspondiente
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';  // Limpiar resultados anteriores

    const li = document.createElement('li');
    li.textContent = `¡El amigo secreto seleccionado es: ${amigoSecreto}!`;
    resultado.appendChild(li);
}
