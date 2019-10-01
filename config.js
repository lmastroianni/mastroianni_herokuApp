const config = require('../config');
const mysql = require('mysql');

var connect  = mysql.createPool({
    connectionLimit : 10,
    host            : config.host,
    user            : config.uname,
    password        : config.unpass,
    database        : config.db,
  });