const mysql = require('mysql2');
const connect = require('./app');
const path = require('path')

let databaseConnection = mysql.createPool({
  host: process.env.MySQL_host,
  user: process.env.MySQL_user,
  password: process.env.MySQL_pass,
  database: process.env.MySQL_db,
  multipleStatements: true,
  })
  databaseConnection.getConnection((err)=>{
    if(err){
        console.log("There is an error mere bhai !"+ JSON.stringify(err, undefined, 2));
    }else{
        console.log("Connected to database")
    }
  })

  module.exports = databaseConnection