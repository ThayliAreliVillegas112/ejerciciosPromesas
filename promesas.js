let result= undefined;

// console.log(result);
function waitUntil (message){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(message); //error o excepción
        }, 2000);
    });
}
// waitUntil('puras promesas aquí!').then(result=>{
//     console.log(result);
// }).catch(err=>{ //tenemos control sobre las excepciones que surjan y que no slagan en consola
//     console.log(err);
// })
// console.log(result);

function multiplicar(num1, num2){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(num1 * num2);
            // reject(num1*num2);
        }, 1500)
    })
}

function dividir(num1, num2){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve(num1/num2), 2000);
    })
}

// Promise.all([multiplicar(1,2), dividir(1,2), 'Promesas qui', 35]).then((result)=>{
//     console.log(result);
// }).catch(error=>{
//     console.log(error);
// })
// el metodo all ejecuta todas las promesas que esten bien (que se envien)
// si una  de esas promesas está mal deuelve solo la excepción


function multiplicarLento(num1, num2){
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num1*num2), 2000)
    })
}

function dividirRapido(num1, num2){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(num1/num2), 2000);
    })
}
// Promise.race([multiplicarLento(1,2), dividirRapido(1,2)])
// .then((result)=>{
//     console.log('THEN', result);
// })
// .catch((error)=>{
//     console.log('Error', error)
// })

// race devuelve el resultado de la primera promesa en resolverse
// si alguna falla y es l más rápida, se devuelve en forma de excepción o error (catch)
//SIEMPRE QUE SEA NECESARIO USAR CALLBACKS