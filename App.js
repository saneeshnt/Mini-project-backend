require("dotenv").config();
const express = require ( "express" );
const app = express ();
const cors =require("cors");
const dbconnection= require ("./Config/dbconnection");


dbconnection.connectDB();

const PORT = process.env.PORT 
app.listen(PORT, () => console.log(`Server is  running on port ${PORT}`));
