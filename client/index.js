'use strict';

/* IMPORTS */
const express = require('express')
const axios = require('axios');
//-------------------------------------------



var port = process.env.PORT || 4000
var ip = process.env.PORT || '0.0.0.0'

const app = express();

app.get('/', (req, res) => {res.send('ola')})

let data = {}

app.get('/inventory/search', (req,res) => {
    const item = req.query.q;
  console.log('query item: ',item)
  if(item)
  {
    console.log('Existe Item');
    (async () => {
      await axios.get('http://servidor:8000/search', { params: {  q: item}}).then(res2 => {
      //console.log(`statusCode: ${res2.status}`)
      //console.log(res)
      data = res2.data;
      res.json(data);
    }).catch(error => {console.error(error)})
    })();
    
  }else{
    res.json({});
  }
});

app.listen(port,()=>{
    console.log(`Servidor de grpc-app corriendo en: http://localhost:${port}.`)
});