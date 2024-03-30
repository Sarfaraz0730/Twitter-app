const express = require('express');
require('dotenv').config();
const  connectDatabase = require("./database/db.js")
const router = require("./routes/index.js")
var cors = require('cors')
const app = express();
const PORT =8000;

app.use(express.json());
app.use(express.urlencoded({extended:false})) 
app.use(cors())
app.use(router)

connectDatabase()
app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})