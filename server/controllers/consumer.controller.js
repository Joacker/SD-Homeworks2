const { poolGRPC } = require('../configs/database')
const axios = require('axios')
const https = require('https')
const redis = require('redis');
//const Pool = require('pg').Pool

const redisclient = redis.createClient({
    url: process.env.REDIS_URL
});
console.log('waiting for redis start...')
redisclient.on('ready', function () {
    console.log('redis is ready',process.env.REDIS_URL)
});
redisclient.connect();
//console.log('Redis conection: '+redisclient.isOpen);
global.redisclient = redisclient;


const getItems = async (req,res) => {
  const item = req.query.name;
  if (item) {
      console.log('Existe Item');
    grpc.GetItem({name: item}, (error, items) => {
        if (error){
            //console.log(error);
            res.json({});
        } res.json(items);
    })
  }
};

const getRedis = async (req, res) => {
    console.log('Entro al Servidor');
    const item = req.query.q;
    console.log('Item Enviado: ',item)
    let cache = null;
    (async () => {
      let reply = await redisclient.get(item);
      //Esta condicion determina si el item esta en cache
        if(reply)
        {
          console.log('Esta en Cache');
          
          cache = JSON.parse(reply)
          res.json(cache);
          //contador de consultas en cache
        }else{
          console.log('No esta en Cache');
          axios.get('http://g_rpc:6000/items', 
          {
               params:{
                   name: item
                }
            }).then( res2 => {
            
            let data = JSON.stringify(res2.data)
            redisclient.set(item, data);
            cache = res2.data;
            res.json(cache);
          }).catch(error => {console.error(error)})
          
        }
        console.log(await redisclient.keys("*"));
    })();
  };


module.exports = {
    getItems,
    getRedis,
};