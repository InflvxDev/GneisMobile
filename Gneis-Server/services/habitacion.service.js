const habitacionmodel = require('../models/habitacion.model');

class HabitacionService {

    HabitacionService() {}

    async guardarhabitacion(habitacion = new habitacionmodel()) {
        try {
            habitacionmodel.create(habitacion);

        } catch (error) {
            console.log(error);

        }
    }

    // guardarhabitacion(habitacion = new habitacionmodel()) {
    //     habitacionmodel.create(habitacion).then((habitacionbd) => {
    //         console.log(habitacionbd);
    //     }).catch((error) => {
    //         console.log(error);
    //     })

    // }

    async consultarhabitaciones() {

        try {
            return await habitacionmodel.find();

        } catch (error) {
            return error;

        }
    }

    async eliminarhabitacion(idh) {
        try {
            await habitacionmodel.findOneAndRemove({
                nombre: idh
            })
        } catch (error) {
            console.log(error);
        }
    }

    async modificarhabitacion(habitacionmod) {
        try {
            await habitacionmodel.findOneAndUpdate({
                nombre: habitacionmod.nombre
            }, habitacionmod)
        } catch (error) {
            console.log(error);
        }

    }
}

module.exports = new HabitacionService();