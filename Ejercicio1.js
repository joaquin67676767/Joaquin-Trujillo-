// ==============================================================================
// Ejercicio 1: Contraseña Válida
// Consigna: Escribir una función llamada `contrasenaValida` que reciba un string
// y retorne `true` si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
// De lo contrario debe retornar `false`.
// ==============================================================================

function contrasenaValida(str) {
    let retorno = false;
    if (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9") {
        retorno = true
    }
    return retorno
}

// Muy bien, Joaquín. Usaste la variable auxiliar de retorno único. Te dejo otra manera de hacerla evaluando directamente la condición booleana:

function contrasenaValida(str) {
    return (str === "2Fj(jjbFsuj" || str === "eoZiugBf&g9");
}

console.log(contrasenaValida("2Fj(jjbFsuj"));
console.log(contrasenaValida("eoZiugBf&g9"));
console.log(contrasenaValida("hola"));
console.log(contrasenaValida(""));    