'use strict';

/* IMPORTS */
const express = require('express')
const axios = require('axios');
//-------------------------------------------



var port = process.env.PORT || 4000
var ip = process.env.PORT || '0.0.0.0'

const app = express();

app.get('/', (req, res) => {res.send('ola')})


app.listen(port,()=>{
    console.log(`Servidor de client-app corriendo en: http://localhost:${port}.`)
});