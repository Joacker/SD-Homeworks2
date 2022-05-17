'use strict';
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

//kafka
/*var consumer = new Kafka.KafkaConsumer({
'group.id': 'kafka',
'metadata.broker.list': 'elkafka:9092',
}, {});

consumer.connect();
consumer.on('ready', () => {
    console.log('consumer ready..')
    consumer.subscribe(['test']);
    consumer.consume();
  }).on('data', function(data) {
    console.log(`received message: ${eventType.fromBuffer(data.value)}`);
  });
global.consumer = consumer;*/
/* VARIABLES */

var port = process.env.PORT || 8000;

//app.use(require('./api/find'))

app.get('/', (req, res) => {res.send('ola api-block')})

/* PORTS */

app.listen(port,()=>{
    console.log(`API-Blocked run in: http://localhost:${port}.`)
});