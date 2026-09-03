function procesarCompraMovil(precioBase, descuentoPct) {
    function aplicarDescuento(precio, descuento) {
        return precio - (precio * descuento / 100);
    }

    const sumarIva = function(precio) {
        return precio + (precio * 0.21);
    };

    const redondear = (valor) => Number(valor.toFixed(2));

    let conDescuento = aplicarDescuento(precioBase, descuentoPct);
    let conIva = sumarIva(conDescuento);
    return redondear(conIva);
}

console.log(procesarCompraMovil(100, 10)); 