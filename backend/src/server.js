const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect(`mongodb://drawerhost:LyNx123#@162.254.204.25:27017/omnistack9`, {
    useNewUrlParser: true, // Silencia o erro do MongoDB
    useUnifiedTopology: true, // Silencia o erro do MongoDB
    poolSize: 5,
    promiseLibrary: global.Promise,
    authSource: 'admin'
}).then((conn) => {
    console.log("Banco de Dados Conectado com Sucesso!")
})

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);