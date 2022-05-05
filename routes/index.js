const express = require('express');
const fs = require('fs');// Paquete que me permite trabjar con el sistema de archivos

const router = express.Router();
const PATH_ROUTE = __dirname; // Obtengo la ruta del archivo donde está este archivo

const removeExtension = (fileName) => {
  // Elimino la extensión del nombre del archivo
  return fileName.split('.').shift(); // Divido el string por el punto, esto se convierte en un array  y luego tomo solo la primera parte del array
}


const arrFile = fs.readdirSync(PATH_ROUTE);// Obtengo un array con todos los archivos que hay en la ruta en formato array.

const arrNameFile = arrFile.filter( file => {
  // Concateno el nombre del archivo con una familia de ruta
  const nameFile = removeExtension(file);
  if(nameFile !== 'index'){
    // Si el nombre del archivo no es index, entonces es un archivo que se va a importar.
    
    // Voy creando las rutas para cada archivo que se encontró en el directorio que obtube mediante __dirname. Es dicir que a router.use le voy pasando el nombre del archivo que se encontró en el directorio para crear la ruta. Y importo los controladores que se encuentra dentro del mismo archivo. Esto queda asi route.use('/api/tracks', require('./routes/tracks'));
    router.use(`/${nameFile}`, require(`./${file}`));
  }
});

console.log(arrNameFile);


module.exports = router;
