const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');

require('dotenv').config();
require('./class/DB_CONECTION').dbConection();



app.use(express.json())
app.use(cors());
app.use('/habitacion', require('./routes/habitacion.routes'));
app.use('/cliente', require('./routes/cliente.routes'));

server.listen(process.env.PORT, (error) => {
    if (error) throw new Error(error);
    console.log("server on");
});