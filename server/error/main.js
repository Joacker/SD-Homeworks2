/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
//-------------------------------------------

/* CONFIGS */
//server.server();
const app = express()
dotenv.config()
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cors())

/* VARIABLES */

var port = process.env.PORT || 8000;

//app.use(require('./api/find'))


/* PORTS */

app.listen(port,()=>{
    console.log(`API-Blocked run in: http://localhost:${port}.`)
});