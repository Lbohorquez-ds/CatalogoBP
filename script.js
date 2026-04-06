// Manejo del Menú Lateral
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('activo');
});

// Función para abrir PDF
function abrirPDF(url) {
    // Cerramos el menú al elegir un catálogo
    menu.classList.remove('activo');

    // DETECCIÓN DE MÓVIL: Si la pantalla es menor a 768px
    if (window.innerWidth < 768) {
        // En celulares, abrimos el PDF en una pestaña nueva.
        // Esto permite ver TODAS las páginas y usar el zoom nativo del dedo.
        window.open(url, '_blank');
    } else {
        // En PC, usamos el visor estético que ya tenías
        const visor = document.getElementById('visor');
        const frame = document.getElementById('pdfFrame');
        
        // El parámetro "#view=FitW" hace que el PDF se ajuste al ancho del cuadro
        frame.src = url + "#view=FitW";
        
        visor.style.display = 'flex';
        // Evitamos que la web de atrás se mueva mientras vemos el catálogo
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el visor
function cerrarPDF() {
    const visor = document.getElementById('visor');
    const frame = document.getElementById('pdfFrame');
    
    visor.style.display = 'none';
    frame.src = ""; // Limpia el archivo para que no siga cargando
    document.body.style.overflow = 'auto'; // Devuelve el scroll a la web
}

// Cerrar menú si se hace clic fuera (opcional, mejora UX)
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.remove('activo');
    }
});