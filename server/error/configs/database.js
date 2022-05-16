/* IMPORT */

const Pool = require('pg').Pool


/* ENVS */

const poolBlock = new Pool ({
    host: 'postgres',
    user: 'postgres',
    password: 'postgres',
    database: 'membrillo',
    port: '5432',
});



module.exports = {
    poolBlock,
};