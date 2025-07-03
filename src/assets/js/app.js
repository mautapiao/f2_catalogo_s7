
document.getElementById("anio-actual").textContent = new Date().getFullYear();

function mostrarCategoria(categoryId, event) {
    // ocultar todas las secciones
    const sections = document.querySelectorAll('.categoria-seccion');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    //mostrar la sección seleccionada
    document.getElementById(categoryId).classList.add('active');

    // actualizar botones activos
    const buttons = document.querySelectorAll('.categoria-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // activar el botón clickeado
    event.target.classList.add('active');
}
