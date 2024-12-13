const mongoose = require("mongoose")

const  connectDb = async (req,res)=>{
    const connection = await mongoose.connect(process.env.MONGO_URI)
    if(connection.STATES.connected){
        return console.log("DB Connected")
    }

    if(connection.STATES.disconnected){
        return console.log("DB Disconnected")
    }
}

module.exports = {connectDb}

// 9joX7kDzbZcpy5rG