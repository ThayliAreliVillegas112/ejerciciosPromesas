// Ejercicio 1: Promesas Encadenadas
// Crea una función que realice las siguientes tareas:

// Inicia una promesa que se resuelva después de 2 segundos con un número aleatorio entre 1 y 100.
// Luego, toma ese número y crea una segunda promesa que se resuelva después de 3 segundos con el 
// resultado de elevar ese número al cuadrado.
// Finalmente, toma el resultado de la segunda promesa y crea una tercera promesa que se resuelva 
// después de 1 segundo con la raíz cuadrada del número resultante


new Promise(function(resolve, reject){
    let random = Math.floor(Math.random() * 101); 
    setTimeout(() => {
        console.log("Número ramdom: ",random); 
        resolve(random);
    }, 2000);
}).then(function(result){
    setTimeout(()=>{
        console.log("Número al cuadrado: ",result*result)
    },3000) 
    return result;
}).then(function(result){
    return setTimeout(() => {
        console.log("Raíz cuadrada: ", Math.sqrt(result));
    }, 1000);
}).catch(error=>{
    console.log("este es un error: ",error);
})