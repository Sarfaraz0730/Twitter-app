const mongoose = require("mongoose");
require('dotenv').config();

async function connectDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
       
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        process.exit(1); 
    }
}
connectDatabase()
    .then(() => console.log("Databases is connected")  )
    .catch(err => console.error(err));

module.exports = connectDatabase;
 