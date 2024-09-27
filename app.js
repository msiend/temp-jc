const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, `./.env`) });
const port = process.env.PORT
const cors = require("cors")
const ejs = require('ejs')
const bodyParser = require('body-parser')
const connection = require('./runner.js')
const indexRouter = require('./routes/index.js');
// const { hostname } = require('os')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())

app.get('/employees/:id', (req,res)=>{
  connection.query(`SELECT * FROM clients WHERE id=?`, [req.params.id], (err,rows)=>{
    if(err){
      console.log(err)
    }else{
      res.send(rows)
    }
  })
})
// app.delete('/employess/:id', (req,res)=>{
//   connection.query(`SELECT DELETE FROM clients WHERE id=?`, [req.params.id], (err,rows)=>{
//     if(err){
//       console.log(err)
//     }else{
//       console.log(rows)
//       res.send(rows)
//     }
//   })
// })
app.use('/', indexRouter)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})

  
module.exports = app;
