function evaluarAccesoApp(edad, tienePermisoDocente, esInvitado) {
    if (esInvitado) {
        return false;
    }
    return edad >= 18 || tienePermisoDocente;
}

console.log(evaluarAccesoApp(16, true, false));  
console.log(evaluarAccesoApp(20, false, true));  