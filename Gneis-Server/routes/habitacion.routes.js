const { Router, response } = require('express');
const { consultarhabitaciones, agregarhabitaciones, modificarhabitacion, eliminarhabitacion } = require('../controllers/habitacion.controller');
const router = Router();

router.get('/', consultarhabitaciones);

router.post('/', agregarhabitaciones);

router.put('/', modificarhabitacion);

router.delete('/:id', eliminarhabitacion)

module.exports = router;