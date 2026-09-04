// ==============================================================================
// Ejercicio 9: Cálculo de Espacio de Almacenamiento
// Consigna: Escribí una función llamada `calcularEstadisticasDescarga` que reciba
// dos parámetros: `cantArchivos` (String) y `tamanoPromedioMB` (String).
// 1. Convertir ambos parámetros a valores numéricos (Number).
// 2. Calcular el tamaño total (cantArchivos * tamanoPromedioMB).
// 3. Convertir peso total a KB (1 MB = 1024 KB).
// 4. Retornar: "Se descargarán [cantArchivos] archivos con un peso total de [pesoTotalKB] KB."
// ==============================================================================

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    let cant = Number(cantArchivos);
    let tamano = Number(tamanoPromedioMB);
    let pesoTotalMB = cant * tamano;
    let pesoTotalKB = pesoTotalMB * 1024;
    return `Se descargarán ${cant} archivos con un peso total de ${pesoTotalKB} KB.`;
}

// Impecable el casteo explícito con Number() y el uso de Template Literals (${}). Como buena práctica de inmutabilidad y legibilidad, evitamos reasignar los parámetros declarando nuevas constantes:

// ⚠️ Aclaración IMPORTANTE: Si bien no era el foco de este ejercicio, siempre debemos tener cuidado con los CASTEOS (conversión explícita de 'string' a 'Number'). Si por error la función llega a recibir un texto no numérico como "elProfeNoSabeNada", Number("elProfeNoSabeNada") devolverá NaN (Not a Number) y romperá todos los cálculos matemáticos posteriores. En desarrollo profesional siempre validamos que el dato sea numérico antes de operar.

function calcularEstadisticasDescarga(cantArchivos, tamanoPromedioMB) {
    const archivos = Number(cantArchivos);
    const tamanoMB = Number(tamanoPromedioMB);
    const pesoTotalKB = archivos * tamanoMB * 1024;

    return `Se descargarán ${archivos} archivos con un peso total de ${pesoTotalKB} KB.`;
}

console.log(calcularEstadisticasDescarga("10", "1.5"));
