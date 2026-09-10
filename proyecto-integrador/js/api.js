export async function descargarProductosTech() {
    const urlSmartphones = "https://dummyjson.com/products/category/smartphones";
    const urlLaptops = "https://dummyjson.com/products/category/laptops";
    const urlAccesorios = "https://dummyjson.com/products/category/mobile-accessories";

    const [resSmartphones, resLaptops, resAccesorios] = await Promise.all([
        fetch(urlSmartphones, { signal: AbortSignal.timeout(8000) }),
        fetch(urlLaptops, { signal: AbortSignal.timeout(8000) }),
        fetch(urlAccesorios, { signal: AbortSignal.timeout(8000) })
    ]);

    if (resSmartphones.ok !== true || resLaptops.ok !== true || resAccesorios.ok !== true) {
        throw new Error("Alguna de las categorías no respondió correctamente");
    }

    const datosSmartphones = await resSmartphones.json();
    const datosLaptops = await resLaptops.json();
    const datosAccesorios = await resAccesorios.json();

    const todosLosProductos = [datosSmartphones, datosLaptops, datosAccesorios].flatMap(dato => dato.products);

    return todosLosProductos;
}
