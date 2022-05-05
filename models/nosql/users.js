const mongoose = require('mongoose');

// Defino el esquema de Usuarios con los campos que se van a guardar en la base de datos

// creo el esquema de Usuarios
const UserSchema = new mongoose.Schema(
  // nombre de los campos que va a guardar
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    role:{
      type: ["user","admin"],
      default: "user"
    }

  },
  // configuraciones del esquema
  {
    timestamps: true, // guarda la fecha de creacion y actualizacion de cada campo
    versionKey: false, // no muestra la version de cada campo
  }
);

// Exporto Users que es la coleccion que voy a crear en la base de datos 
// y le paso el esquema para crear los campos que tiene el modelo 
module.exports = mongoose.model('Users', UserSchema);