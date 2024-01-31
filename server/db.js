const Pool = require("pg").Pool;

const pool = new Pool({
    user : "postgres",
    password : "anirudh",
    host : "localhost",
    port: 5432,
    database : "tpl_registrations"
});

module.exports = pool;