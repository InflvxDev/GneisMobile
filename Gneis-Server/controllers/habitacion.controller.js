const habitacionservice = require('../services/habitacion.service')
const consultarhabitaciones = async(req, res = response) => {
    res.json({
        ok: true,
        listado: await habitacionservice.consultarhabitaciones()
    })
}

const agregarhabitaciones = (req, res = response) => {
    habitacionservice.guardarhabitacion(req.body)
    res.json({
        ok: true,
        body: req.body
    })
}

const modificarhabitacion = async(req, res = response) => {
    await habitacionservice.modificarhabitacion(req.body)
    res.json({
        ok: true,
    })
}

const eliminarhabitacion = async(req, res = response) => {
    await habitacionservice.eliminarhabitacion(req.params.id)
    res.json({
        ok: true,
        parametro: req.params.id
    })
}


module.exports = { consultarhabitaciones, agregarhabitaciones, modificarhabitacion, eliminarhabitacion };