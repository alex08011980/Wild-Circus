const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'quest',
    password: 'lempd',
    database: 'geometre'
});
module.exports = connection;

