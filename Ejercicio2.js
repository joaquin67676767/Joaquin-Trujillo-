function calcularImpuestos(edad, ingresos) {
   if (edad>=18 && ingresos >=1000){
         return ingresos *0.4;
       }else{
         return 0;
       }
   
}        

console.log(calcularImpuestos(18, 1000));  
console.log(calcularImpuestos(40, 10000)); 
console.log(calcularImpuestos(17, 5000));  
console.log(calcularImpuestos(30, 500));