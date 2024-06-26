const mongoose = require("mongoose")

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    try{
        mongoose.connect(process.env.DB, connectionParams)
        console.log("Connected to the database")
    } catch(err){
        console.log(err)
        console.log("could not connect to database")
    }
}