// ==============================================================================
// Ejercicio 4: FizzBuzz
// Consigna: Escribir una función llamada `fizzBuzz` que reciba un número y retorne:
// - "fizz" si el número es múltiplo de 3.
// - "buzz" si el número es múltiplo de 5.
// - "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
// - Si no cumple ninguna, retornar el mismo número.
// ==============================================================================

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  } else if (num % 3 === 0) {
    return "fizz";
  } else if (num % 5 === 0) {
    return "buzz";
  } else {
    return num
  }
}

// ¡Impecable! Muy bien evaluada la condición combinada primero. Te dejo la estructura con variable auxiliar con valor por defecto y retorno único al final:

function fizzBuzz(num) {
    let resultado = num; // Valor por defecto si no cumple ninguna condición

    if (num % 3 === 0 && num % 5 === 0) {
        resultado = "fizzbuzz";
    } else if (num % 3 === 0) {
        resultado = "fizz";
    } else if (num % 5 === 0) {
        resultado = "buzz";
    }

    return resultado;
}

console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));
