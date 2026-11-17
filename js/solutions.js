/**
 * ULocker - Soluciones (Travel & Industrial)
 * Script interactivo: menú responsive y formulario de consulta
 */

document.addEventListener('DOMContentLoaded', () => {
  // Manejo de menú móvil
  const toggle = document.querySelector('[data-menu-button]');
  const nav = document.querySelector('[data-mobile-nav]');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const opened = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(opened));
      toggle.setAttribute('aria-label', opened ? 'Cerrar menú' : 'Abrir menú');
      toggle.innerHTML = opened
        ? '<svg class="ico" aria-hidden="true"><use href="#i-close"></use></svg>'
        : '<svg class="ico" aria-hidden="true"><use href="#i-menu"></use></svg>';
    });

    nav.querySelectorAll('a').forEach((anchor) => {
      anchor.addEventListener('click', () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Abrir menú');
        toggle.innerHTML = '<svg class="ico" aria-hidden="true"><use href="#i-menu"></use></svg>';
      });
    });
  }

  // Manejo de formulario de consulta
  const form = document.querySelector('[data-consult-form]');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const value = (key) => String(data.get(key) || '').trim();

      const isTravel = document.body.classList.contains('travel');
      const subject = isTravel ? 'CONSULTA — ULOCKER TRAVEL' : 'CONSULTA — ULOCKER INDUSTRIAL';

      const message = [
        subject,
        'Empresa / organización: ' + value('empresa'),
        'Nombre: ' + value('nombre'),
        'Email de contacto: ' + value('email'),
        'Ámbito de aplicación: ' + value('ambito'),
        'Necesidad: ' + value('necesidad'),
        '',
        'Consulta preparada desde el portal web.'
      ].join('\n');

      const status = document.querySelector('[data-status]');

      try {
        await navigator.clipboard.writeText(message);
        if (status) {
          status.textContent = 'Consulta copiada. Podés pegarla en tu correo o mensaje.';
        }
      } catch (error) {
        const textarea = document.createElement('textarea');
        textarea.value = message;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        let copied = false;
        try {
          copied = document.execCommand('copy');
        } catch (e) {}
        textarea.remove();

        if (status) {
          status.textContent = copied
            ? 'Consulta copiada. Podés pegarla en tu correo o mensaje.'
            : 'Tu navegador no permitió copiar. Seleccioná el texto de los campos manualmente.';
        }
      }
    });
  }
});

