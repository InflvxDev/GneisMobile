const clientemodel = require('../models/cliente.model');

class ClienteService {
    ClienteService() {}

    async guardacliente(cliente = new clientemodel()) {
        try {
            await clientemodel.create(cliente);

        } catch (error) {
            console.log(error);

        }
    }

    async consultarclientes() {
        try {

            return await clientemodel.find();
        } catch (error) {
            return error;

        }
    }

    async eliminarcliente(idc) {
        try {
            await clientemodel.findOneAndRemove({
                cedula: idc
            })

        } catch (error) {
            console.log(error);

        }
    }

    async modificarcliente(clientemod) {
        try {
            await clientemodel.findOneAndUpdate({
                cedula: clientemod.cedula
            }, clientemod)
        } catch (error) {
            console.log(error);

        }
    }


}

module.exports = new ClienteService();