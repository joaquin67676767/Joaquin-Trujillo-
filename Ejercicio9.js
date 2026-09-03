function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    let cant = Number(cantArchivos);
    let tamano = Number(tamanoPromedioMB);
    let pesoTotalMB = cant * tamano;
    let pesoTotalKB = pesoTotalMB * 1024;
    return `Se descargarán ${cant} archivos con un peso total de ${pesoTotalKB} KB.`;
}

console.log(calcularEstadisticasDescarga("10", "1.5"));
