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

console.log(dibujarGraficoConsumo(3));
// █
// ██
// ███