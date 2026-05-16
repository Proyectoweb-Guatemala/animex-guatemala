function verInfo(nombre, precio, estado) {
    document.getElementById('modalTitulo').innerText = nombre;
    document.getElementById('detallesNombre').innerText = nombre;
    document.getElementById('detallesPrecio').innerText = precio;
    document.getElementById('detallesEstado').innerText = estado;
    
    var miModal = new bootstrap.Modal(document.getElementById('modalDetalles'));
    miModal.show();
}