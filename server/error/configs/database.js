/* IMPORT */

const Pool = require('pg').Pool


/* ENVS */

const poolGRPC = new Pool ({
    host: 'postgres',
    user: 'postgres',
    password: 'salte_w_si_no_estas_bailando_con_ella_salte',
    database: 'membrillo',
    port: '5432',
});



module.exports = {
    poolGRPC,
};