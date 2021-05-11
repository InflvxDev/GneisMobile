const clienteService = require('../services/cliente.service');

const consultarclientes = async(req, res = response) => {
    res.json({
        ok: true,
        clientes: await clienteService.consultarclientes()
    })
}


const agregarclientes = async(req, res = response) => {
    await clienteService.guardacliente(req.body)
    res.json({
        ok: true,
        clientes: await clienteService.consultarclientes()
    })
}

const modificarcliente = async(req, res = response) => {
    await clienteService.modificarcliente(req.body)
    res.json({
        ok: true,
        clientes: await clienteService.consultarclientes()
    })
}

const eliminarcliente = async(req, res = response) => {
    await clienteService.eliminarcliente(req.params.id)
    res.json({
        ok: true,
        clientes: await clienteService.consultarclientes()
    })
}


module.exports = { consultarclientes, agregarclientes, modificarcliente, eliminarcliente };