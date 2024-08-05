// load .env file contents into process.env by default


require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const router =require('./Router/router')
require('./DB/connection')

// create express server

const pfServer = express()

 pfServer.use(cors())

 pfServer.use(express.json())
 pfServer.use(router)
 pfServer.use('/uploads',express.static('./uploads'))


 const PORT = 4000 || process.env.PORT

 pfServer.listen(PORT, ()=>{
    console.log(`Project Fair Started Running At Port: ${PORT} and waiting for the clien request!!!`);
 })

 pfServer.get('/',(req,res) => {
    res.send('<h1> Project Fair Started and Waiting for the client request</h1')
 })

 pfServer.post('/',(req,res)=>{
    res.send('post request')
 })

 pfServer.put('/',(req,res)=>{
    res.send('put request')
 })