/* ==========================================================================
   MÓDULO: api.js - Consumo de Servicios Externos (Fetch & Async/Await)
   ========================================================================== */

export async function descargarProductosTech() {
    const urlSmartphones = "https://dummyjson.com/products/category/smartphones";
    const urlLaptops = "https://dummyjson.com/products/category/laptops";
    const urlAccesorios = "https://dummyjson.com/products/category/mobile-accessories";

    const [resSmartphones, resLaptops, resAccesorios] = await Promise.all([
        fetch(urlSmartphones),
        fetch(urlLaptops),
        fetch(urlAccesorios)
    ]);

    const datosSmartphones = await resSmartphones.json();
    const datosLaptops = await resLaptops.json();
    const datosAccesorios = await resAccesorios.json();

    const todosLosProductos = [datosSmartphones, datosLaptops, datosAccesorios].flatMap(dato => dato.products);

    return todosLosProductos;
}
