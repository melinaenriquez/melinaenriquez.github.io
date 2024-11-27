document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const contrasena = document.getElementById('contrasena').value;

    // Simulación de autenticación (en un entorno real, esto se haría en el servidor)
    if (nombre && apellido && dni && contrasena) {
        // Almacenar datos del usuario en localStorage
        localStorage.setItem('usuario', JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            dni: dni,
            contrasena: contrasena
        }));

        // Redirigir a la página de bienvenida
        window.location.href = 'bienvenida.html';
    } else {
        alert('Por favor, complete todos los campos.');
    }
});