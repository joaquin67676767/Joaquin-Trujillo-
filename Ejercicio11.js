// ==============================================================================
// Ejercicio 11: Simulación de Test de Red
// Consigna: Escribí una función llamada `simularReportePing` que reciba
// `intentosMaximos` (Number):
// 1. Ejecutar bucle for desde 1 hasta intentosMaximos.
// 2. Si el intento es múltiplo de 5: imprimir "Error crítico de hardware en intento [intento]" y salir con break.
// 3. Si el intento es par: imprimir "Intento [intento]: Exitoso".
// 4. Si el intento es impar: imprimir "Intento [intento]: Fallido".
// ==============================================================================

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {
        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        } else if (intento % 2 === 0) {
            console.log(`Intento ${intento}: Exitoso`);
        } else {
            console.log(`Intento ${intento}: Fallido`);
        }
    }
}

// Excelente uso de 'break'. Te dejo cómo estructurar el estado de cada intento usando una variable auxiliar con valor por defecto:

function simularReportePing(intentosMaximos) {
    for (let intento = 1; intento <= intentosMaximos; intento++) {
        if (intento % 5 === 0) {
            console.log(`Error crítico de hardware en intento ${intento}`);
            break;
        }

        let estado = "Fallido"; // Valor por defecto (impar)
        if (intento % 2 === 0) {
            estado = "Exitoso";
        }

        console.log(`Intento ${intento}: ${estado}`);
    }
}

simularReportePing(8);