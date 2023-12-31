const express = require('express');
require('dotenv').config();
// const userRoutes = require('./routes/User-routes/signin.js');
const home = require("./routes/Home-route/home.js")
const  connectDatabase = require("./database/db.js")
const router = require("./routes/index.js")
var cors = require('cors')
const app = express();
const PORT =8000;

app.use(express.json())
app.use(cors())
app.use(router)
// app.use(userRoutes)
app.use(home)

connectDatabase()
app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})