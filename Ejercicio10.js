// ==============================================================================
// Ejercicio 10: Acceso a la Aplicación Escolar
// Consigna: Escribí una función llamada `evaluarAccesoApp` que reciba tres
// parámetros: `edad` (Number), `tienePermisoDocente` (Boolean) y `esInvitado` (Boolean).
// Retornar true si puede acceder o false en caso contrario:
// 1. Acceso permitido si edad >= 18 O tienePermisoDocente es true.
// 2. NUNCA se permite el acceso si esInvitado es true.
// ==============================================================================

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }
    return edad >= 18 || tienePermisoDocente;
}

// Muy bien razonadas las condiciones. Para evitar múltiples returns dispersos, te dejo cómo estructurarla con una variable auxiliar de retorno con valor por defecto:

function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    let accesoPermitido = false; // Valor por defecto

    if (!esInvitado && (edad >= 18 || tienePermisoDocente)) {
        accesoPermitido = true;
    }

    return accesoPermitido;
}

console.log(evaluarAccesoApp(16, true, false));
console.log(evaluarAccesoApp(20, false, true));