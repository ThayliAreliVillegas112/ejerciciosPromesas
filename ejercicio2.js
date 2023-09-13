// Ejercicio 2: Promesa de Múltiples Solicitudes
// Crea una función que realice las siguientes tareas:

// Recibe un array de URLs como argumento.
// Utiliza fetch y promesas para realizar una solicitud GET a cada URL en el array.
// Devuelve una promesa que se resuelva con un array de los resultados de todas las solicitudes.

function multiplesUrls(urls) {
  const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
  return Promise.all(fetchPromises);
}

const urls = ['https://jsonplaceholder.typicode.com/users/1', 'https://jsonplaceholder.typicode.com/users/2', 'https://jsonplaceholder.typicode.com/users/3'];
multiplesUrls(urls)
  .then(results => {
        console.log(results);
  })
  .catch(error => {
        console.error(error);
  });
