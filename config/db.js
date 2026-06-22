const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        //console.log("MongoDB Connected Succesfully")
    }catch (error){
        console.log("MongoDB Connection Error:", error.message);
        process.exit(1);
    }
}

//exporting database connect function
module.exports = connectDB;