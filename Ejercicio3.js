function bmi(peso, altura) {
    const resultado = peso / (altura ** 2);

    if (resultado < 18.5) {
        return "Bajo de peso";
    } else if (resultado < 25) {
        return "Normal";
    } else if (resultado < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
console.log(bmi(65, 1.8))  
console.log(bmi(72, 1.6))  
console.log(bmi(52, 1.75))  
console.log(bmi(135, 1.7)) 