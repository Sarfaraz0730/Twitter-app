const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/User-routes/signin.js');
const home = require("./routes/Home-route/home.js")

var cors = require('cors')
const app = express();
const PORT =process.env.PORT;


app.use(cors())
app.use(userRoutes)
app.use(home)


app.listen(PORT,()=>{
    console.log(`Server is Listening on PORT ${PORT}`)
})