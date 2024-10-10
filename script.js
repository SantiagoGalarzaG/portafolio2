document.getElementById('formularioContacto').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que se envíe el formulario sin validación

    // Obtener los valores de los campos
    let nombre = document.getElementById('nombre').value.trim();
    let correo = document.getElementById('correo').value.trim();
    let asunto = document.getElementById('asunto').value.trim();
    let mensaje = document.getElementById('mensaje').value.trim();

    // Validar el campo de nombre
    if (nombre === '') {
        alert('Por favor, ingrese su nombre.');
        return;
    }

    // Validar el campo de correo (formato de email)
    if (!validarEmail(correo)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    // Validar el campo de asunto
    if (asunto === '') {
        alert('Por favor, ingrese un asunto.');
        return;
    }

    // Validar el campo de mensaje
    if (mensaje.length < 10) {
        alert('El mensaje debe tener al menos 10 caracteres.');
        return;
    }

    // Si pasa todas las validaciones, se puede enviar el formulario
    alert('Formulario enviado correctamente.');
    // Aquí puedes agregar el código para enviar los datos, por ejemplo, usando AJAX o un backend.
});

// Función para validar formato de email
function validarEmail(correo) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}