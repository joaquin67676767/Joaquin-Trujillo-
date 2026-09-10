# TechStore Móvil - Proyecto Integrador

Catálogo de productos tecnológicos que consume la API pública **DummyJSON**, con buscador, filtros por categoría, favoritos y modo oscuro.

## Estructura del proyecto

```
proyecto-integrador/
├── index.html
├── styles.css
└── js/
    ├── api.js
    ├── ui.js
    └── app.js
```

## Herramientas y conceptos utilizados

### `api.js` — Trae los productos de internet
Pide datos a 3 categorías de la API **DummyJSON** (celulares, laptops, accesorios) al mismo tiempo con `fetch()` y `Promise.all()`, en vez de pedir uno por uno. Cada respuesta se convierte de formato "crudo" a JSON con `.json()`. Como quedan 3 listas separadas (una por categoría), se usa `.flatMap()` para juntarlas en una sola lista final de productos.

**Herramientas:** `fetch`, `async/await`, `Promise.all()`, `.json()`, `.flatMap()`, destructuring de arrays.

### `ui.js` — Transforma datos en HTML (sin tocar la pantalla)
Tiene 3 funciones "puras" (reciben datos, devuelven datos, no dependen de la página):
- `crearTarjetaProductoHTML`: arma el HTML de una tarjeta de producto usando template literals.
- `filtrarProductos`: usa `.filter()` para quedarse solo con los productos que coinciden con el texto buscado y la categoría elegida.
- `calcularTotalCatalogo`: usa `.reduce()` para sumar el precio de todos los productos filtrados.

**Herramientas:** template literals, `.filter()`, `.reduce()`, `.toLowerCase()`, `.includes()`.

### `app.js` — Conecta todo con la pantalla (el orquestador)
Es el único archivo que toca el DOM directamente:
- Selecciona los botones/inputs del HTML con `querySelector`.
- Escucha eventos (`addEventListener`) de clicks y escritura: cambiar tema, elegir categoría, buscar, marcar favoritos.
- Llama a `descargarProductosTech()` (de `api.js`) al iniciar la app, con manejo de errores (`try/catch`) para mostrar loading o error.
- Cada vez que algo cambia, llama a `filtrarProductos()` y `calcularTotalCatalogo()` (de `ui.js`) y actualiza el catálogo con `innerHTML`.
- Los favoritos se guardan en un array simple en memoria (se pierden al recargar la página).
- Usa delegación de eventos (`.closest()`) para detectar el click en el botón de favorito de cualquier tarjeta, sin poner un listener por cada una.

**Herramientas:** `querySelector`/`querySelectorAll`, `addEventListener`, `classList`, `try/catch`, `import`/`export` (módulos ES6), delegación de eventos.

## Conceptos clave

- **DummyJSON**: API pública y gratuita para practicar, que simula ser una tienda con productos, usuarios, carritos, etc.
- **JSON**: formato de texto para representar datos (parecido a un objeto de JavaScript), que usan casi todas las APIs para enviar información.
- **DOM**: la representación "viva" del HTML que arma el navegador, y que JavaScript puede leer y modificar con métodos como `querySelector`.
- **innerHTML**: propiedad que permite leer o reemplazar todo el HTML que hay adentro de un elemento del DOM.

## Cómo ejecutarlo

Este proyecto usa módulos ES6 (`import`/`export`), por lo que **no funciona abriendo el `index.html` con doble clic**. Hay que servirlo con un servidor local:

1. Abrir la carpeta del proyecto en VS Code.
2. Instalar la extensión **Live Server** (de Ritwick Dey).
3. Clic derecho sobre `index.html` → **Open with Live Server**.
