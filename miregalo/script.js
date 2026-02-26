function mostrarMensaje(nombre) {
    const contenedor = document.getElementById('mensaje-contenedor');
    const texto = document.getElementById('texto-amor');
    
    let mensaje = "";

    if (nombre === 'Guadalupe') {
        mensaje = "¡Guadalupe! Eres una persona increíble y brillas con luz propia. ❤️";
    } else if (nombre === 'Betsy') {
        mensaje = "¡Betsy! Tu sonrisa ilumina cualquier lugar. Gracias por ser tú. ✨";
    }

    texto.innerText = mensaje;
    contenedor.classList.remove('hidden');
}

function cerrarMensaje() {
    const contenedor = document.getElementById('mensaje-contenedor');
    contenedor.classList.add('hidden');
}
