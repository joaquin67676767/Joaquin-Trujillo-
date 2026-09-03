function calcularTarifa(tipoVehiculo, hora, esFeriado) {
    const tarifas = {
        moto: 150,
        auto: 300,
        camion: 600
    };

    let tipo = tipoVehiculo.toLowerCase();

    if (!tarifas.hasOwnProperty(tipo)) {
        console.log(`Advertencia: tipo de vehículo "${tipoVehiculo}" no válido.`);
        return 0;
    }

    let tarifaBase = tarifas[tipo];
    let esHoraPico = (hora >= 8 && hora <= 10) || (hora >= 17 && hora <= 19);

    if (esHoraPico && !esFeriado) {
        return tarifaBase * 1.3;
    }

    return tarifaBase;
}

function simularFilaCabina(cantidadVehiculos) {
    const tipos = ["moto", "auto", "camion"];
    let totalRecaudado = 0;

    for (let i = 1; i <= cantidadVehiculos; i++) {
        let tipo = tipos[Math.floor(Math.random() * tipos.length)];
        let hora = Math.floor(Math.random() * 24);
        let feriado = Math.random() < 0.5;

        let tarifa = calcularTarifa(tipo, hora, feriado);
        totalRecaudado += tarifa;

        console.log(`[Intento ${i}] Vehículo: ${tipo} | Hora: ${hora} | Feriado: ${feriado} | Tarifa cobrada: $${tarifa}`);
    }

    return totalRecaudado;
}

// Pruebas manuales
console.log(calcularTarifa("moto", 9, false));    
console.log(calcularTarifa("auto", 18, true));    
console.log(calcularTarifa("camion", 12, false)); 