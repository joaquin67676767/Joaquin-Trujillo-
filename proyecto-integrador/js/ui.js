/* ==========================================================================
   MÓDULO: ui.js - Renderizado Visual y Métricas del Catálogo
   ========================================================================== */

export function crearTarjetaProductoHTML(producto, esFavorito) {
    const id = producto.id;
    const titulo = producto.title;
    const precio = producto.price;
    const categoria = producto.category;
    const imagen = producto.thumbnail;
    const stock = producto.stock;

    let icono = "☆";
    if (esFavorito) {
        icono = "⭐";
    }

    const html = `
        <article class="tarjeta-producto" data-id="${id}">
            <div class="tarjeta-img-wrap">
                <img src="${imagen}" alt="${titulo}" class="tarjeta-img">
                <span class="badge-categoria">${categoria}</span>
                <button class="btn-fav-card" data-id="${id}">${icono}</button>
            </div>
            <div class="tarjeta-cuerpo">
                <h3 class="tarjeta-titulo">${titulo}</h3>
                <span class="tarjeta-precio">$${precio}</span>
                <span class="tarjeta-stock">Stock: ${stock}</span>
            </div>
        </article>
    `;

    return html;
}

export function filtrarProductos(listaProductos, textoBuscado, categoriaElegida, listaFavoritos) {
    const productosFiltrados = listaProductos.filter(function (producto) {
        const tituloEnMinuscula = producto.title.toLowerCase();
        const textoEnMinuscula = textoBuscado.toLowerCase();
        const coincideTexto = tituloEnMinuscula.includes(textoEnMinuscula);

        let coincideCategoria = false;

        if (categoriaElegida === "todas") {
            coincideCategoria = true;
        } else if (categoriaElegida === "favoritos") {
            coincideCategoria = listaFavoritos.includes(producto.id);
        } else if (producto.category === categoriaElegida) {
            coincideCategoria = true;
        }

        return coincideTexto && coincideCategoria;
    });

    return productosFiltrados;
}

export function calcularTotalCatalogo(listaProductos) {
    const total = listaProductos.reduce(function (acumulado, producto) {
        return acumulado + producto.price;
    }, 0);

    return total;
}
