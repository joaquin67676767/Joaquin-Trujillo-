// ==============================================================================
// Ejercicio 5: Sumar Rango de Números
// Consigna: Escribir una función llamada `sumarRango` que reciba dos argumentos:
// `numeroInicial` y `numeroFinal`. La función debe retornar la suma de todos los
// números enteros dentro de ese rango (incluyendo los extremos).
// ==============================================================================

function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma = suma + i;
    }

    return suma;
}

// Excelente lógica con el bucle for y el acumulador. Acordate que podés abreviar 'suma = suma + i' como 'suma += i'. Te dejo una alternativa matemática usando la fórmula de Gauss para rangos consecutivos (aclaro, no es un método ni que yo recuerde en la práctica, pero está bueno conocerla):

function sumarRango(numeroInicial, numeroFinal) {
    const cantidad = numeroFinal - numeroInicial + 1;
    return (cantidad * (numeroInicial + numeroFinal)) / 2;
}

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5));