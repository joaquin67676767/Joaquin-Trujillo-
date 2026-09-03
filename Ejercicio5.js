function sumarRango(numeroInicial, numeroFinal) {
    let suma = 0;

    for (let i = numeroInicial; i <= numeroFinal; i++) {
        suma = suma + i;
    }

    return suma;
}

console.log(sumarRango(0, 10));
console.log(sumarRango(12, 14));
console.log(sumarRango(5, 5)); 