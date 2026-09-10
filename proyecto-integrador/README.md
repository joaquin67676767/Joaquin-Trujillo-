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

**Herramientas:** `fetch`, `async/await`, `Promise.all()`, `.json()`, `.flatMap()`.

### `ui.js` — Transforma datos en HTML (sin tocar la pantalla)
Tiene 3 funciones "puras" (reciben datos, devuelven datos, no dependen de la página):
- `crearTarjetaProductoHTML`: arma el HTML de una tarjeta de producto usando template literals.
- `filtrarProductos`: usa `.filter()` para quedarse solo con los productos que coinciden con el texto buscado y la categoría elegida.
- `calcularTotalCatalogo`: usa `.reduce()` para sumar el precio de todos los productos filtrados.

**Herramientas:** `.filter()`, `.reduce()`, `.toLowerCase()`, `.includes()`.

### `app.js` — Conecta todo con la pantalla (el orquestador)
Es el único archivo que toca el DOM directamente:
- Selecciona los botones/inputs del HTML con `querySelector`.
- Escucha eventos (`addEventListener`) de clicks y escritura: cambiar tema, elegir categoría, buscar, marcar favoritos.
- Llama a `descargarProductosTech()` (de `api.js`) al iniciar la app, con manejo de errores (`try/catch`) para mostrar loading o error.
- Cada vez que algo cambia, llama a `filtrarProductos()` y `calcularTotalCatalogo()` (de `ui.js`) y actualiza el catálogo con `innerHTML`.
- Los favoritos se guardan en un array simple en memoria (se pierden al recargar la página porque no hice el localStorage).
- Usa delegación de eventos (`.closest()`) para detectar el click en el botón de favorito de cualquier tarjeta, sin poner un listener por cada una.

**Herramientas:** `querySelector`/`querySelectorAll`, `addEventListener`, `classList`, `try/catch`, `import`/`export`.

### `Profe`
El readme esta bastante apoyado por un boceto con IA que hice como para guiarme en que poner y podes expresarle mejor el trabajo. Despues el trabajo si tiene algunas partes con IA en algunas partes que me trabe como para ayudarme con preguntas que tenia y un conocido que tengo que sabe algo de JavaScript. 