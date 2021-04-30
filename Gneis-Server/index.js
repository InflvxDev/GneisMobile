const express = require('express');
const app = express();
const server = require('http').createServer(app);
const cors = require('cors');
const mongose = require('mongoose');
require('dotenv').config();
// 
try {
    mongose.connect(process.env.CONECTIONDB, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

} catch (error) {

    throw new Error(error);

}

app.use(express.json())
app.use(cors());
app.use('/habitacion', require('./routes/habitacion.routes'));

server.listen(3000, (error) => {
    if (error) throw new Error(error);
    console.log("server on");
});