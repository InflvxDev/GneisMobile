const habitacionmodel = require('../models/habitacion.model');
class HabitacionService {

    HabitacionService() {}

    guardarhabitacion(habitacion = new habitacionmodel()) {
        habitacionmodel.create(habitacion).then((habitacionbd) => {
            console.log(habitacionbd);
        }).catch((error) => {
            console.log(error);
        })

        // const habitacion = new habitacionmodel(habitacion)
        // habitacion.save()
    }

    async consultarhabitaciones() {

        // await habitacionmodel.find().then((listahabiaciones) => {
        //     return listahabiaciones;
        // }).catch((error) => {
        //     console.log(error);
        // })

        try {
            return await habitacionmodel.find();

        } catch (error) {
            return error;

        }
    }

    async eliminarhabitacion(idh) {
        try {
            await habitacionmodel.findOneAndRemove({
                idhabitacion: idh
            })
        } catch (error) {
            console.log(error);
        }
    }

    async modificarhabitacion(habitacionmod) {
        try {
            await habitacionmodel.findOneAndUpdate({
                idhabitacion: habitacionmod.idhabitacion
            }, habitacionmod)
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = new HabitacionService();