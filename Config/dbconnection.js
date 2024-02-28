require ('dotenv').config();
 const mongoose=require('mongoose');
  module.exports= {
    connectDB: async()=>{
        try {
            await mongoose.connect(process.env.MONGODB_URL).then(()=>{
                console.log("MongoDb Connected...");
            });
        } catch (error) {
           
            console.log(error);
        }
        
    }
}
