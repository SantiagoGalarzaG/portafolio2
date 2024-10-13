document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar que se envíe el formulario sin validación

    // Obtener los valores de los campos
    let nombre = document.getElementById('from_name').value.trim();
    let correo = document.getElementById('email_id').value.trim();
    let asunto = document.getElementById('asunto').value.trim();
    let mensaje = document.getElementById('message').value.trim();

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
    // envio E-mail
const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_rn5dcpq';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Enviar';
            alert('Enviado!');
    }, (err) => {
    btn.value = 'Enviar';
    alert(JSON.stringify(err));
    });
});

});

// Función para validar formato de email
function validarEmail(correo) {
    const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expresionRegular.test(correo);
}

