const express = require('express');
const router = express.Router();

// Creo una ruta para la página de tracks
router.get('/', (req, res) => {
    data =['Hola', 'Mundo'];
    res.send({data});// Respuesta a la página de tracks
});

module.exports = router;