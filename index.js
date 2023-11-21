const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors') 
const path=require('path')
const MainRouter=require('./routes/mainroute')
const PORT=process.env.PORT || 5000;
require('dotenv').config()
const { db } = require('./db');
app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use('/',MainRouter)


const server = () => {
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}
server()