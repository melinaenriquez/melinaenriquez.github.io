document.addEventListener('DOMContentLoaded', function() {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (usuario) {
        document.getElementById('bienvenida-mensaje').textContent = `Bienvenido, ${usuario.nombre} ${usuario.apellido}`;
        document.getElementById('nombre-usuario').textContent = `${usuario.nombre} ${usuario.apellido}`;
    } else {
        window.location.href = 'index.html';
    }
});