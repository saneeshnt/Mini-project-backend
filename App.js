require("dotenv").config();
const express = require ( "express" );
const app = express ();
const cors =require("cors");
const dbconnection= require ("./Config/dbconnection");
const adminRoutes=require('./Routes/AdminRoutes')
const userRoutes=require('./Routes/UserRoutes');



dbconnection.connectDB();

const PORT = process.env.PORT 
app.listen(PORT, () => console.log(`Server is  running on port ${PORT}`));

 app.use("/",userRoutes)
 app.use("/admin",adminRoutes)