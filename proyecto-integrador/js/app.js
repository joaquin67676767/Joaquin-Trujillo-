import { descargarProductosTech } from "./api.js";
import { crearTarjetaProductoHTML, filtrarProductos, calcularTotalCatalogo } from "./ui.js";
import { obtenerFavoritos, esProductoFavorito, alternarFavorito } from "./storage.js";

const btnTema = document.querySelector("#btn-tema");
const iconoTema = document.querySelector("#icono-tema");

const btnVerFavoritos = document.querySelector("#btn-ver-favoritos");
const badgeFavoritos = document.querySelector("#badge-favoritos-contador");

const inputBuscador = document.querySelector("#input-buscador");
const botonesFiltro = document.querySelectorAll(".btn-filtro");

const contenedorCatalogo = document.querySelector("#contenedor-catalogo");

const totalProductosSpan = document.querySelector("#total-productos-visibles");
const totalPrecioSpan = document.querySelector("#total-precio-acumulado");

const estadoLoading = document.querySelector("#estado-loading");
const estadoError = document.querySelector("#estado-error");
const btnReintentar = document.querySelector("#btn-reintentar");
const sinResultadosBox = document.querySelector("#sin-resultados");

let productosEnMemoria = [];
let categoriaActual = "todas";

function actualizarBadgeFavoritos() {
    const favoritos = obtenerFavoritos();
    badgeFavoritos.textContent = favoritos.length;
}

function aplicarFiltros() {
    const texto = inputBuscador.value;
    const favoritos = obtenerFavoritos();
    const productosFiltrados = filtrarProductos(productosEnMemoria, texto, categoriaActual, favoritos);

    totalProductosSpan.textContent = productosFiltrados.length;
    const total = calcularTotalCatalogo(productosFiltrados);
    totalPrecioSpan.textContent = "$" + total.toFixed(2);

    if (productosFiltrados.length === 0) {
        contenedorCatalogo.innerHTML = "";
        sinResultadosBox.classList.remove("oculto");
    } else {
        sinResultadosBox.classList.add("oculto");

        let htmlCompleto = "";
        for (let i = 0; i < productosFiltrados.length; i++) {
            const producto = productosFiltrados[i];
            const esFavorito = esProductoFavorito(producto.id);
            htmlCompleto = htmlCompleto + crearTarjetaProductoHTML(producto, esFavorito);
        }
        contenedorCatalogo.innerHTML = htmlCompleto;
    }
}

function activarFiltroCategoria(categoria) {
    categoriaActual = categoria;

    botonesFiltro.forEach(function (boton) {
        if (boton.dataset.categoria === categoria) {
            boton.classList.add("activo");
        } else {
            boton.classList.remove("activo");
        }
    });

    aplicarFiltros();
}

async function cargarCatalogo() {
    estadoLoading.classList.remove("oculto");
    estadoError.classList.add("oculto");
    contenedorCatalogo.innerHTML = "";

    try {
        productosEnMemoria = await descargarProductosTech();
        estadoLoading.classList.add("oculto");
        aplicarFiltros();
    } catch (error) {
        console.error("Error al cargar el catálogo:", error.message);
        estadoLoading.classList.add("oculto");
        estadoError.classList.remove("oculto");
    }
}

btnTema.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        iconoTema.textContent = "☀️";
    } else {
        iconoTema.textContent = "🌙";
    }
});

btnVerFavoritos.addEventListener("click", function () {
    activarFiltroCategoria("favoritos");
});

botonesFiltro.forEach(function (boton) {
    boton.addEventListener("click", function () {
        activarFiltroCategoria(boton.dataset.categoria);
    });
});

inputBuscador.addEventListener("input", function () {
    aplicarFiltros();
});

btnReintentar.addEventListener("click", function () {
    cargarCatalogo();
});

contenedorCatalogo.addEventListener("click", function (evento) {
    const boton = evento.target.closest(".btn-fav-card");
    if (!boton) {
        return;
    }

    const id = Number(boton.dataset.id);

    alternarFavorito(id);

    actualizarBadgeFavoritos();
    aplicarFiltros();
});

actualizarBadgeFavoritos();
cargarCatalogo();