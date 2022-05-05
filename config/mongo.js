const mongoose = require('mongoose');// Importo el orm de mongoose 

// Funcion para conectarme a la base de datos de mongo, 
const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  // Metodo que recibe la uri de la base de datos para poder conectarnos
  mongoose.connect(DB_URI,
    {
      //Parametros de configuracion de mongoose
      // Para que no muestre los errores en consola
      useNewUrlParser: true, 
      // Para que no de error si se cambia la url de la base de datos
      useUnifiedTopology: true, 
    },
     (err, res) => {
       // Funcion que se ejecuta cuando se conecta a la base de datos con el error y la respuesta
        if(!err) {
          console.log('***** CONNECT DB SUCCES *****');
        }else{
          console.log('***** CONNECT DB FAIL *****');
        }
  })
};

module.exports = dbConnect;