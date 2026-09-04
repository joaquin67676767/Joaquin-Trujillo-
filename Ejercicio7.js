// ==============================================================================
// Ejercicio 7: Número de Caracteres
// Consigna: Escribir una función llamada `numeroDeCaracteres` que reciba un string
// y un carácter (un string de longitud 1). La función debe retornar el número de
// veces que aparece dicho carácter en el string.
// ==============================================================================

function numeroDeCaracteres(str, caracter) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            contador++;
        }
    }
    return contador;
}

// Muy bien recorrido el string como un array de caracteres y el acumulador. Te dejo dos alternativas muy utilizadas en JS moderno:
// Opción A: Separar por el caracter buscado con .split()
function numeroDeCaracteresA(str, caracter) {
    return str.split(caracter).length - 1;
}

// Opción B: Convertir a array con spread [...] y filtrar con .filter()
const numeroDeCaracteresB = (str, caracter) => [...str].filter(c => c === caracter).length;

// Tanto la opción A, como la B son cosas que vamos a ver en la clase de hoy

console.log(numeroDeCaracteres("Hola Mundo", "o"));
console.log(numeroDeCaracteres("MMMMM", "m"));
console.log(numeroDeCaracteres("eeee", "e"));