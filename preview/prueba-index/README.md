# ULocker — Portal Web Institucional

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

Sitio web institucional y catálogo de soluciones de **ULocker**: almacenamiento inteligente y automatizado para turismo, empresas e industrias.

---

## 🚀 Demo en Vivo

Podés visitar el sitio oficial en:  
👉 **[ulocker.ar](https://ulocker.ar)**

---

## 📌 Contenido y Estructura del Portal

El proyecto cuenta con una arquitectura modular estática, sin dependencias externas pesadas, garantizando tiempos de carga casi instantáneos y alta compatibilidad en cualquier dispositivo.

### Páginas principales:
- **`index.html` (Portada / Portal Principal)**: Presentación corporativa, enlaces directos a las verticales de negocio, bloque de reserva de lockers, cómo funciona el servicio, tecnología nacional y modelo de franquicias/alianzas.
- **`ULocker_Travel.html` (Vertical Turismo)**: Landing page orientada a viajeros y turistas para guarda de equipaje 24/7 en puntos clave (Ushuaia), permitiendo recorrer la ciudad con libertad antes del check-in o después del check-out.
- **`ULocker_Industrial.html` (Vertical Empresas & Operaciones)**: Solución modular de guardado y trazabilidad para industrias, centros de trabajo y logística (gestión de herramientas, uniformes y pañol inteligente).

---

## 📂 Estructura del Repositorio

```text
portal_web/
├── css/
│   ├── styles.css           # Estilos del portal principal (Home)
│   └── solutions.css        # Estilos modulares compartidos entre Travel e Industrial
├── js/
│   ├── main.js              # Interactividad y accesibilidad del portal principal
│   └── solutions.js         # Interactividad, menú móvil y formularios de Travel e Industrial
├── img/
│   ├── logo.png             # Logotipo oficial de ULocker
│   ├── solution-travel.png  # Isotipo de la línea Travel
│   └── solution-industrial.png # Isotipo de la línea Industrial
├── index.html               # Página de inicio (Home)
├── ULocker_Travel.html      # Landing page Travel
├── ULocker_Industrial.html  # Landing page Industrial
├── .gitignore               # Archivos ignorados por Git
└── README.md                # Documentación del proyecto
```

---

## 🛠️ Tecnologías y Características Técnicas

- **HTML5 Semántico**: Estructura optimizada para accesibilidad y SEO (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- **CSS3 Moderno & Responsive**:
  - Variables CSS (`custom properties`) para tematización por vertical (`--orange`, `--navy`, `--accent`).
  - Grillas con **CSS Grid** y **Flexbox** adaptadas a móviles, tablets y escritorios.
  - Diseño *mobile-first* con menú hamburguesa desplegable y barra inferior de acción fija (*Bottom CTA*).
  - Soporte para accesibilidad y preferencias del usuario (`prefers-reduced-motion`, `focus-visible`).
- **JavaScript Vanilla (ES6+)**:
  - Navegación móvil accesible con atributos ARIA (`aria-expanded`, `aria-label`) y soporte de teclado (`Escape`).
  - Copiado inteligente al portapapeles (*Clipboard API*) para consultas y presupuestos.
  - Sin librerías ni frameworks externos: peso mínimo y máxima velocidad.
- **Iconografía SVG**: Íconos vectoriales mediante sprites SVG embebidos que evitan bloqueos de CORS al abrir de forma local.

---

## 💻 Cómo Ejecutar el Proyecto Localmente

No se requiere ningún gestor de paquetes (npm/yarn) ni configuración de base de datos.

### Opción 1: Apertura directa
Hacé doble clic en `index.html` o abrilo directamente en tu navegador web de preferencia:
```bash
open index.html # En macOS
```

### Opción 2: Con un servidor local sencillo
Si preferís servirlo mediante HTTP (recomendado):

**Con Python:**
```bash
# Python 3
python3 -m http.server 8000
```
Luego abrí `http://localhost:8000` en tu navegador.

**Con Node.js / npx:**
```bash
npx serve .
```

**Con VS Code:**
Hacé clic derecho en `index.html` y seleccioná **"Open with Live Server"**.

---

## 🌐 Despliegue (Deploy)

El proyecto está 100% listo para ser desplegado en plataformas estáticas gratuitas:

- **GitHub Pages**: Activá la rama `main` en la configuración del repositorio (`Settings > Pages`).
- **Vercel / Netlify / Cloudflare Pages**: Conectá el repositorio y el deploy se realizará en segundos sin necesidad de comando de *build*.

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consultá el archivo `LICENSE` para más detalles.

---

<p align="center">
  Desarrollado para <b>ULocker</b> · Ushuaia, Tierra del Fuego, Argentina 🇦🇷
</p>

