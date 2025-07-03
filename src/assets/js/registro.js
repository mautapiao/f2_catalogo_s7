document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registroForm');
    const btnLimpiar = document.getElementById('btnLimpiar');
    const contrasena = document.getElementById('contrasena');
    const confirmarContrasena = document.getElementById('confirmarContrasena');
    const fechaNacimiento = document.getElementById('fechaNacimiento');
   
    function validarContrasena(password) {
        // Verifico longitud (6-18 caracteres)
        if (password.length < 6 || password.length > 18) {
            return false;
        }

        // Verifico si tiene al menos una mayúscula
        let tieneMayuscula = false;
        for (let char of password) {
            if (char >= 'A' && char <= 'Z') {
                tieneMayuscula = true;
                break;
            }
        }
        if (!tieneMayuscula) return false;

        // Verifico si tiene al menos un número
        let tieneNumero = false;
        for (let char of password) {
            if (char >= '0' && char <= '9') {
                tieneNumero = true;
                break;
            }
        }
        if (!tieneNumero) return false;

        // Si pasó todas las validaciones retorno verdadero
        return true;
    }

    // Función para validar edad (mayor de 13 años)
    function validarEdad(fecha) {
        const hoy = new Date();
        const fechaNac = new Date(fecha);
        const edad = hoy.getFullYear() - fechaNac.getFullYear();
        const mesActual = hoy.getMonth();
        const mesNacimiento = fechaNac.getMonth();

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNac.getDate())) {
            return edad - 1 >= 13;
        }
        return edad >= 13;
    }

    // Validación en tiempo real de contraseña
    contrasena.addEventListener('input', function () {
        const password = this.value;
        if (password && !validarContrasena(password)) {
            this.setCustomValidity('La contraseña debe tener entre 6-18 caracteres, al menos un número y una letra mayúscula.');

        } else {
            this.setCustomValidity('');

        }

        // Revalidar confirmación si ya tiene contenido
        if (confirmarContrasena.value) {
            validarConfirmacion();
        }
    });

    // Validación de confirmación de contraseña
    function validarConfirmacion() {
        if (confirmarContrasena.value !== contrasena.value) {
            confirmarContrasena.setCustomValidity('Las contraseñas no coinciden.');
             this.classList.add('is-invalid'); // Añade clase de Bootstrap para error
        } else {
            confirmarContrasena.setCustomValidity('');
             this.classList.remove('is-invalid'); // remove clase de Bootstrap para error
        }
    }

    confirmarContrasena.addEventListener('input', validarConfirmacion);

    // Validación de fecha de nacimiento
    fechaNacimiento.addEventListener('change', function () {
        if (this.value && !validarEdad(this.value)) {
            this.setCustomValidity('Debe ser mayor de 13 años.');
            this.classList.add('is-invalid'); // Añade clase de Bootstrap para error
        } else {
            this.setCustomValidity('');
            this.classList.remove('is-invalid'); // Remueve el estado de error
        }
    });

    // Manejar envío del formulario
    form.addEventListener('submit', function (event) {

        event.preventDefault();
        event.stopPropagation();

        // Validaciones adicionales
        if (!validarContrasena(contrasena.value)) {
            contrasena.setCustomValidity('La contraseña debe tener entre 6-18 caracteres, al menos un número y una letra mayúscula.');
        }

        if (confirmarContrasena.value !== contrasena.value) {
            confirmarContrasena.setCustomValidity('Las contraseñas no coinciden.');
        }

        if (fechaNacimiento.value && !validarEdad(fechaNacimiento.value)) {
            fechaNacimiento.setCustomValidity('Debe ser mayor de 13 años.');
        }

        form.classList.add('was-validated');

        if (form.checkValidity()) {

            alert('Formulario enviado correctamente!');

            // esta funciòn permite limpiar el formulario despues de 2 segundos  
            showAlert();

            // revisar en consola los datos de envio formulario
            console.log('Datos del formulario:', {
                nombreCompleto: document.getElementById('nombreCompleto').value,
                nombreUsuario: document.getElementById('nombreUsuario').value,
                correo: document.getElementById('correo').value,
                fechaNacimiento: document.getElementById('fechaNacimiento').value,
                direccionDespacho: document.getElementById('direccionDespacho').value,
                contrasena: document.getElementById('contrasena').value
            });
            // cuando hice el limpiado automatico
            // posicionaba el form al principio
            scrollToTop();
        }
    });

    // Botón limpiar
    btnLimpiar.addEventListener('click', function () {
        form.reset();
        form.classList.remove('was-validated');

        const inputInvalidos = form.querySelectorAll('.is-invalid');
        inputInvalidos.forEach(input => {
            input.classList.remove('is-invalid');
        });

        // Limpiar validaciones personalizadas
        contrasena.setCustomValidity('');
        confirmarContrasena.setCustomValidity('');
        fechaNacimiento.setCustomValidity('');

    });

    function showAlert() {
        const alert = document.getElementById('alertSuccess');
        alert.classList.remove('d-none');
        alert.classList.add('fade', 'show'); // Animación de fade in

        setTimeout(() => {
            alert.classList.add('fade', 'hide');
            setTimeout(() => alert.classList.add('d-none'), 150); // Espera a que termine la animación
            btnLimpiar.click(); // limpiamos el formulario 
        }, 2000);

    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' //  scroll suave de pagina
        });
    }

});