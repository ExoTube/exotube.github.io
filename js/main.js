/* ExoTube · JavaScript de la página (sin librerías) */

// --- Menú de navegación en móvil ---
const menuBoton = document.getElementById('menu-boton');
const nav = document.getElementById('nav');

menuBoton.addEventListener('click', () => {
    const abierto = nav.classList.toggle('nav--abierto');
    menuBoton.setAttribute('aria-expanded', String(abierto));
});

// Al tocar un enlace del menú, se cierra.
nav.querySelectorAll('a').forEach((enlace) => {
    enlace.addEventListener('click', () => {
        nav.classList.remove('nav--abierto');
        menuBoton.setAttribute('aria-expanded', 'false');
    });
});

// --- Aparición progresiva de las tarjetas al bajar ---
// IntersectionObserver avisa cuando un elemento entra en pantalla.
const observador = new IntersectionObserver(
    (entradas) => {
        entradas.forEach((entrada) => {
            if (!entrada.isIntersecting) return;
            entrada.target.classList.add('revelar--visible');
            observador.unobserve(entrada.target); // una sola vez por elemento
        });
    },
    { threshold: 0.15 },
);

document.querySelectorAll('.revelar').forEach((elemento) => observador.observe(elemento));

// --- Año actual en el pie ---
document.getElementById('anio').textContent = String(new Date().getFullYear());
