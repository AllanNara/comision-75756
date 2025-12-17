const fs = require('fs'); //A este punto nos debe quedar perfectamente claro cómo importar el módulo de fileSystem

const operacionesAsincronas = async () => { //Nota que la función debe ser asincrona porque trabajamos con promesas.
  //Escribimos un archivo
  await fs.promises.writeFile('./ejemploPromesa.txt', 'Hola desde promesa'); // (ruta y nombre de archivo , contenido)
  //Utilizar el módulo de promises nos facilita la operación para no requerir estar dentro de un callback.

  let resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8'); // (ruta y nombre de archivo , codificación)
  console.log(resultado); // Veremos: "Hola desde promesa";

  //Modificamos el archivo
  await fs.promises.appendFile('./ejemploPromesa.txt', ' Contenido adicional'); // (ruta y nombre de archivo , contenido)

  //releemos el archivo
  resultado = await fs.promises.readFile('./ejemploPromesa.txt', 'utf-8');
  console.log(resultado); // Veremos: "Hola desde promesa! Contenido adicional"

  //finalmente, borramos el archivo
  await fs.promises.unlink('./ejemploPromesa.txt');
}

operacionesAsincronas();

//Tenemos un código mucho más limpio, mucho más simple y mucho más entendible.
