const clienteService = require('../services/cliente.service');

const consultarclientes = async(req, res) => {
    res.json({
        ok: true,
        listado: await clienteService.consultarclientes()
    })
}


const agregarclientes = async(req, res) => {
    await clienteService.guardacliente(req.body)
    res.json({
        ok: true,
        body: req.body
    })
}