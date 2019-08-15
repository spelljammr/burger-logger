var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'g8r9w9tmspbwmsyo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'h76vih75tfs83cbj',
  password: 'qd78i79o822m0cr6',
  database: 'dfut9ek6xvin0nmc'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
