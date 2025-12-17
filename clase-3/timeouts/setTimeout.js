const temporizador = (callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
};

let operacion = () => console.log("Realizando operación");

console.log("Iniciando tarea!");
temporizador(operacion); // Metemos la "operacion" al temporizador
console.log("Tarea finalizada!");

/*
* Orden de salida:
*
* Iniciando tarea!
* Tarea finalizada!
* Realizando operación
*
* La tarea "operación" tuvo que esperar 5000 milisegundos (5 segundos)
* para poder ejecutarse, pero al ser asincrono, el programa pudo continuar
* y pudo finalizar sin esperar dicha operación
*/
