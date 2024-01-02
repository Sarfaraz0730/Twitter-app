const jwt = require("jsonwebtoken");
require('dotenv').config();

const verify = (req, res, next) => {
   const token= req.header("Authorization")?.split(" ")[1]

   if(!token){
    return res.status(401).json({ message: 'Unauthorized, No token provided' });
   }
   try{
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.decoded = decoded;
   }catch(err){
    return res.status(401).json({ message: 'Unauthorized, Invalid token' });
   }
   next()
};

module.exports = verify

