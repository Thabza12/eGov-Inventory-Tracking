const express = require('express');
var cors = require('cors');

const clientRoute = require('./routes/clients');
const zoneRoute = require('./routes/zones');

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/client', clientRoute);
app.use('/zone', zoneRoute);


module.exports = app;