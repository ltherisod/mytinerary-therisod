const express =require('express')
const cors = require('cors')
const router = require('./routes/index')
require('dotenv').config()
require('./config/dataBase')
const app = express()

app.use(cors()) //Middleware
app.use(express.json()) //Middleware 
app.use('/api', router)

app.listen(4000,()=>console.log('Running on port 4000'))