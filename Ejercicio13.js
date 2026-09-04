// ==============================================================================
// Ejercicio 13: Gráfico de Consumo de Memoria
// Consigna: Escribí una función llamada `dibujarGraficoConsumo` que reciba `pasos`
// (Number). Construir un string acumulando bloques '█' usando bucles anidados.
// Cada fila tiene bloques equivalentes al paso actual y termina con '\n'.
// Retornar el string del gráfico final.
// ==============================================================================

function dibujarGraficoConsumo(pasos) {
    let grafico = "";
    for (let fila = 1; fila <= pasos; fila++) {
        for (let bloque = 1; bloque <= fila; bloque++) {
            grafico += "█";
        }
        grafico += "\n";
    }
    return grafico;
}

// Muy buen razonamiento con los bucles anidados. Te dejo una alternativa moderna usando el método nativo de strings '.repeat()', que simplifica la lógica evitando el segundo bucle(Aclaro nuevamente, métodos no dados en la primer clase de JS, hoy vamos a hablar de este tema):

function dibujarGraficoConsumoModerno(pasos) {
    let grafico = "";
    for (let fila = 1; fila <= pasos; fila++) {
        grafico += "█".repeat(fila) + "\n";
    }
    return grafico;
}

console.log(dibujarGraficoConsumo(3));