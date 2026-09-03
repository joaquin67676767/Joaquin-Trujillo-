function contrasenaValida(str) {
    let retorno = false;
    if (str === "2Fj(jjbFsuj" || str==="eoZiugBf&g9"){
        retorno = true
    }
  return retorno
}

console.log(contrasenaValida("2Fj(jjbFsuj")); 
console.log(contrasenaValida("eoZiugBf&g9")); 
console.log(contrasenaValida("hola"));        
console.log(contrasenaValida(""));    