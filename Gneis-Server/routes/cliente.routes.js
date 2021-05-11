const { Router, response } = require('express');
const { consultarclientes, agregarclientes, modificarcliente, eliminarcliente } = require('../controllers/cliente.controller')
const router = Router();

router.get('/', consultarclientes);

router.post('/', agregarclientes);

router.put('/', modificarcliente);

router.delete('/:id', eliminarcliente)

module.exports = router;