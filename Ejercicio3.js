// ==============================================================================
// Ejercicio 3: IMC (Índice de Masa Corporal)
// Consigna: El índice de masa corporal (IMC o BMI) se calcula con la fórmula:
// peso / altura^2. Escribí una función llamada `bmi` que reciba `peso` y `altura`,
// y retorne un string de acuerdo a las siguientes posibilidades:
// - "Bajo de peso" si BMI < 18.5
// - "Normal" si está entre 18.5 y 24.9
// - "Sobrepeso" si está entre 25 y 29.9
// - "Obeso" si es igual o mayor a 30
// ==============================================================================

function bmi(peso, altura) {
    const resultado = peso / (altura ** 2);

    if (resultado < 18.5) {
        return "Bajo de peso";
    } else if (resultado < 25) {
        return "Normal";
    } else if (resultado < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// Muy buen cálculo del índice y uso de const. Para que el código quede más estructurado y predecible, acostumbranse a usar una variable auxiliar para guardar el resultado y hacer un único return al final de la función:

function bmi(peso, altura) {
    const indice = peso / (altura ** 2);
    let diagnostico = "Obeso";

    if (indice < 18.5) {
        diagnostico = "Bajo de peso";
    } else if (indice < 25) {
        diagnostico = "Normal";
    } else if (indice < 30) {
        diagnostico = "Sobrepeso";
    }

    return diagnostico;
}

console.log(bmi(65, 1.8));
console.log(bmi(72, 1.6));
console.log(bmi(52, 1.75));
console.log(bmi(135, 1.7));