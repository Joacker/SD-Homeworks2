"use strict";
/* IMPORTS */
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const { Kafka } = require("kafkajs");

//-------------------------------------------

/* CONFIGS */
//server.server();
const app = express();
dotenv.config();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 3000;
var host = process.env.PORT || '0.0.0.0';
///////////////////////////////////////////////////////////////

var kafka = new Kafka({
  clientId: "my-app",
  brokers: ["kafka:9092"],
});

app.post("/login", (req, res) => {
  console.log("login");
  (async () => {
      const producer = kafka.producer();
      const admin = kafka.admin();
      await producer.connect();
      // await admin.connect();
      // await admin.createTopics({
      //   waitForLeader: true,
      //   topics: [{ 
      //     topic: "test-topic", replicationFactor: 1 
      //   }],
      // })
      const { username, password } = req.body;
      var time = Math.floor(new Date() / 1000);
      let user = {
        username: username,
        password: password,
        tiempo: time.toString()
      }
      await producer.send({
        topic: "test-topic",
        //value: JSON.stringify(user)
        messages: [{ value: JSON.stringify(user) }],
      })
      await producer.disconnect();
      //await admin.disconnect();
      res.json(user);
  })();
});



  ///////////////////////////////////////////////////////////////  




//kafka
/*const main = async () => {
  const producer = kafka.producer();

  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Hello KafkaJS user!" }],
  });
  //await producer.disconnect();

  const consumer = kafka.consumer({ groupId: "test-group" });

  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("ola");
      var time = Math.floor(new Date() / 1000);
      
      //users.users['guillermo'].tiempo = time.toString();
      //const {user} = reg.body;
      const user = {"username": "guillermo", "password": "123"};
      Object.entries(users.users).forEach(([key, value]) => {
        if(value.username == user.username && value.password == user.password){
          value.tiempo = time;
        }
      });
      //console.log(users.users["guillermo"]["tiempo"]);
      Object.entries(users.users).forEach(([key, value]) => {
        console.log(key, value);
        //keys.push(value.clave_entidad);
        //console.log(value.id_entidad,value.clave_entidad);
      });
      console.log({
        value: message.value.toString(),
      });
    },
  });
};
main();*/

app.get("/", (req, res) => {
  res.send("ola api");
});

/* VARIABLES */

//app.use(require('./api/find'))
/* PORTS */

app.listen(port,host, () => {
  console.log(`API run in: http://localhost:${port}.`);
});
