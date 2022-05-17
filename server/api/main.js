/* IMPORTS */
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const Kafka = require('node-rdkafka')

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
//kafka
const stream = Kafka.Producer.createWriteStream({
'metadata.broker.list': 'kafka:9092'
}, {}, {
topic: 'test'
});
stream.on('error', (err) => {
console.error('Error in our kafka stream');
console.error(err);
});
global.stream =stream;

/* VARIABLES */

var port = process.env.PORT || 3000;

//app.use(require('./api/find'))
app.get('/', (req, res) => {res.send('ola api')})

/* PORTS */

app.listen(port,()=>{
    console.log(`API run in: http://localhost:${port}.`)
});