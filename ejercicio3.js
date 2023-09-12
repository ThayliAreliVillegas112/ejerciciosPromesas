/*Ejercicio 3: Promesas Paralelas
Crea una función que realice las siguientes tareas:

Recibe un array de funciones que devuelven promesas como argumento.
Ejecuta todas las funciones en paralelo y espera a que todas las promesas se resuelvan.
Devuelve una promesa que se resuelva con un array de los resultados de todas las promesas.*/


/*function ejecutarPromesasParalelas(funcionesPromesa) {
    // Usamos Promise.all() para ejecutar las promesas en paralelo
    return Promise.all(funcionesPromesa.map(funcion => funcion()));
  }*/
  
  // Ejemplo de uso:
  const promesa1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resultado de la Promesa 1");
      }, 1000);
    });
  };
  
  const promesa2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resultado de la Promesa 2");
      }, 2000);
    });
  };
  
  const promesa3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Resultado de la Promesa 3");
      }, 1500);
    });
  };
  
 
  
Promise.all([promesa1(), promesa2(), promesa3()]).then((result)=>{
     console.log(result);
 }).catch(error=>{
    console.log(error);
})

 /*const funcionesPromesa = [promesa1, promesa2, promesa3];
  
  ejecutarPromesasParalelas(funcionesPromesa)
    .then(resultados => {
      console.log("Todos los resultados:", resultados);
    })
    .catch(error => {
      console.error("Al menos una promesa falló:", error);
    });*/