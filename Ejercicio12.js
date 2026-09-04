// ==============================================================================
// Ejercicio 12: Procesamiento de Pago
// Consigna: Escribí una función llamada `procesarCompraMovil` que reciba `precioBase`
// y `descuentoPct`. Debe utilizar 3 funciones auxiliares cooperativas:
// 1. `aplicarDescuento` (Función Declarada): Retorna precio rebajado.
// 2. `sumarIva` (Expresión de Función): Retorna precio + 21% IVA.
// 3. `redondear` (Función Flecha): Retorna valor redondeado a 2 decimales.
// Encadenar la ejecución y retornar el precio final.
// ==============================================================================

function procesarCompraMovil(precioBase, descuentoPct) {
    function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }

    const sumarIva = function (precio) {
        return precio + (precio * 0.21);
    };

    const redondear = (valor) => Number(valor.toFixed(2));

    let conDescuento = aplicarDescuento(precioBase, descuentoPct);
    let conIva = sumarIva(conDescuento);
    return redondear(conIva);
}

// ¡Excelente! Aplicaste a la perfección los 3 tipos de funciones (declarada, expresión de función y función flecha) y el encadenamiento de cálculos. Te dejo cómo quedaría unificando en funciones flecha puras y composición directa:

const aplicarDescuento = (precio, desc) => precio * (1 - desc / 100);
const sumarIva = (precio) => precio * 1.21;
const redondear = (valor) => Number(valor.toFixed(2));

const procesarCompraMovilModerna = (precioBase, descuentoPct) => {
    return redondear(sumarIva(aplicarDescuento(precioBase, descuentoPct)));
};

console.log(procesarCompraMovil(100, 10));