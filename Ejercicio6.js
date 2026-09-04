// ==============================================================================
// Ejercicio 6: Imprimir un Arreglo
// Consigna: Escribir una función llamada `imprimirArreglo` que reciba un arreglo
// e imprima cada uno de sus elementos en una línea aparte utilizando la consola.
// ==============================================================================

function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// Perfecto el bucle clásico indexado. En JavaScript moderno (ES6+) solemos usar métodos de orden superior como .forEach() o bucles for...of que hacen el código más limpio y declarativo. En la clase de hoy vamos a hablar más sobre estos métodos:

function imprimirArreglo(arreglo) {
    arreglo.forEach(elemento => console.log(elemento));
}

imprimirArreglo([1, "Hola", 2, "Mundo"]);