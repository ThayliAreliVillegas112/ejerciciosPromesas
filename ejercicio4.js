/*Ejercicio 4: Promesas en Cadena con Retraso
Crea una función que realice las siguientes tareas:

Recibe un número n como argumento.
Utiliza un bucle para crear una cadena de promesas, donde cada promesa 
se resuelve después de N segundos con el número actual en el bucle.
Cada promesa debe imprimir el número en la consola antes de resolverse.
Finalmente, devuelve una promesa que se resuelva después de N segundos 
con el mensaje "Todas las promesas se resolvieron".*/


function ejercicio4(numero){
    return new Promise((resolve, reject)=>{
        const promesas = [];
        for (let i = 1; i <= numero; i++) {
            const promesa = new Promise(auxResolve => {
              setTimeout(() => {
                console.log(`Promesa ${i} resuelta`);
                auxResolve(i);
              }, i * 1000); // Esperar i segundos antes de resolver esta promesa
            });
            promesas.push(promesa);
        }

        // Esperar a que todas las promesas se resuelvan
        Promise.all(promesas)
        .then(resultados => {
        // Imprimir un mensaje cuando todas las promesas se resuelvan
            console.log("Todas las promesas se resolvieron");
        resolve("Todas las promesas se resolvieron");
        })
        .catch(error => {
            reject(error); // Manejar cualquier error en la cadena de promesas
        });

    });
}

ejercicio4(5)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error("Error:", error);
  });