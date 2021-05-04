const habitacionservice = require('../services/habitacion.service')

const consultarhabitaciones = async(req, res = response) => {
    res.json({
        ok: true,
        habitaciones: await habitacionservice.consultarhabitaciones()
    })
}

const agregarhabitaciones = async(req, res = response) => {
    await habitacionservice.guardarhabitacion(req.body)
    res.json({
        ok: true,
        habitaciones: await habitacionservice.consultarhabitaciones()
    })
}

const modificarhabitacion = async(req, res = response) => {
    await habitacionservice.modificarhabitacion(req.body)
    res.json({
        ok: true,
        habitaciones: await habitacionservice.consultarhabitaciones()
    })
}

const eliminarhabitacion = async(req, res = response) => {
    await habitacionservice.eliminarhabitacion(req.params.id)
    res.json({
        ok: true,
        habitaciones: await habitacionservice.consultarhabitaciones()
    })
}


module.exports = { consultarhabitaciones, agregarhabitaciones, modificarhabitacion, eliminarhabitacion };