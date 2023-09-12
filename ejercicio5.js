/*Ejercicio 5: Promesa con Cancelación
Crea una función que realice las siguientes tareas:

Inicia una promesa que se resuelva después de 5 segundos con un mensaje.
Si se llama a una función cancel antes de que se cumplan los 5 segundos, 
la promesa debe rechazarse con el mensaje "Promesa cancelada".*/



let promise;

function createPromise() {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      resolve("Promesa resuelta después de 5 segundos");
      console.log("Promesa resuelta");
    }, 5000);

    function cancel() {
      clearTimeout(timeoutId);
      reject("Promesa cancelada");
    }
    promise = cancel;
  });
}

document.getElementById("startButton").addEventListener("click", () => {
  promise = null; // Reinicia la variable global promise
  createPromise()
    .then((message) => {
      document.getElementById("result").textContent = message;
    })
    .catch((error) => {
      document.getElementById("result").textContent = error;
    });
});

document.getElementById("cancelButton").addEventListener("click", () => {
  if (promise) {
    promise(); 
    document.getElementById("result").textContent = "Promesa cancelada";
    console.log("Promesa Cancelada");
  }
});