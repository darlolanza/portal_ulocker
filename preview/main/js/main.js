/**
 * ULocker - Portal Web Responsive
 * Script de interactividad: menú móvil y navegación
 */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');

  if (toggle && menu) {
    const icon = toggle.querySelector('use');

    /**
     * Alterna la visibilidad y accesibilidad del menú móvil
     * @param {boolean} open
     */
    const setMenuOpen = (open) => {
      menu.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      if (icon) {
        icon.setAttribute('href', open ? '#i-x' : '#i-menu');
      }
    };

    // Botón de alternancia de menú
    toggle.addEventListener('click', () => {
      setMenuOpen(!menu.classList.contains('open'));
    });

    // Cerrar al hacer click en cualquier enlace dentro del menú móvil
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setMenuOpen(false));
    });

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menu.classList.contains('open')) {
        setMenuOpen(false);
      }
    });

    // Cerrar al hacer click fuera del menú y del botón toggle
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        setMenuOpen(false);
      }
    });
  }

  // Cerrar menú desplegable de navegación en desktop al seleccionar un elemento
  document.querySelectorAll('.nav-dropdown a').forEach((link) => {
    link.addEventListener('click', () => {
      const details = link.closest('details');
      if (details) {
        details.open = false;
      }
    });
  });
});

