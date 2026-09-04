// ==============================================================================
// Ejercicio 2: Calcular Impuestos
// Consigna: Escribir una función llamada `calcularImpuestos` que reciba dos
// argumentos numéricos: `edad` e `ingresos`. Si la `edad` es igual o mayor a 18
// y los `ingresos` son iguales o mayores a 1000 debe retornar el valor de los
// `ingresos * 0.4` (el 40%). De lo contrario debe retornar `0`.
// ==============================================================================

function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    return ingresos * 0.4;
  } else {
    return 0;
  }

}

// Muy bien resuelto. Para acostumbrarnos a la estructura limpia de variable auxiliar con valor por defecto y retorno único al final:

function calcularImpuestos(edad, ingresos) {
    let impuesto = 0; // Valor por defecto

    if (edad >= 18 && ingresos >= 1000) {
        impuesto = ingresos * 0.4;
    }

    return impuesto;
}

console.log(calcularImpuestos(18, 1000));
console.log(calcularImpuestos(40, 10000));
console.log(calcularImpuestos(17, 5000));
console.log(calcularImpuestos(30, 500));