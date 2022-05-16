/* IMPORT */

const Pool = require('pg').Pool


/* ENVS */

const poolGRPC = new Pool ({
    host: 'postgres',
    user: 'postgres',
    password: 'marihuana',
    database: 'tiendita',
    port: '5432',
});



module.exports = {
    poolGRPC,
};