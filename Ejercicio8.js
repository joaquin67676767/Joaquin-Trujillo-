// ==============================================================================
// Ejercicio 8: Duplicar Elementos de un Arreglo
// Consigna: Escribir una función llamada `duplicar` que reciba un arreglo de
// números y retorne un nuevo arreglo donde cada número esté multiplicado por dos (2).
// ==============================================================================

function duplicar(arreglo) {
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(arreglo[i] * 2);
    }
    return nuevoArreglo;
}

// ¡Excelente que hayas creado un nuevo arreglo sin mutar el original! Esta transformación 1 a 1 de datos es el caso de uso perfecto para la función de orden superior .map():

function duplicar(arreglo) {
    return arreglo.map(num => num * 2);
}

console.log(duplicar([1, 2, 3]));
console.log(duplicar([]));